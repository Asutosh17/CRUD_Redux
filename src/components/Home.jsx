import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {useDispatch, useSelector} from 'react-redux'
import { deleteUsers, loadUsers } from '../Redux/action';
import { useNavigate } from 'react-router-dom';


export default function Home() {


    const dispatch = useDispatch()
    const navigate = useNavigate()

    React.useEffect(() => {
        dispatch(loadUsers())
    },[])

    const {users} = useSelector(state => state.users)

    const handleDelete = (id) => {
        dispatch(deleteUsers(id))
    }


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center'>Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Contact</TableCell>
            <TableCell align="center">Address</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((users) => (
            <TableRow
              key={users.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align='center'>
                {users.name}
              </TableCell>
              <TableCell align="center">{users.email}</TableCell>
              <TableCell align="center">{users.phone}</TableCell>
              <TableCell align="center">{users.address}</TableCell>
              <TableCell align="center"><ButtonGroup variant="contained" aria-label="outlined button group" className='btn'>
      <Button color='error' onClick={() => {handleDelete(users.id)}}>Delete</Button>
      <Button color='primary' onClick={() => navigate(`/edit-user/${users.id}`)}>Edit</Button>
    </ButtonGroup></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
