import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { UserAdded } from '../Redux/action';
import { useNavigate } from 'react-router-dom';

export const AddUser = () => {

    const [state, setState] = React.useState({
        name:"",
        email:"",
        phone:"",
        address:""
    })

    const [error, setError] = React.useState("")

    const {name,email,phone,address} = state

    let dispatch = useDispatch()

    const navigate = useNavigate()

    const handleInputChange = (e) => {
        let{name,value} = e.target;
        setState({...state,[name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!name || !email || !phone || !address){
            setError("please fill all the filed")
        }else{
            dispatch(UserAdded(state))
            navigate("/")
            setError("")
        }
    }

  return (
    <div>
        <h3>Enter User Details</h3><br />
        {error && <h3>{error}</h3>}
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" value={name}   name="name" onChange={handleInputChange} label="Enter your Name" variant="outlined"/><br />
      <TextField id="outlined-basic" value={email}  name="email" onChange={handleInputChange} label="Enter your Email" variant="outlined" /><br />
      <TextField id="outlined-basic" value={phone}  name="phone" onChange={handleInputChange} label="Enter your Contact Number" variant="outlined" /><br />
      <TextField id="outlined-basic" value={address}name="address" onChange={handleInputChange} label="Enter your Address" variant="outlined" /><br />
      <Button variant="contained" onClick={handleSubmit}>Submit</Button>
    </Box>
    </div>
  )
}
