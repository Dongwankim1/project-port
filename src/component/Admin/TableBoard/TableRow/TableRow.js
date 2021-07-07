import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {deleteBoard} from '../../../../actions/board'
const TableRowA = ({row,keyid,setCurrentId}) => {
    const dispatch = useDispatch();
    const handleDelete = () =>{
        dispatch(deleteBoard(row.id));
    }

    return (
        <TableRow key={keyid} onClick={() => setCurrentId(row.id)}>
            <TableCell component="th" scope="row">
                {row.title}
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
                {row.category}
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
                {row.content}
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
                <Button onClick={handleDelete} className="bt__Main" variant="contained" color="primary">
                    삭제
                </Button>
            </TableCell>
        </TableRow>
    )
}

export default TableRowA;