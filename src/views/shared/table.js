import React from 'react';
import { Row, Col, Pagination} from 'react-bootstrap';
import BTable from 'react-bootstrap/Table';
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table'

const Table = ({ columns, data, header })=> {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page, // Instead of using 'rows', we'll use page,
        // which has only the rows for the active page
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0 },
        },

        useGlobalFilter,
        useSortBy,
        usePagination
    )

    // Render the UI for your table
    return (
        <>
            <Row className='mb-3 row d-flex align-items-center'>
                <Col className='col-sm-9' >
                    <h5 className='mb-0'>{header}</h5>
                </Col>
                <Col className="col-sm-3 d-flex align-items-center col text-right justify-content-end">
                    {'Show'}
                    <select
                        className='form-control w-auto mx-2'
                        value={pageSize}
                        onChange={e => {
                            setPageSize(Number(e.target.value))
                        }}
                    >
                        {[5, 10, 20, 30, 40, 50].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                {pageSize}
                            </option>
                        ))}
                    </select>
                    {'Entries'}
                </Col>
            </Row>
            <BTable striped bordered hover responsive {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    {/* Add a sort direction indicator */}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? <span className='feather icon-arrow-down text-muted float-right mt-1' />
                                                : <span className='feather icon-arrow-up text-muted float-right mt-1' />
                                            : 
                                            
                                            <><span className='feather icon-arrow-down default-sorting float-right mt-1' />
                                            <span className='feather icon-arrow-up default-sorting float-right mt-1' />
                                            </>
                                            
                                            }
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </BTable>
            <Row className='justify-content-between mt-3'>
                <Col sm={12} md={6}>
                    <span className="d-flex align-items-center">
                       <div className='mr-1'> {'Page'}</div> {' '} <strong> {pageIndex + 1} {'Of'} {pageOptions.length} </strong>{' '}
                        |
                        {'PAge'}:{' '}
                        <input
                            type="number"
                            className='form-control ml-2'
                            min="1"
                            value={pageIndex + 1}
                            max={pageOptions.length}
                            onChange={e => {
                                const page = e.target.value ? Number(e.target.value) - 1 : 0
                                gotoPage(page)
                            }}
                            style={{ width: '100px' }}
                        />

                    </span>
                </Col>

                <Col sm={12} md={6}>
                    <Pagination className='justify-content-end'>
                        <Pagination.First onClick={() => gotoPage(0)} disabled={!canPreviousPage} />
                        <Pagination.Prev onClick={() => previousPage()} disabled={!canPreviousPage} />
                        <Pagination.Next onClick={() => nextPage()} disabled={!canNextPage} />
                        <Pagination.Last onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} />
                    </Pagination>
                </Col>
            </Row>
        </>
    )
}
export default Table