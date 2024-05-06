import React, { useState } from 'react'

function Multipleinputs() {
    const[userRegistration,setUserRegistration]=useState({
        username:"hemant",
        email: "",
        phone: "",
        password:""
    })
    const [records,setRecords]=useState([]);
    const handleInput=(e)=>{
        setUserRegistration(e.target.name)
        console.log(e.target.name)
        setUserRegistration(e.target.value)
    
        console.log(e.target.value)
        
      
        
    }


    function handleSubmit(e){
        e.preventDefault();

        const newRecords = { ...userRegistration, id:new Date().getTime().toString() }
        console.log(records)
        setRecords([...records,newRecords])
        console.log(records)

        }
        return (
            
            
            <form action='' onSubmit={handleSubmit}>
    <div>
        <label htmlFor='username'>fullname</label>
        <input type='text'value={userRegistration.username}onChange={handleInput}name='username' id='username'/>
  

    </div>
    <div>
        <label htmlFor='email'>email</label>
        <input type='text'
        value={userRegistration.email}
        onChange={handleInput}
        name='email' id='email'/>

    </div>
    <div>
    <label htmlFor='phone'>phone</label>
        <input type='text'
        value={userRegistration.phone}
        onChange={handleInput}
        name='phone 'id='phone'/>
    </div>
    <div>
    <label htmlFor='password'>password</label>
        <input type='password'
        value={userRegistration.password}
        onChange={handleInput}
        name='password 'id='password'/> 
    </div>
    <button type='submit'>SUBMIT</button>
    

    </form>
   
   
   )
}


export default Multipleinputs;