import React, { Component } from 'react'
import Footer from './footer';
import Navbar from './NabBar';
import '../src/Profile.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser ,logout} from './Redux/useerSlice.js'
import { useNavigate } from 'react-router-dom';
function Profile() {
    const user=useSelector(selectUser)
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleLogout=()=>{
        dispatch(logout());
        navigate('/signin');
    }
    if(!user){
        navigate('/signin');
        return null;
    }
    return ( 
        <>
        <Navbar/>
        <div className='pro'>
            <h2 className='styl'>Profile</h2>
        </div>
        <div className='profile'>
            <div className='profileCard'>
                <div className='leftPro'>
                {/* <h1>Name</h1> */}
                </div>
                <div className='rightPro'>
                <div className="rightinside">
                    <h4>Name:</h4>
                    <h5 className='name1'>{user.username}</h5>
                    {/* <h4>Username:</h4>
                    <h5 className='name1'></h5> */}
                    <h4>Email:</h4>
                    <h5 className='name1'>{user.email}</h5>
                    <h4>Address:</h4>
                    <h5 className='name1'>kuniyamuthur,cbe</h5>

                    <div className='logout-btn'>
                    <button  class="btn btn-primary" onClick={handleLogout}>Logout</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}

export default Profile;