import React from 'react'
import '../src/LoginPage.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { login } from './Redux/useerSlice.js';
import axios from 'axios';
function LoginPage() {
    const [email, setEmail] = useState('') // useState to store Email address of the user
    const [username, setUsername] = useState('') // useState to store Email address of the user
    const [password, setPassword] = useState('') // useState to store Password
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    function validateForm() {
    }
    const onSubmit = async (e) => {
      e.preventDefault();
  
      // Check if email and password are not empty
      if (!email || !password) {
        alert("Please provide both email and password.");
        return;
      }
  
      try {
        // Send the data to the API using axios.post
        const response = await axios.post("http://localhost:8080/api/v1/auth/authenticate", {
          email: email,
          password: password,
        });
  
        // Handle the response as needed (e.g., redirect, show success message, etc.)
        console.log("Response from API:", response.data);
  
        // Clear the form fields after successful submission
        setEmail("");
        setUsername("");
        setPassword("");
  
        // Redirect or navigate to another page if needed
        navigate("/");
        alert('You successfully Login');
        dispatch(login({ username, email }));
      } catch (error) {
        // Handle errors, e.g., show error message
        console.error("Error submitting form:", error);
        alert('User not found');
      }
    };
    return ( 
        <>

    <div class="split left1">
    <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1"><Link to='/'>Built Better</Link></span>
  </div>
</nav>
    <div class="centered">
        <h2>Login into your Built Better Account.</h2>
        <p>Access your Built Better account using your email address to add and verify your mobile number.</p>
    </div>
    </div>


        <div class="split right1">
        <div className='header'>
        <div class="container">
        <h2>Login Page</h2>
        <br></br>
        {/* <br></br> */}
        <form id='loginForm' onSubmit={onSubmit} >
        <div class="form-group">
            <label for="exampleInputusername1">Username</label>
            <input type="text" class="form-control" value={username} id="exampleInputname1" aria-describedby="usernameHelp" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)}></input>
            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}></input>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <div className='login-page-space'>
            <p>Don't have account <Link to="/register">Registration</Link></p>  
            </div>
            <center>
         <div class="d-grid gap-2">
        <button type="submit" class="btn btn-info" onClick={() => {validateForm()}}>Submit</button>
        </div>
        </center>   
        </form>
        </div>
        </div>
        </div>

        </>
     );
}

export default LoginPage;