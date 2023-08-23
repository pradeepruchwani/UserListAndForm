import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
    const [user,setUser] = useState({
        name:'',
        username:'',
        eamil:'',
        password:'',
    })
    let name,value;
    const getUserData =(e)=>{
        name= e.target.name;
        value= e.target.value;
        setUser({...user,[name]:value});
    }

    const postData = async (e) =>{
        e.preventDefault();

        const{name,username,email,password}= user;

        if(name && username && email && password){
          let resp=await fetch('https://react-contact-bb621-default-rtdb.firebaseio.com/reactform.json',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
          },
          body:JSON.stringify({
            name,
            username,
            email,
            password,
          })
          
        }
           );
        
    
        if(resp){
          setUser({
            name:'',
            username:'',
            email:'',
            password:'',
          })
          alert('Data Stored Successfully!')
          navigate('/');
        }
      } else{
        alert("Please fill all the data!")
      }
        }

      
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add User</h2>
        <form method='POST'>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={user.name}
              onChange={getUserData}  />
          </div>
          <br/>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your UserName"
              name="username"
              value={user.username}
              onChange={getUserData}  />
          </div>
          <br/>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your Email Address"
              name="email"
              value={user.email}
              onChange={getUserData}  />
          </div>
          <br/>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Password"
              name="password"
              value={user.password}
              onChange={getUserData}  />
          </div>
          <br/>
         
          <button className="btn btn-primary btn-block" onClick={postData} >Submit</button>

          
        </form>
      </div>
    </div>
    
  )
}

export default SignUp