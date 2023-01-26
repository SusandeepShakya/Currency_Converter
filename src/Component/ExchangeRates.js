import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ExchangeRates = (props) => {
    return (
        <div className='allRates'>
            <h3>Nepali Exchange Rate</h3>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Country</TableCell>
                                <TableCell>Unit</TableCell>
                                <TableCell>Buy</TableCell>
                                <TableCell>Sell</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.selectedDatesRate && props.selectedDatesRate.rates.map((items, index) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} >
                                        <TableCell >{items.currency.iso3}</TableCell>
                                        <TableCell>{items.currency.unit}</TableCell>
                                        <TableCell>{items.buy}</TableCell>
                                        <TableCell>{items.sell}</TableCell>

                                    </TableRow>
                                )
                            })}

                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

        </div>
    )
}

export default ExchangeRates
