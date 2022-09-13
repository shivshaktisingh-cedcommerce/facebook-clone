import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Navigate } from "react-router-dom";

export const Profile = (props) => {
  return (
    <>
    {props.loggedin === false && (<Navigate to="/" replace="true"/>)}
    <div className='profileDiv mt-2'>
    <div className='personalDiv'>
    <h1 style={{color:"#1877F2"}}>Personal Info</h1>
    <Box
      component="form"
      sx={{
        m:2
      }}
      noValidate
      autoComplete="off"
    >
    {props.userData.map((i)=>{
        return(
            <>
            <p><TextField id="myname" label="My Name" variant="standard" value={i.name} readonly/></p>
            <p><TextField id="myemail" label="My Email" variant="standard" value={i.email} readonly/></p>  
            <p><TextField id="myusername" label="My Username" variant="standard" value={i.username} readonly/></p> 
            <p><TextField id="mymobile" label="My Mobile" variant="standard" value={i.mobile} readonly/></p> 
            <p><TextField id="mycity" label="My City" variant="standard" value={i.city} readonly/></p> 
            <p><TextField id="mycountry" label="My Country" variant="standard" value={i.country} readonly/></p> 
            <p><TextField id="mypincode" label="My Pincode" variant="standard" value={i.pincode} readonly/></p> 
            </>
        )
    })}
       </Box>
       </div>
       <div className='passwordDiv'>
       <h1 style={{color:"#1877F2"}}>Change Password</h1>
       <p><TextField id="myOldPassword" label="Current Password" variant="standard" /></p>
       <p><TextField id="myNewPassword" label="New Password" variant="standard" /></p>
       <Button variant="contained" onClick={props.changePassword}>Change Password</Button></div>
       <div className='imgDiv'>
        <img src="./1.jpg" alt="img"/>
       </div>
       </div>
    </>
  )
}
  


