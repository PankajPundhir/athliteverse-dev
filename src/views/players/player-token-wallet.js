import React, { useState, useEffect } from 'react';
import * as Constant from '../../config/constant';
import axios from 'axios';
import { Row, Col, Container, Table, Card, Badge, Collapse } from 'react-bootstrap';
import * as resource from '../../../src/config/resource';
import { Link } from 'react-router-dom';
import tokenwalletLogo from '../../assets/images/user/TokenWalletLogo.png';
import PlayerWalletOrderDetails from './player-wallet-order-details';
import PlayerWalletGamePlayDetails from './player-wallet-gameplay-details';

const PlayerTokenWallet = ({ playerId }) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [tokenwalletscreen, setTokenwalletscreen] = useState(1);
    const [selectedData, setSelectedData] = useState(null);
    const [Orderdata, setorderdata] = useState(null);
    const [isBasic, setIsBasic] = useState(false);
    const [accordionKey, setAccordionKey] = useState(1);

    //#region Get Token Wallet List by PlayerID
    const getPlayerTokenWallets = async () => {
        try {
            const queryResult = await axios.post(
                Constant.GraphQL_API, {
                query: Constant.Get_TokenWallets_ByPlayer,
                variables: { id: playerId }
            }, {
                headers: {
                    'x-hasura-access-key': process.env.REACT_APP_API_HEADER_KEY
                }
            }
            ).then(res => {
                setData(res.data.data.get_tokenwalletbyplayerid);
                if (res.data.data.get_tokenwalletbyplayerid.length > 0) {
                    setLoading(true);
                    setTokenwalletscreen(1);
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

    //#region Get Order Details by tokenWalletId
    async function getOrderDetail(orderID) {
        try {
            const queryResult = await axios.post(
                Constant.GraphQL_API, {
                query: Constant.Get_OrderDetails_ByOrderId,
                variables: { orderid: orderID }
            }, {
                headers: {
                    'x-hasura-access-key': process.env.REACT_APP_API_HEADER_KEY
                }
            }
            ).then(res => {
                setorderdata(res.data.data.store_orders[0]);
                console.log(res.data.data.store_orders);
                if (res.data.data.store_orders.length > 0) {
                    setLoading(true);
                    setTokenwalletscreen(3);
                }
                else {
                    setLoading(false);
                    setTokenwalletscreen(3);
                }
            });
        }
        catch (err) {
            setLoading(false);
        }
    };
    //#endregion

    //#region Manage Screen and view change
    function getTokenWallet() {
        setTokenwalletscreen(2);
    };

    function getTokenDetail() {
        setTokenwalletscreen(4);
    };

    function showTokenWalletScreen(rowData) {
        setSelectedData(rowData);
        setTokenwalletscreen(2);
    }
    //#endregion

    useEffect(() => {
        getPlayerTokenWallets()
    }, []);

    return (
        <>
            {(tokenwalletscreen === 1) ?
                <React.Fragment>
                    <Card.Header className='bg-white p-0'>
                        <Card.Title as='h5'>{resource.Players.PlayerTokenWallet.HeadTokenWallets}</Card.Title>
                    </Card.Header>
                    {loading ?
                        <Table responsive hover>
                            <tbody>
                                {(data != null && data.length > 0) ?
                                    data.map((twData) => {
                                        return <tr key={twData.token_wallet_id}>
                                            <td>
                                                <div className='d-flex justify-content-start align-items-center'>
                                                    <div className='mr-3'>
                                                        <img className="p-2 border" style={{ width: '84px' }} src={tokenwalletLogo} />
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-1 font-weight-bold">{twData.name}</h6>
                                                        <div className="m-0">

                                                            {twData.status.toLowerCase().trim() === "active" ? <div><Badge key={twData.token_wallet_id + 'active'} pill className="mr-1 active-player">{resource.Players.BdgActive}</Badge></div>
                                                                : twData.status.toLowerCase().trim() === "closed" ? <div><Badge key={twData.token_wallet_id + 'closed'} pill className="mr-1 closed-player">{resource.Players.BdgClosed}</Badge></div>
                                                                    : ''}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 className="mb-1 font-weight-bold">{resource.Players.PlayerTokenWallet.LblCreditsBalance}</h6>
                                                <div className="m-0">
                                                    ${(twData.credit_balance === null || twData.credit_balance === "") ? '0.00' : twData.credit_balance}
                                                </div>
                                            </td>
                                            <td>
                                                <h6 className="mb-1 font-weight-bold">{resource.Players.PlayerTokenWallet.LblPrizeBalance}</h6>
                                                <div className="m-0">
                                                    ${(twData.prize_balance) ? twData.prize_balance : '0.00'}
                                                </div>
                                            </td>
                                            <td>
                                                <i className="feather icon-eye mr-2 text-align-center cursorPointer" onClick={() => { showTokenWalletScreen(twData) }} />
                                            </td>
                                        </tr>
                                    })
                                    :
                                    <tr>
                                        <td>
                                            <p>{resource.Players.PlayerOrder.LblNoResultsFound}</p>
                                        </td>
                                    </tr>
                                }
                            </tbody>
                        </Table> : "No results found"}

                </React.Fragment> :
                (tokenwalletscreen === 2) ?
                    <React.Fragment>
                        <div className='d-flex justify-content-between mb-2'>
                            <div className='d-flex justify-content-start align-items-center'>
                                <div className='mr-3'>
                                    <img className="p-2 border" style={{ width: '84px' }} src={tokenwalletLogo} />
                                </div>
                                <div className='d-flex flex-column'>
                                    <div>
                                        <h6 className='font-weight-bold'>{(selectedData != null && selectedData.name != null) ? selectedData.name : "NA"}</h6>
                                    </div>

                                    <div className='mr-auto justify-content-start'>
                                        {(selectedData != null && selectedData.status != null) ?

                                            selectedData.status.toLowerCase().trim() === "active" ? <div><Badge key={selectedData.token_wallet_id + 'actives'} pill className="mr-1 active-player">{resource.Players.BdgActive}</Badge></div>
                                                : selectedData.status.toLowerCase().trim() === "closed" ? <div><Badge key={selectedData.token_wallet_id + 'closede'} pill className="mr-1 closed-player">{resource.Players.BdgClosed}</Badge></div>
                                                    : ''
                                            : ""}
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center text-center'>
                                <div className='d-flex flex-column mr-2 mr-lg-5'>
                                    <div>
                                        <p className='mb-2 font-weight-bold'>{resource.Players.PlayerTokenWallet.LblCreditsBalance}</p>
                                    </div>
                                    <div>
                                        <p className='mb-2'>${(selectedData != null && selectedData.credit_balance != null) ? selectedData.credit_balance : "0.00"}</p>
                                    </div>
                                </div>
                                <div className='d-flex flex-column '>
                                    <div>
                                        <p className='mb-2 font-weight-bold'>{resource.Players.PlayerTokenWallet.LblPrizeBalance}</p>
                                    </div>
                                    <div>
                                        <p className='mb-2'>${(selectedData != null && selectedData.prize_balance != null) ? selectedData.prize_balance : "0.00"}</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* <h5 className='bg-white p-0 mt-3'></h5> */}
                        {/* <hr></hr> */}
                        <Card>
                            <Card.Header className='d-flex justify-content-between align-items-center'>
                                <div className="heading-order">{resource.Players.PlayerTokenWallet.HeadTokenWalletDetails}</div>
	                            <div><i className="feather icon-x x-2 cursorPointer" onClick={() => setTokenwalletscreen(1)}></i></div>
                            </Card.Header>
                            <Card.Body>
                            <Container className='p-0 p-lg-0'>
                            <div className="table-responsive">
                                <table className="table table-borderless table-sm">
                                    <tbody>
                                        <tr>
                                            <td className='wt-100'><b>{resource.Players.PlayerTokenWallet.LblWalletName}</b></td>
                                            <td>
                                                {(selectedData != null && selectedData.name != null) ? selectedData.name : "NA"}
                                            </td>
                                            <td className='wt-1'><b>{resource.Players.PlayerTokenWallet.LblWalletTypeCode}</b></td>
                                            <td>
                                                {(selectedData != null && selectedData.type_code != null) ? selectedData.type_code : "NA"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='wt-100'><b>{resource.Players.PlayerTokenWallet.LblWalletId}</b></td>
                                            <td>{(selectedData != null && selectedData.token_wallet_id != null) ? selectedData.token_wallet_id : "NA"}</td>
                                            <td className='wt-1'><b>{resource.Players.PlayerTokenWallet.LblMerchantReference}</b></td>
                                            <td>{(selectedData != null && selectedData.merchant_reference != null) ? selectedData.merchant_reference : "NA"}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Container>
                        <Container className='p-0 p-lg-0'>
                            <PlayerWalletOrderDetails tokenwalletid={selectedData.token_wallet_id} playerid={playerId} getOrderDetail={getOrderDetail} />
                        </Container>
                        <Container className='p-0 p-lg-0'>
                            <PlayerWalletGamePlayDetails tokenwalletid={selectedData.token_wallet_id} getTokenDetail={getTokenDetail} />
                        </Container>
                            </Card.Body>
                        </Card>

                    </React.Fragment> :
                    (tokenwalletscreen === 3) ?
                        <React.Fragment>

                            <Card>
                                <Card.Header className="d-flex justify-content-between align-items-center">
                                    <div className="heading-order">{resource.Players.PlayerTokenWallet.HeadOrderDetails}</div>
                                    <div><i className="feather icon-x x-2 cursorPointer" onClick={() => setTokenwalletscreen(2)}></i></div>
                                </Card.Header>
                                <Card.Body>

                                    {/* <Col sm={12} className="accordion"> */}

                                    <Card className="mt-2 accordianCard">
                                        <Card.Header>
                                            <Card.Title as="h5">
                                                <Link to='#'
                                                    onClick={() => setAccordionKey((accordionKey !== 1) ? 1 : 0)}
                                                    aria-controls="accordion1"
                                                    aria-expanded={accordionKey === 1}>
                                                    {resource.Players.PlayerTokenWallet.HeadOrderDetails}
                                                </Link>
                                            </Card.Title>
                                        </Card.Header>
                                        <Collapse in={accordionKey === 1}>
                                            <div id="accordion1">
                                                <Card.Body>
                                                    <Card.Text>
                                                        <div className="table-responsive">
                                                            <table className="table table-borderless table-sm mb-0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td className='wt-2'><b>{resource.Players.PlayerTokenWallet.LblOrderId}</b></td>
                                                                        <td className='col-4 col-md-4'>
                                                                            {(Orderdata.id == null) ? "NA" : Orderdata.id}
                                                                        </td>
                                                                        <td className='wt-1'><b>{resource.Players.PlayerTokenWallet.LblOrderMerchantReference}</b></td>
                                                                        <td>
                                                                            {(Orderdata.merchant_reference == null) ? "NA" : Orderdata.merchant_reference}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className='wt-2'><b>{resource.Players.PlayerTokenWallet.LblCreditAmount}</b></td>
                                                                        <td className='col-4 col-md-4'>${(Orderdata.ordered_cost_cents == null) ? "0.00" : Orderdata.ordered_cost_cents}</td>
                                                                        <td className='wt-1'><b>{resource.Players.PlayerTokenWallet.LblTotalCostAmount}</b></td>
                                                                        <td>${(Orderdata.ordered_credits_cents == null) ? "0.00" : Orderdata.ordered_credits_cents}</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </Card.Text>
                                                </Card.Body>
                                            </div>
                                        </Collapse>
                                    </Card>
                                    <Card className="mt-2 accordianCard">
                                        <Card.Header>
                                            <Card.Title as="h5">
                                                <Link to='#'
                                                    onClick={() => setAccordionKey((accordionKey !== 2) ? 2 : 0)}
                                                    aria-controls="accordion2"
                                                    aria-expanded={accordionKey === 2}>
                                                    {resource.Players.PlayerTokenWallet.HeadOrderPlacedfrom}
                                                </Link>
                                            </Card.Title>
                                        </Card.Header>
                                        <Collapse in={accordionKey === 2}>
                                            <div id="accordion2">
                                                <Card.Body>
                                                    <Card.Text>
                                                        <div className="table-responsive">
                                                            <table className="table table-borderless table-sm mb-0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td className='wt-2'><b>{resource.Players.PlayerTokenWallet.LblLatitude}</b></td>
                                                                        <td className='col-4 col-md-4'>
                                                                            {(Orderdata.player_location_latitude == null) ? "NA" : Orderdata.player_location_latitude}
                                                                        </td>
                                                                        <td className='wt-1'><b>{resource.Players.PlayerTokenWallet.LblLongitude}</b></td>
                                                                        <td>
                                                                            {(Orderdata.player_location_longitude == null) ? "NA" : Orderdata.player_location_longitude}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className='wt-2'><b>{resource.Players.PlayerTokenWallet.LblStateId}</b></td>
                                                                        <td className='col-4 col-md-4'>{(Orderdata.player_location_state_id == null) ? "NA" : Orderdata.player_location_state_id}</td>
                                                                        <td className='wt-1'><b>{resource.Players.PlayerTokenWallet.LblPostalCode}</b></td>
                                                                        <td>{(Orderdata.player_location_postal_code == null) ? "NA" : Orderdata.player_location_postal_code}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className='wt-2'><b>{resource.Players.PlayerTokenWallet.LblOrderStatus}</b></td>
                                                                        <td className='col-4 col-md-4'>
                                                                            {Orderdata.aasm_state === null ? "" : Orderdata.aasm_state.toLowerCase().trim() === "received" ? <Badge key={Orderdata.id} pill className="mr-1 Received-Order">{resource.Players.BdgReceived}</Badge>
                                                                                : Orderdata.aasm_state.toLowerCase().trim() === "verifying player" ? <Badge key={Orderdata.id} pill className="mr-1 Verifying_Player-Order">{resource.Players.BdgVerifyingPlayer}</Badge>
                                                                                    : Orderdata.aasm_state.toLowerCase().trim() === "reserving" ? <Badge key={Orderdata.id} pill className="mr-1 Reserving-Orde">{resource.Players.BdgReserving}</Badge>
                                                                                        : Orderdata.aasm_state.toLowerCase().trim() === "reserved" ? <Badge key={Orderdata.id} pill className="mr-1 Reserved-Order">{resource.Players.BdgReserved}</Badge>
                                                                                            : Orderdata.aasm_state.toLowerCase().trim() === "sending to wallet" ? <Badge key={Orderdata.id} pill className="mr-1 Sending_to_Wallet-Order">{resource.Players.BdgSendingtoWallet}</Badge>
                                                                                                : Orderdata.aasm_state.toLowerCase().trim() === "completed" ? <Badge key={Orderdata.id} pill className="mr-1 Completed-Order">{resource.Players.BdgCompleted}</Badge>
                                                                                                    : Orderdata.aasm_state.toLowerCase().trim() === "rejected" ? <Badge key={Orderdata.id} pill className="mr-1 Rejected-Order">{resource.Players.BdgRejected}</Badge>
                                                                                                        : Orderdata.aasm_state.toLowerCase().trim() === "canceled" ? <Badge key={Orderdata.id} pill className="mr-1 Canceled-Order">{resource.Players.BdgCanceled}</Badge> : ""}
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </Card.Text>
                                                </Card.Body>
                                            </div>
                                        </Collapse>
                                    </Card>
                                    <Card className="mt-2 accordianCard">
                                        <Card.Header>
                                            <Card.Title as="h5">
                                                <Link to='#'
                                                    onClick={() => setAccordionKey((accordionKey !== 3) ? 3 : 0)}
                                                    aria-controls="accordion3"
                                                    aria-expanded={accordionKey === 3}>
                                                    {resource.Players.PlayerTokenWallet.HeadOrderLineItem}
                                                </Link>
                                            </Card.Title>
                                        </Card.Header>
                                        <Collapse in={accordionKey === 3}>
                                            <div id="accordion3">
                                                <Card.Body>
                                                    <Card.Text>
                                                        <div className="table-responsive">
                                                            <table className="table table-borderless table-sm mb-0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td className='wt-2'><b>{resource.Players.PlayerTokenWallet.LblItemCostAmount}</b></td>
                                                                        <td className='col-4 col-md-4'>
                                                                            ${'0.00'}
                                                                        </td>
                                                                        <td className='wt-1'><b>{resource.Players.PlayerTokenWallet.LblItemType}</b></td>
                                                                        <td>
                                                                            {'NA'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className='wt-2'><b>{resource.Players.PlayerTokenWallet.LblOrderDeliveredTo}</b></td>
                                                                        <td className='col-4 col-md-4'><Link to={'#'} onClick={() => { getTokenWallet() }} >{(Orderdata.token_wallet_id == null) ? "NA" : Orderdata.token_wallet_id}</Link></td>
                                                                        <td className='wt-1'>&nbsp; </td>
                                                                        <td> </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </Card.Text>
                                                </Card.Body>
                                            </div>
                                        </Collapse>
                                    </Card>
                                    <Card className="mt-2 accordianCard">
                                        <Card.Header>
                                            <Card.Title as="h5">
                                                <Link to='#'
                                                    onClick={() => setAccordionKey((accordionKey !== 4) ? 4 : 0)}
                                                    aria-controls="accordion3"
                                                    aria-expanded={accordionKey === 4}>
                                                    {resource.Players.PlayerTokenWallet.HeadOrderResults}
                                                </Link>
                                            </Card.Title>
                                        </Card.Header>
                                        <Collapse in={accordionKey === 4}>
                                            <div id="accordion4">
                                                <Card.Body>
                                                    <Card.Text>
                                                        <div className="table-responsive">
                                                            <table className="table table-borderless table-sm mb-0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td className='wt-2'><b>{resource.Players.PlayerTokenWallet.LblFinalCostAmount}</b></td>
                                                                        <td className='col-4 col-md-4'>
                                                                            ${(Orderdata.final_cost_cents == null) ? "0.00" : Orderdata.final_cost_cents}
                                                                        </td>
                                                                        <td className='wt-1'><b>{resource.Players.PlayerTokenWallet.LblOrderedCreditAmount}</b></td>
                                                                        <td>
                                                                            ${(Orderdata.ordered_credits_cents == null) ? "0.00" : Orderdata.ordered_credits_cents}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className='wt-2'><b>{resource.Players.PlayerTokenWallet.LblDeliveredCreditAmount}</b></td>
                                                                        <td className='col-4 col-md-4'>${(Orderdata.delivered_credits_cents == null) ? "0.00" : Orderdata.delivered_credits_cents}</td>
                                                                        <td className='wt-1'><b>{resource.Players.PlayerTokenWallet.LblorderedCostAmount}</b></td>
                                                                        <td>${(Orderdata.ordered_cost_cents == null) ? "0.00" : Orderdata.ordered_cost_cents}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className='wt-2'><b>{resource.Players.PlayerTokenWallet.LblRefundedAmount}</b></td>
                                                                        <td className='col-4 col-md-4'>${(Orderdata.refunded_cents == null) ? "0.00" : Orderdata.refunded_cents}</td>
                                                                        <td className='wt-1'><b>{resource.Players.PlayerTokenWallet.LblPrizeAmount}</b></td>
                                                                        <td>${(Orderdata.prize_money_cents == null) ? "0.00" : Orderdata.prize_money_cents}</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </Card.Text>
                                                </Card.Body>
                                            </div>
                                        </Collapse>
                                    </Card>
                                    <Card className="mt-2 accordianCard">
                                        <Card.Header>
                                            <Card.Title as="h5">
                                                <Link to='#'
                                                    onClick={() => setAccordionKey((accordionKey !== 5) ? 5 : 0)}
                                                    aria-controls="accordion3"
                                                    aria-expanded={accordionKey === 5}>
                                                    {resource.Players.PlayerTokenWallet.HeadTaxableAmounts}
                                                </Link>
                                            </Card.Title>
                                        </Card.Header>
                                        <Collapse in={accordionKey === 5}>
                                            <div id="accordion5">
                                                <Card.Body>
                                                    <Card.Text>
                                                        <div className="table-responsive">
                                                            <table className="table table-borderless table-sm mb-0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td className='wt-2'><b>{resource.Players.PlayerTokenWallet.LblTaxableWinnings}</b></td>
                                                                        <td className='col-4 col-md-4'>
                                                                            ${'0.00'}
                                                                        </td>
                                                                        <td className='wt-1'><b>{resource.Players.PlayerTokenWallet.LblFederalWithholding}</b></td>
                                                                        <td>
                                                                            ${'0.00'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className='wt-2'><b>{resource.Players.PlayerTokenWallet.LblStateWithholding}</b></td>
                                                                        <td className='col-4 col-md-4'>${'0.00'}</td>
                                                                        <td className='wt-1'><b>{resource.Players.PlayerTokenWallet.LblLocalWithholding}</b></td>
                                                                        <td>${'0.00'}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className='wt-2'><b>{resource.Players.PlayerTokenWallet.LblNetWinnings}</b></td>
                                                                        <td className='col-4 col-md-4'>${'0.00'}</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </Card.Text>
                                                </Card.Body>
                                            </div>
                                        </Collapse>
                                    </Card>
                                </Card.Body>
                            </Card>
                        </React.Fragment> :
                        (tokenwalletscreen === 4) ?
                            <React.Fragment>
                                <div>
                                    <Container className='p-0 p-lg-0'>
                                        <strong><h5>{resource.Players.PlayerTokenWallet.HeadTokenDetails}</h5></strong>
                                        <div className="table-responsive">
                                            <table className="table table-borderless">

                                                <tbody>
                                                    <tr>
                                                        <td><b>{resource.Players.PlayerTokenWallet.LblTokenWalletID}</b></td>
                                                        <td>
                                                            <td><Link to={'#'} onClick={() => { getTokenWallet() }}>{'TW12345'}</Link></td>
                                                        </td>
                                                        <td><b>{resource.Players.PlayerTokenWallet.LblTokenID}</b></td>
                                                        <td>
                                                            {'Tkn12345'}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>{resource.Players.PlayerTokenWallet.LblTokenMerchantReference}</b></td>
                                                        <td>{'xxx-xxx-xxx-xxx'}</td>
                                                        <td><b>{resource.Players.PlayerTokenWallet.LblTokenReservedCreditAmount}</b></td>
                                                        <td>${'0.00'}</td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>{resource.Players.PlayerTokenWallet.LblTokenReservedPrizeAmount}</b></td>
                                                        <td>${'0.00'}</td>
                                                        <td><b>{resource.Players.PlayerTokenWallet.LblTokenReservedDescription}</b></td>
                                                        <td>{'description details'}</td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>{resource.Players.PlayerTokenWallet.LblTokenStatus}</b></td>
                                                        <td><Badge key={'tknid'} pill className="mr-1 canceled-player">{resource.Players.BdgCanceled}</Badge></td>
                                                        <td><b>{resource.Players.PlayerTokenWallet.LblTokenRevealedCreditAmount}</b></td>
                                                        <td>${'0.00'}</td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>{resource.Players.PlayerTokenWallet.LblTokenRevealedPrizeAmount}</b></td>
                                                        <td>${'0.00'}</td>
                                                        <td><b>{resource.Players.PlayerTokenWallet.LblTokenRevealedDescription}</b></td>
                                                        <td>{'REVEALED description details'}</td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>{resource.Players.PlayerTokenWallet.LblTokenReservedAt}</b></td>
                                                        <td>{'03-03-2022'}</td>
                                                        <td><b>{resource.Players.PlayerTokenWallet.LblTokenRevealedAt}</b></td>
                                                        <td>{'03-03-2022'}</td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>{resource.Players.PlayerTokenWallet.LblTokenWalletID}</b></td>
                                                        <td><Link to={'#'} onClick={() => { getTokenWallet() }}>{'TW12345'}</Link></td>
                                                        <td><b>{resource.Players.LblPlayerId}</b></td>
                                                        <td><Link to={'#'} onClick={() => { getTokenWallet() }}>{'NEW_PLY-1234'}</Link></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </Container>
                                </div>

                            </React.Fragment> : ""
            }
        </>

    );
}

export default PlayerTokenWallet;