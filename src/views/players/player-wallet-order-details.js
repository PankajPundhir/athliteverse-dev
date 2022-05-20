import React, { useState, useEffect } from 'react';
import * as Constant from '../../config/constant';
import axios from 'axios';
import { Row, Col, Card, Badge, } from 'react-bootstrap';
import * as resource from '../../../src/config/resource';
import Table from '../shared/table';
import { Link } from 'react-router-dom';

const PlayerWalletOrderDetails = ({ tokenwalletid, playerid, getOrderDetail }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    //#region  Get Order Delivered List by PlayerId and Token Wallet ID
    const getPlayerWalletOrderList = async () => {
        try {
            const queryResult = await axios.post(
                Constant.GraphQL_API, {
                query: Constant.Get_OrderDelivered_ByTokenWalletId,
                variables: { playerid: playerid, tokenwalletid: tokenwalletid}//'e3c7d8d7-fee6-4b83-ad8f-33b67542e5cf' }//'e3c7d8d7-fee6-4b83-ad8f-33b67542e5cf'
            }, {
                headers: {
                    'x-hasura-access-key': process.env.REACT_APP_API_HEADER_KEY
                }
            }
            ).then(res => {
                setData(res.data.data.store_orders);
                if (res.data.data.store_orders.length > 0) {
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
        getPlayerWalletOrderList()
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
                Header: resource.Players.PlayerTokenWallet.LblStatus,
                accessor: 'aasm_state',
                //Cell: e => e.value === "received" ? <div style={{ textAlign: "center" }}><Badge key={e} pill variant="success" className="mr-1">{resource.Players.BdgReceived}</Badge></div> : <div style={{ textAlign: "center" }}><Badge key={e} pill variant="warning" className="mr-1">{resource.Players.BdgRejected}</Badge></div>,
                Cell: e => e.value.toLowerCase().trim() === "received" ? <div style={{ textAlign: "center" }}><Badge key={e.value + "received"} pill className="mr-1 Received-Order">{resource.Players.BdgReceived}</Badge></div>
                    : e.value.toLowerCase().trim() === "verifying player" ? <div style={{ textAlign: "center" }}><Badge key={e.value + "verifyingPlayer"} pill className="mr-1 Verifying_Player-Order">{resource.Players.BdgVerifyingPlayer}</Badge></div>
                        : e.value.toLowerCase().trim() === "reserving" ? <div style={{ textAlign: "center" }}><Badge key={e.value + "reserving"} pill className="mr-1 Reserving-Order">{resource.Players.BdgReserving}</Badge></div>
                            : e.value.toLowerCase().trim() === "reserved" ? <div style={{ textAlign: "center" }}><Badge key={e.value + "reserved"} pill className="mr-1 Reserved-Order">{resource.Players.BdgReserved}</Badge></div>
                                : e.value.toLowerCase().trim() === "sending to wallet" ? <div style={{ textAlign: "center" }}><Badge key={e.value + "Sending_to_Wallet"} pill className="mr-1 Sending_to_Wallet-Order">{resource.Players.BdgSendingtoWallet}</Badge></div>
                                    : e.value.toLowerCase().trim() === "completed" ? <div style={{ textAlign: "center" }}><Badge key={e.value + "completed"} pill className="mr-1 Completed-Order">{resource.Players.BdgCompleted}</Badge></div>
                                        : e.value.toLowerCase().trim() === "rejected" ? <div style={{ textAlign: "center" }}><Badge key={e.value + "rejected"} pill className="mr-1 Rejected-Order">{resource.Players.BdgRejected}</Badge></div>
                                            : e.value.toLowerCase().trim() === "canceled" ? <div style={{ textAlign: "center" }}><Badge key={e.value + "canceled"} pill className="mr-1 Canceled-Order">{resource.Players.BdgCanceled}</Badge></div> : '',
                disableGlobalFilter: true,

            },
            {
                Header: resource.Players.PlayerTokenWallet.LblCreditAmount,
                accessor: 'delivered_credits_cents',
                Cell: e => e.value === null ? <div style={{ textAlign: "end" }}>${'0.00'}</div> : <div style={{ textAlign: "end" }}>${e.value}</div>,
                disableGlobalFilter: true
            },
            {
                Header: resource.Players.PlayerTokenWallet.LblPrizeAmount,
                accessor: 'prize_money_cents',
                Cell: e => e.value === null ? <div style={{ textAlign: "end" }}>${'0.00'}</div> : <div style={{ textAlign: "end" }} >${e.value}</div>,
                disableGlobalFilter: true
            },
            {
                Header: resource.Players.PlayerTokenWallet.LblOrderId,
                accessor: 'id',
                Cell: e => <Link to={'#'} onClick={() => { getOrderDetail(e.value) }}>{e.value}</Link>

            },
            {
                Header: resource.Players.PlayerTokenWallet.LblRTP,
                accessor: '#',
            },
            ]
    );

    return (
        <React.Fragment>
            <Row>
                <Col>
                    {/* <Card> */}
                    {loading ? <div className='pt-3'>
                        <Table columns={columns} data={data} header={resource.Players.PlayerTokenWallet.HeadOrdersDelivered} />
                    </div> :
                        <Card>
                            <Card.Body>
                                <div><span>{resource.Players.PlayerTokenWallet.MsgNoOrderDeliveredFound}</span></div>
                            </Card.Body>
                        </Card>
                    }
                    {/* </Card> */}
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default PlayerWalletOrderDetails;