import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { Navigate } from "react-router-dom";


export function Login(props) {
    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (
        event &&
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <Box
        sx={{ width:"75vh" }}
        role="presentation"
      >
        <List>
         <h1 style={{color:"#1877F2",margin:"1%",textAlign:"center"}}>Create Account</h1>
        <TextField
            label="Full Name"
            id="name"
            type="text"
            sx={{margin:"1%",width:"90%"}} 
            required/>
        <TextField
            label="Email"
            type="email"
            id="email"
            sx={{margin:"1%",width:"90%"}} 
            required/>
        <TextField
            label="Username"
            type="text"
            id="username"
            sx={{margin:"1%",width:"90%"}} 
            required/>
        <TextField
            label="password"
            type="password"
            id="password"
            sx={{margin:"1%",width:"90%"}} 
            required/>
        <TextField
            label="mobile" 
            id="mobile"
            type="number"
            sx={{margin:"1%",width:"90%"}}
            required/>
        <TextField
            label="City" 
            id="city"
            type="text"
            sx={{margin:"1%",width:"90%"}}
            />
        <TextField
            label="Country" 
            id="country"
            type="text"
            sx={{margin:"1%",width:"90%"}}
            />
        
        <TextField
            label="Pincode" 
            id="pincode"
            type="number"
            sx={{margin:"1%",width:"90%"}}
            />
        <Button type="submit" variant="contained" sx={{margin:"1%",width:"90%",backgroundColor:"#42B72A",fontWeight:"bold"}} onClick={props.signup}>Sign Up</Button>
        </List>
        <Divider />
      </Box>
    );
  
    return (
      <div>
      {props.loggedin && (<Navigate to="/home" replace="true"/>)} 
      <div className='mainDiv'>
      <div className='loginDiv1'>
      <h1 className='name'>fakebook</h1>
      <p className='fbtitle'>Fakebook helps you connect and share with the people in your life.</p>
      </div>
      <div className='loginDiv2'>
      <input className='input' type="text" placeholder='Email address or phone number' id="email1"/><br/>
      <input className='input' type="password" placeholder='Password' id="password1"/><br/>
      <input className='input loginBtn' type="button" value="Log In" onClick={props.userlogin}/>
      <hr/>
        {['right'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)} sx={{backgroundColor:"#42B72A",color:"white",fontWeight:"bold",borderRadius: "7px",padding:"2%",width:"60%",marginLeft:"14%",marginTop:"5%",'&:hover': {
            background: "#42B72A",fontSize:"15px",boxShadow: "5px 10px 18px #888888"
            },}}>Create New Account</Button>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
      </div>
    </div>
    );
  }




