import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Pagination, Badge, Button, InputGroup, FormControl } from 'react-bootstrap';
import * as Constant from '../../config/constant';
import axios from 'axios';
import { Link } from 'react-router-dom';
import * as resource from '../../../src/config/resource';
import Table from '../shared/table';

const PlayerSearch = () => {
    const [SearchVal, setSearchVal] = useState("")
    const [InitialData, setInitialData] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [TableLbl, setTableLbl] = useState(resource.Players.LblPlayersResultsTable)

    //#region  Get All Player List
    const getAllPlayerList = async () => {
        try {
            const queryResult = await axios.post(
                Constant.GraphQL_API, {
                query: Constant.Get_Player
            }, {
                headers: {
                    'x-hasura-access-key': process.env.REACT_APP_API_HEADER_KEY
                }
            }
            ).then(res => {
                setInitialData(res.data.data.player_players);
                setData(res.data.data.player_players);
                if (res.data.data.player_players.length > 0) {
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

    //#region Get All Player List By PlayerId
    const getAllPlayerListByPlayerId = async () => {
        try {
            const queryResult = await axios.post(
                Constant.GraphQL_API, {
                query: Constant.Get_PlayerBy_PlayerId,
                variables: {
                    id: SearchVal.trim(),
                }
            }, {
                headers: {
                    'x-hasura-access-key': process.env.REACT_APP_API_HEADER_KEY
                }
            }
            ).then(res => {
                setData(res.data.data.search_playersbyid);
                if (res.data.data.search_playersbyid.length > 0) {
                    setLoading(true);
                }
                else {
                    setLoading(false);
                }
            });
        }
        catch (err) {
            setLoading(false);
            console.log(err)
        }
    };
    //#endregion

    useEffect(() => {
        getAllPlayerList()
    }, []);

    //#region  Search
    function Search(searchParm) {
        if (searchParm !== "") {
            var parmLength = searchParm.trim().length;
            getAllPlayerListByPlayerId();
            setTableLbl(resource.Players.LblPlayerSearchResultsTable)
        }
        else {
            setSearchVal(searchParm);
            setData(InitialData);
            setTableLbl(resource.Players.LblPlayersResultsTable)
            if (InitialData.length > 0) {
                setLoading(true);
            }
            else {
                setLoading(false);
            }
        }
    };
    //#endregion

    //#region Enter Click on Search
    function _handleKeyDown(e) {
        if (e.key === 'Enter') {
            Search(SearchVal);
        }
    };
    //#endregion

    //#region  KeyUp Event on Search
    function _handleKeyUp(e) {
        if (SearchVal.trim() === "") {
            setData(InitialData);
            setTableLbl(resource.Players.LblPlayersResultsTable)
            if (InitialData.length > 0) {
                setLoading(true);
            }
            else {
                setLoading(false);
            }
        }
    }
    //#endregion

    //#region Columns for Player Search Grid
    const columns = React.useMemo(
        () =>
            [{
                Header: resource.Players.GrdHeadPlayerId,
                accessor: 'id',
                Cell: e => <Link to={{ pathname: "/app/playerdetails", state: { id: e.value } }} onClick={() => { localStorage.setItem('playerId', e.value) }}>{e.value}</Link>
            },
            {
                Header: resource.Players.GrdHeadMerchantReference,
                accessor: 'merchant_reference',
                Cell: (props) => {
                    return (
                        <><Link to={{ pathname: "/app/playerdetails", state: { id: props.row.original.id } }} onClick={() => { localStorage.setItem('playerId', props.row.original.id) }}>{props.row.original.merchant_reference}</Link></>
                    );
                },
                disableGlobalFilter: true
            },
            {
                Header: resource.Players.GrdHeadAccountStatus,
                accessor: 'aasm_state',
                Cell: e => e.value.toLowerCase().trim() === "active" ? <div style={{ textAlign: "center" }}><Badge key={e} pill className="mr-1 active-player">{resource.Players.BdgActive}</Badge></div>
                    : e.value.toLowerCase().trim() === "suspended" ? <div style={{ textAlign: "center" }}><Badge key={e} pill className="mr-1 suspended-player">{resource.Players.BdgSuspended}</Badge></div>
                        : e.value.toLowerCase().trim() === "closing" ? <div style={{ textAlign: "center" }}><Badge key={e} pill className="mr-1 closing-player">{resource.Players.BdgClosing}</Badge></div>
                            : e.value.toLowerCase().trim() === "closed" ? <div style={{ textAlign: "center" }}><Badge key={e} pill className="mr-1 closed-player">{resource.Players.BdgClosed}</Badge></div>
                                : e.value.toLowerCase().trim() === "canceling" ? <div style={{ textAlign: "center" }}><Badge key={e} pill className="mr-1 canceling-player">{resource.Players.BdgCanceling}</Badge></div>
                                    : e.value.toLowerCase().trim() === "canceled" ? <div style={{ textAlign: "center" }}><Badge key={e} pill className="mr-1 canceled-player">{resource.Players.BdgCanceled}</Badge></div> : '',
                disableGlobalFilter: true,

            },
            {
                Header: resource.Players.GrdHeadWageringStatus,
                accessor: 'wager_status.aasm_state',
                Cell: e => e.value.toLowerCase().trim() === "approved" ? <div style={{ textAlign: "center" }}><Badge key={e} pill variant="success" className="mr-1">{resource.Players.BdgApproved}</Badge></div> : <div style={{ textAlign: "center" }}><Badge key={e} pill variant="warning" className="mr-1">{resource.Players.BdgUnapproved}</Badge></div>,
                disableGlobalFilter: true
            },
            {
                Header: resource.Players.GrdHeadUpdated,
                accessor: 'updated_at',
                disableGlobalFilter: true,
                Cell: e => e.value.split('.')[0]
            },
            ]
    );
    //#endregion

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Col className='p-0 justify-content-end'>
                                <InputGroup className="mb-0">
                                    <FormControl
                                        value={SearchVal}
                                        placeholder={resource.Players.lblSearchPlaceHolder}
                                        aria-label={resource.Players.lblSearchPlaceHolder}
                                        aria-describedby="basic-addon2"
                                        onChange={(e) => setSearchVal(e.target.value)}
                                        onKeyDown={(e) => { _handleKeyDown(e) }}
                                        onKeyUp={(e) => { _handleKeyUp(e) }}

                                    />
                                    <>{
                                        SearchVal !== "" ?
                                            <a className='input-group-append search-close'><i className='feather icon-x input-group-text' onClick={() => { Search('') }}></i></a>
                                            : ""} </>

                                    <InputGroup.Append>
                                        <Button onClick={() => { Search(SearchVal) }}>{resource.Players.BtnSearch}</Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Col>

                        </Card.Header>
                        {loading ? <Card.Body className='pt-3'>
                            <Table columns={columns} data={data} header={TableLbl} />
                        </Card.Body> : <Card.Body><span>{resource.Players.LblNoSearchResultsFound}</span></Card.Body>}
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default PlayerSearch;