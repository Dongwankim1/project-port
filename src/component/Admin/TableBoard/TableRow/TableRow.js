import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const TableRowA = ({row,keyid}) => {

    const handleOnClick = () =>{
        console.log('asd',keyid);
    }

    return (
        <TableRow key={keyid} onClick={handleOnClick}>
            <TableCell component="th" scope="row">
                {row.title}
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
                {row.category}
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
                {row.content}
            </TableCell>
        </TableRow>
    )
}

export default TableRowA;