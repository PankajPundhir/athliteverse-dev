import React, { useState, useEffect } from 'react';
import * as Constant from '../../config/constant';
import axios from 'axios';
import { Row, Col, Card, Badge, } from 'react-bootstrap';
import * as resource from '../../../src/config/resource';
import Table from '../shared/table';
import { Link } from 'react-router-dom';

const PlayerWalletGamePlayDetails = ({ tokenwalletid, getTokenDetail }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    //#region  Get GamePlay Token List By Token WalletId
    const getPlayerGameTokens = async () => {
        try {
            const queryResult = await axios.post(
                Constant.GraphQL_API, {
                query: Constant.Get_GamePlayTokens_ByTokenWalletId,
                variables: { tokenwalletid: tokenwalletid }
            }, {
                headers: {
                    'x-hasura-access-key': process.env.REACT_APP_API_HEADER_KEY
                }
            }
            ).then(res => {
                setData(res.data.data.delayed_reveal_tokens);
                if (res.data.data.delayed_reveal_tokens.length > 0) {
                    setLoading(true);
                }
                else {
                    setLoading(false);
                }
            });
        }
        catch (err) {
            setLoading(false);
        }
    };
    //#endregion

    useEffect(() => {
        getPlayerGameTokens()
    }, []);

    const columns = React.useMemo(
        () =>
            [{
                Header: resource.Players.PlayerTokenWallet.LblCreated,
                accessor: 'created_at',
                disableGlobalFilter: true,
                Cell: e => e.value.split('.')[0]
            },
            {
                Header: resource.Players.PlayerTokenWallet.LblTokenDescription,
                accessor: 'token_desc', //TODO : Need to add in API
                disableGlobalFilter: true
            },
            {
                Header: resource.Players.PlayerTokenWallet.LblStatus,
                accessor: 'aasm_state',
                Cell: e => e.value.toLowerCase().trim() === "received" ? <div style={{ textAlign: "center" }}><Badge key={e} pill variant="success" className="mr-1">{resource.Players.BdgReceived}</Badge></div> : <div style={{ textAlign: "center" }}><Badge key={e} pill variant="warning" className="mr-1">{resource.Players.BdgRejected}</Badge></div>,
                disableGlobalFilter: true,

            },
            {
                Header: resource.Players.PlayerTokenWallet.LblCreditAmount,
                accessor: 'credit_cents',
                Cell: e => e.value === null ? <div style={{ textAlign: "end" }}>${'0.00'}</div> : <div style={{ textAlign: "end" }} >${e.value}</div>,
                disableGlobalFilter: true
            },
            {
                Header: resource.Players.PlayerTokenWallet.LblPrizeAmount,
                accessor: 'revealed_prize_cents',
                Cell: e => e.value === null ? <div style={{ textAlign: "end" }}>${'0.00'}</div> : <div style={{ textAlign: "end" }} >${e.value}</div>,
                disableGlobalFilter: true
            },
            {
                Header: resource.Players.PlayerTokenWallet.LblTokenID,
                accessor: 'id',
                Cell: e => <Link to={'#'} onClick={() => { getTokenDetail() }}>{e.value}</Link> //
            },
            ]
    );

    return (
        <React.Fragment>
            <Row>
                <Col>
                    {loading ? <div className='pt-3'>
                        <Table columns={columns} data={data} header={resource.Players.PlayerTokenWallet.HeadGameplayTokens} />
                    </div> :
                        <Card>
                            <Card.Body>
                                <div><span>{resource.Players.PlayerTokenWallet.MsgNoGameplayTokenFound}</span></div>
                            </Card.Body>
                        </Card>
                    }
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default PlayerWalletGamePlayDetails;