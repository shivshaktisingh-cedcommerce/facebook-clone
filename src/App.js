import React,{useEffect, useState} from "react";
import './App.css';
import { Login } from './Login';
import {Routes,Route} from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import {Profile} from "./Profile";
import { Feeds } from "./Feeds";
import { Mypost } from "./Mypost";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [userDetail,setuserDetail]=useState([]);
  const [userName,setuserName]=useState();
  const [userEmail,setuserEmail]=useState();
  const [loggedin,setloggedin]=useState(false);
  const [user,setUser]=useState([]);
  const [img,setimg]=useState();
  const [commentText,setcommentText]=useState('');
  const [like,setlike]=useState("black");
  const [commentopen,setcommentopen]=useState(false);
  const [mypost,setmypost]=useState([]);
  const [show, setShow] = useState(false);
  const [edittext,setedittext]=useState();
  const [editfile,seteditfile]=useState();
  const [editlike,seteditlike]=useState();
  const [editcomment,seteditcomment]=useState();
  const [editlikecolor,seteditlikecolor]=useState();
  // Close Modal
  const handleClose = () => setShow(false);
  
  // Dummy Friends/Static friends
  const [userPost,setuserPost]=useState([
    {"name":"Shiv","text":" Life is endless battle and conflict, and you cannot fight effectively unless you can identify your enemies. Learn to smoke out your enemies, to spot them by the signs and patterns that reveal hostility. Then, once you have them in your sights, inwardly declare war. Your enemies can fill you with purpose and direction","image":"https://i.insider.com/4fa2da7c6bb3f7f94c000005?width=600&format=jpeg&auto=webp","curr_date":"12/09/2022","like":0,"likeColor":"black","comment":[],"commentDisplay":"none"},

    {"name":"Swati","text":" What most often weighs you down and brings you misery is the past. You must consciously force yourself to react to the present moment. Be ruthless on yourself; do not repeat the same tired methods. Wage guerrilla war on your mind, allowing no static lines of defense — make everything fluid and mobile","image":"https://i.insider.com/4fa1da3269bedd0872000001?width=600&format=jpeg&auto=webp","curr_date":"09/09/2022","like":0,"likeColor":"black","comment":[],"commentDisplay":"none"},

    {"name":"Seema","text":" In the heat of battle, the mind tends to lose its balance. It is vital to keep you presence of mind, maintaining your mental powers, whatever the circumstances. Make the mind tougher by exposing it to adversity. Learn to detach yourself from the chaos of the battlefield.","image":"https://i.insider.com/4fa1dccc6bb3f7bb05000008?width=600&format=jpeg&auto=webp","curr_date":"07/09/2022","like":0,"likeColor":"black","comment":[],"commentDisplay":"none"}
  ]);

  // User signup
  const signUp=()=>{
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    let mobile=document.getElementById("mobile").value;
    let city=document.getElementById("city").value;
    let country=document.getElementById("country").value;
    let pincode=document.getElementById("pincode").value;
    
    console.log(city)
    const users={"name":name,"email":email,"username":username,"password":password,"mobile":mobile,"city":city,"country":country,"pincode":pincode}

    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 

    if(name === "" || email === "" || username === "" || password === "" || mobile === ""){
      alert("Please provide the input");
    }
    else if(!filter.test(email)){
      alert('Please provide a valid email address!');
    }
    else if(!isNaN(name)){
      alert("Please provide valid name!");
    }
    else if(!isNaN(city) && city !== ""){
      alert("Please provide valid city name!");
    }
    else if(!isNaN(country) && country !== ""){
      alert("Please provide valid country name");
    }
    else{
      const isFound=userDetail.some(value =>{
        if(value.email === email || value.mobile === mobile){
          return true
        }
        return false
      })
      // if exist
      if(isFound){
        alert("Email-id / Mobile number already exist.. Please do login!");
      }
      // if not exist
      else{
        setuserDetail([...userDetail,users]);
        alert("Account created successfully");
      }
  }
}

  // User Login
  const login=()=>{
    let email=document.getElementById("email1").value;
    let password=document.getElementById("password1").value;
    const isFound=userDetail.some(value=>{
      if((value.email === email && value.password === password) || (value.mobile === email && value.password === password)){
        const userData={"name":value.name,"email":value.email,"username":value.username,"password":value.password,"mobile":value.mobile,"city":value.city,"country":value.country,"pincode":value.pincode}
        setUser([userData]);
        setuserName(value.name);
        setuserEmail(value.email);
        return true;
      }
      return false;
    })
    if(isFound){
      setloggedin(true);
    }
    else{
      alert("Unmatched matched. Please provide valid input!");
    }
  }

  // Get image
  const postImage = (event) => {
    let imgName = URL.createObjectURL(event.target.files[0]);
    setimg(imgName);
  };
 
  // Share Post
  const sharePost=()=>{
    let textarea=document.getElementById("textarea").value;
    alert("Posted Successfully");
    var d = new Date().toString();
    var date = d.split(' ').splice(0, 5).join(' ');
    let post={"name":userName,"text":textarea,"image":img,"curr_date":date,"like":0,"likeColor":"black","comment":[],"commentDisplay":"none"}
    setuserPost([post,...userPost]);
    document.getElementById("textarea").value="";
    document.getElementById("file").value="";
  }

  // Like button
  const userlike=(event,id)=>{
      var Liked=userPost;

      if(userPost[id].like === 0){
        Liked[id].like=1;
        Liked[id].likeColor="blue"
        setuserPost([...Liked]);
      }

      else if(userPost[id].like === 1){
        Liked[id].like=0;
        Liked[id].likeColor="black"
        setuserPost([...Liked]);
      }
  }

  // Display comment input box
  const comment=(event, id)=>{
    var showComment=[...userPost];
    if(commentopen === false){
      showComment[id].commentDisplay="block";
      setcommentopen(true)
    }
    else if(commentopen === true){
      showComment[id].commentDisplay="none";
      setcommentopen(false)
    }
    setuserPost([...showComment]);
  }

  // Hide comment icon / comment
  const hidecomment=(event,id)=>{
      var userComment=userPost;      
      userComment[id].comment.push(commentText);
      setuserPost([...userComment]);
      setcommentText('');
  }

  // Getting comment input box value
  const commentValue=(event)=>{
    setcommentText(event.target.value)
  }

  // Delete User Post
  const deleteUserPost=(event)=>{
    let id=event.target.parentElement.parentElement.parentElement.id;
    userPost.splice(id,1);
    setuserPost([...userPost]);
  }

  // Share other user Post
  const shareuserPost=(event,id)=>{
    userPost.map((i,index)=>{
      if(index === id){
        let post={"name":userName,"text":i.text,"image":i.image,"curr_date":i.curr_date,"like":0,"likeColor":"black","comment":[],"commentDisplay":"none"};
        alert("Shared successfully");
        setuserPost([post,...userPost]);
      }
    })
  }
  
  // Rendering my post on changing user post
  useEffect(()=>{
    setmypost([...userPost])
  },[userPost])

  // Change Password
  const changeuserPassword=()=>{
    let myOldPassword=document.querySelector("#myOldPassword").value;
    let myNewPassword=document.querySelector("#myNewPassword").value;
    var flag1=false;
    var flag2=false;
    userDetail.map((i)=>{
      if(i.email === userEmail){
        if(myOldPassword === i.password)
        {
          i.password=myNewPassword;
          setuserDetail([...userDetail]);
          flag1=true;
        }
        else{
          flag2=true;
        }
      }
    })
    if(flag1 === true){
      alert("Password changed successfully!");
    }
    else if(flag2 === true){
      alert("Current Password not matched!")
    }
    document.querySelector("#myOldPassword").value="";
    document.querySelector("#myNewPassword").value="";
  }

  // Edit post
  const handleShow = (event,id) => {
    mypost.map((i,index)=>{
      if(index === parseInt(id)){
        setedittext(i.text);
        seteditlike(i.like);
        seteditcomment(i.comment);
        seteditlikecolor(i.likeColor)
      }
    })
    setShow(true) 
  };
  const callEditText=(event)=>{
    setedittext(event.target.value);
    seteditfile();
  }

  const callEditFile=(event)=>{
    let imgName = URL.createObjectURL(event.target.files[0]);
    seteditfile(imgName)
  }
  // Share edited post
  const editPost=(id)=>{
    mypost.splice(id,1);
    userPost.splice(id,1);
    var d = new Date().toString();
    var date = d.split(' ').splice(0, 5).join(' ');
    let post={"name":userName,"text":edittext,"image":editfile,"curr_date":date,"like":editlike,"likeColor":editlikecolor,"comment":[...editcomment],"commentDisplay":"none"};
    setuserPost([post,...userPost]);
    setShow(false);
    alert("Edited successfully");
    
  }

  // User Logout
  const userLogout=()=>{
    setloggedin(false);
  }

  return (
    <>
    {loggedin && <Navbar logout={userLogout}/>}
    <Routes>
      <Route path="/" element={<Login signup={signUp} userlogin={login} loggedin={loggedin}/>}/>
      <Route path="/home" element={<Home username={userName} getImage={postImage} share={sharePost} loggedin={loggedin}/>}/>
      <Route path="/profile" element={<Profile userData={user} loggedin={loggedin} changePassword={changeuserPassword}/>}/>
      <Route path="/feeds" element={<Feeds userpostData={userPost} username={userName} comment={comment} userlike={userlike} hidecomment={hidecomment} like={like} commentValue={commentValue} commentText={commentText} sharePost={shareuserPost} loggedin={loggedin} mypostData={mypost}/>}/>
      <Route path="/mypost" element={<Mypost mypostData={mypost} username={userName} comment={comment} userlike={userlike} hidecomment={hidecomment} like={like} commentValue={commentValue} commentText={commentText} deletePost={deleteUserPost} loggedin={loggedin}  show={show} handleShow={handleShow} handleClose={handleClose} edittext={edittext} editfile={editfile} callEditText={callEditText} callEditFile={callEditFile} editPost={editPost}/>}/>
    </Routes>
    
    </>
  );
}

export default App;
