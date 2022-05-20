import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { Card, Col, Container, Row, Badge, Tabs, Tab } from 'react-bootstrap';
import * as Constant from '../../config/constant';
import axios from 'axios';
import * as resource from '../../../src/config/resource';
import PlayerOrderHistory from './player-order-history';
import PlayerTokenWallet from './player-token-wallet';

const PlayerDetail = () => {
    const location = useLocation();
    let a = { id: localStorage.getItem('playerId') }
    if (location.state === undefined) {
        location.state = a;
    }
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    //#region Get Player Details By PlayerId
    const getPlayerDetails = async () => {
        try {
            const queryResult = await axios.post(
                Constant.GraphQL_API, {
                query: Constant.Get_PlayerDetailsBy_Id,
                variables: { playerId: location.state.id }
            }, {
                headers: {
                    'x-hasura-access-key': process.env.REACT_APP_API_HEADER_KEY
                }
            }
            ).then(res => {
                setData(res.data.data.player_players[0]);
            });
            setLoading(true);
        }
        catch (err) {
            setLoading(false);
        }
    };
    //#endregion

    useEffect(() => {
        getPlayerDetails()
    }, []);

    return (
        <>{loading ? <React.Fragment>
            <div className='d-flex justify-content-between'>
                <div className='d-flex flex-column'>
                    <div>
                        <h4><b>{data.id}</b></h4>
                    </div>

                    <div className='mr-auto justify-content-start'>
                    </div>
                </div>
                <div className='d-flex justify-content-center text-center'>
                </div>

            </div>

            <div className='mb-3 row'>
                <div className='col-md-12'>
                    <Tabs defaultActiveKey="playeraccount">
                        <Tab eventKey="playeraccount" title="Player Account">
                            <Container className='p-0 p-lg-0'>
                                <strong><h5>{resource.Players.LblPlayerIDStatusDetail}</h5></strong>
                                <hr/>
                                <div className="table-responsive">
                                    <table className="table table-borderless table-sm mb-0">
                                        <tbody>
                                            <tr>
                                                <td><b>{resource.Players.LblAccountStatus}</b></td>
                                                <td>
                                                    {data.aasm_state.toLowerCase().trim() === "active" ? <Badge key={data.id} pill className="mr-1 active-player">{resource.Players.BdgActive}</Badge>
                                                        : data.aasm_state.toLowerCase().trim() === "closing" ? <Badge key={data.id} pill className="mr-1 closing-player">{resource.Players.BdgClosing}</Badge>
                                                            : data.aasm_state.toLowerCase().trim() === "closed" ? <Badge key={data.id} pill className="mr-1 closed-player">{resource.Players.BdgClosed}</Badge>
                                                                : data.aasm_state.toLowerCase().trim() === "canceling" ? <Badge key={data.id} pill className="mr-1 canceling-player">{resource.Players.BdgCanceling}</Badge>
                                                                    : data.aasm_state.toLowerCase().trim() === "canceled" ? <Badge key={data.id} pill className="mr-1 canceled-player">{resource.Players.BdgCanceled}</Badge>
                                                                        : data.aasm_state.toLowerCase().trim() === "suspended" ? <Badge key={data.id} pill className="mr-1 suspended-player">{resource.Players.BdgSuspended}</Badge> : ""}
                                                </td>
                                                <td><b>{resource.Players.LblWageringStatus}</b></td>
                                                <td>
                                                    {data.wager_status.aasm_state.toLowerCase().trim() === "approved" ? <Badge key={data.id} pill variant="success" className="mr-1">{resource.Players.BdgApproved}</Badge> : <Badge key={data.id} pill variant="warning" className="mr-1">{resource.Players.BdgUnapproved}</Badge>}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><b>{resource.Players.LblUpdated}</b></td>
                                                <td>{data.updated_at.split('.')[0]}</td>
                                                <td><b>{resource.Players.LblCreated}</b></td>
                                                <td>{data.created_at.split('.')[0]}</td>
                                            </tr>
                                            <tr>
                                                <td><b>{resource.Players.LblReason}</b></td>
                                                <td>{data.reason_for_state === "" ? 'NA' : data.reason_for_state}</td>
                                                <td><b>{resource.Players.LblPlayerId}</b></td>
                                                <td>{data.id}</td>
                                            </tr>
                                            <tr>
                                                <td><b>{resource.Players.LblMerchantReference}</b></td>
                                                <td>{data.merchant_reference}</td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Container>
                        </Tab>
                        <Tab eventKey="playervieworders" title="View Orders" className="playeraccountTab">
                            <PlayerOrderHistory playerId={location.state !== undefined ? location.state.id : ''} />
                        </Tab>
                        <Tab eventKey="playertokenwallets" title="Token Wallets" className="playeraccountTab">
                            <PlayerTokenWallet playerId={location.state !== undefined ? location.state.id : ''} />
                        </Tab>
                    </Tabs>
                </div>
            </div>

        </React.Fragment> : ""}
        </>

    );
}

export default PlayerDetail;