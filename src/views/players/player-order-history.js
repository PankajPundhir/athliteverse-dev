import React, { useState, useEffect } from 'react';
import * as Constant from '../../config/constant';
import axios from 'axios';
import { Row, Col, Card, Badge, } from 'react-bootstrap';
import * as resource from '../../../src/config/resource';
import Table from '../shared/table';

const PlayerOrderHistory = ({ playerId }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    //#region Get View Order List by PlayerID
    const getPlayerOrder = async () => {
        try {
            const queryResult = await axios.post(
                Constant.GraphQL_API, {
                query: Constant.Get_Player_Order,
                variables: { id: playerId }
            }, {
                headers: {
                    'x-hasura-access-key': process.env.REACT_APP_API_HEADER_KEY
                }
            }
            ).then(res => {
                setData(res.data.data.store_orders);
                console.log(res.data.data.store_orders)
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
        getPlayerOrder()
    }, []);

    const columns = React.useMemo(
        () =>
            [{
                Header: resource.Players.PlayerOrder.GrdHeadOrderId,
                accessor: 'id',
            },
            {
                Header: resource.Players.PlayerOrder.GrdHeadCreditAmount,
                accessor: 'credit_amount',
                disableGlobalFilter: true,
                Cell: e => (e.value == null | e.value == "") ? "" : <div style={{ textAlign: "end" }}>${e.value}</div>,
                //Cell: e=> (e.value == null | e.value=="2000")?<div> &euro;{e.value}</div>:<div>${e.value}</div>,
            },
            {
                Header: resource.Players.PlayerOrder.GrdHeadOrderStatus,
                accessor: 'status',
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
                Header: resource.Players.PlayerOrder.GrdHeadLastUpdated,
                accessor: 'updated_at',
                disableGlobalFilter: true,
                Cell: e => e.value.split('.')[0]
            },
            {
                Header: resource.Players.GrdHeadMerchantReference,
                accessor: 'merchant_reference',
                disableGlobalFilter: true
            },
            ]
    );

    return (
        <React.Fragment>
            <Row>
                <Col>
                    {loading ? <div className='pt-0'>
                        <Table columns={columns} data={data} header={resource.Players.PlayerOrder.LblPlayersOrderTable} />
                    </div> : <div><span>{resource.Players.PlayerOrder.LblNoResultsFound}</span></div>}
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default PlayerOrderHistory;