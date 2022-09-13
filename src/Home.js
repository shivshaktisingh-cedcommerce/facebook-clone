import {useState,useEffect} from 'react';
import { Navigate } from "react-router-dom";
import * as React from 'react';
export const Home = (props) => {
  useEffect(()=>{
    document.getElementById("textarea").focus();
  })
  
  return (
    <>
      {props.loggedin === false && (<Navigate to="/" replace="true"/>)}
    <div>
    <div class="tab">
    <h3 className='userWelcome'>Welcome , {props.username}</h3>

    <p className='friendsPara'>Friends</p>
      <button className="tablinks" style={{color:"#1877F2"}}>Friend1<span className='onlineDot' > <i class="fa-solid fa-circle"></i></span></button>
      <button className="tablinks" style={{color:"#1877F2"}}>Friend2<span className='onlineDot'> <i class="fa-solid fa-circle"></i></span></button>
      <button className="tablinks" style={{color:"#1877F2"}}>Friend3<span className='onlineDot'> <i class="fa-solid fa-circle"></i></span></button>
    </div>
    <div id="x">
    <div className='box'>
        <h4>What's on your mind?</h4>
        <textarea id='textarea'></textarea>
        <p><input type="file" onChange={props.getImage} id="file"></input></p>
        <p><button className='sharebtn' onClick={props.share}>Share</button></p>
        <div className='gif'>
      <img src="http://static.skaip.org/img/emoticons/180x180/f6fcff/pointupindex.gif" alt="gif"/>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}
