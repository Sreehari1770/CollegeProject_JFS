import React, { useState } from 'react'
import '../src/RegisterPage.css';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';


function Register() {
    const[id,setId]=useState('');
    const [lastName, setLastName] = useState('') // useState to store Last Name
    const [address,setAddress]=useState('')
    const [email, setEmail] = useState('') // useState to store Email address of the user
    const [password, setPassword] = useState('') // useState to store Password
    const [newpassword,setNewPassword]=useState('')
    const navigate = useNavigate();
    function validateForm() {
        if (email.length == 0) {
            alert('Invalid Form, Email Address can not be empty')
            return
        }
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert("Please enter a valid email address");
          return;
        }
        if (password.length < 8) {
            alert('Invalid Form, Password must contain greater than or equal to 8 characters.')
            return
        }
         // variable to count upper case characters in the password.
        let countUpperCase = 0
        // variable to count lowercase characters in the password.
        let countLowerCase = 0
        // variable to count digit characters in the password.
        let countDigit = 0
        // variable to count special characters in the password.
        let countSpecialCharacters = 0
         // variable to count upper case characters in the password.
         for (let i = 0; i < password.length; i++) {
            const specialChars = [
              '!',
              '@',
              '#',
              '$',
              '%',
              '^',
              '&',
              '*',
              '(',
              ')',
              '_',
              '-',
              '+',
              '=',
              '[',
              '{',
              ']',
              '}',
              ':',
              ';',
              '<',
              '>',
            ]
      if (specialChars.includes(password[i])) {
        // this means that the character is special, so increment countSpecialCharacters
        countSpecialCharacters++
      } else if (!isNaN(password[i] * 1)) {
        // this means that the character is a digit, so increment countDigit
        countDigit++
      } else {
        if (password[i] == password[i].toUpperCase()) {
            // this means that the character is an upper case character, so increment countUpperCase
            countUpperCase++
          }
          if (password[i] == password[i].toLowerCase()) {
            // this means that the character is lowercase, so increment countUpperCase
            countLowerCase++
          }
        }
      }
      if (countLowerCase == 0) {
        // invalid form, 0 lowercase characters
        alert('Invalid Form, 0 lower case characters in password')
        return
      }
      if (countUpperCase == 0) {
        // invalid form, 0 upper case characters
        alert('Invalid Form, 0 upper case characters in password')
        return
      }
      if (countDigit == 0) {
        // invalid form, 0 digit characters
        alert('Invalid Form, 0 digit characters in password')
        return
      }
      if (countSpecialCharacters == 0) {
        // invalid form, 0 special characters characters
        alert('Invalid Form, 0 special characters in password')
        return
      }
      if (password == '')
        alert ("Please enter Password");
        else if (newpassword == '')
            alert ("Please enter confirm password"); 
            else if (password != newpassword) {
            alert ("\nPassword did not match: Please try again...")
                    return false;
            }
       
      alert('SignUp successful')
    }
    async function handleSubmit  (e) {
      e.preventDefault();
      if(validateForm){
      
  
      try
    {
      
     await axios.post("http://localhost:8080/register/save",
    {
    
    userName:lastName,
    address : address,
    email:email,
    mPassword:password,
    cPassword:newpassword
  
    });
     
       setId("");
      setLastName("");
      setAddress("");
      setEmail("");
      setPassword("");
      setNewPassword("");
      
    
    
    }
  catch(err)
    {
      alert("User Registation Failed");
    }
    navigate("/signin");    
  }
}
    return ( 
        <>
         <div class="split left">
    <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1"><Link to='/'>Built Better</Link></span>
  </div>
</nav>
    <div class="centered">
        <h2>Create an Built Better Family Profile</h2>
        <p>Already have an account?</p><Link to="/signin">Login</Link>
    </div>
    </div>

        <div class="split right">
        <div class="container">
            <p>Become a member of Built Better Family today. Did we mention it's free to join?</p>
        <form onSubmit={handleSubmit}>
        
        <div class="form-group">
            <label for="exampleInputLname">Name</label>
            <input type="text" class="form-control" id="exampleInputLname" aria-describedby="LnameHelp" placeholder="Enter Your Name" onChange={(e) => setLastName(e.target.value)}></input>
            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>
        <div class="form-group">
            <label for="exampleInputAddress">Address</label>
            <input type="text" class="form-control" id="exampleInputAddress" aria-describedby="AddressHelp" placeholder='Enter your Address' onChange={(e) => setAddress(e.target.value)} ></input>
            {/* <small id="BdateHelp" class="form-text text-muted"></small> */}
        </div>
         
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}></input>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="New Password" onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword2">Confirm Password</label>
            <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Confirm Password" onChange={(e) => setNewPassword(e.target.value)}></input>
        </div>
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
            <label class="form-check-label" for="exampleCheck1">Stay signed in util you sign out</label>
        </div>
        <center>
        {/* <div className='but'> */}
        <button type="submit" class="btn btn-info" onClick={() => {validateForm()}}>Submit</button>
        {/* </div> */}
        </center>
        </form>
        </div>
        </div>
        </>
     );
}

export default Register;