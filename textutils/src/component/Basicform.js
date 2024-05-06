import React,{useState} from 'react'

function Basicform() {
    const[email, SetEmail]=useState("email");
    const[password, SetPassword]=useState("password");
    const[confirmPassword,SetConfirmPassword]=useState("confirmPassword")
    const[AllEntry,SetAllEntry] = useState([]);

    const handleChange=(e)=>{
        SetEmail(e.target.value);
        
    console.log(e.target.value)
       
        }
        const onChange=(e)=>{
            SetPassword(e.target.value)
            console.log(e.target.value)
        }
            const changeHandle=(e)=>{
                SetConfirmPassword(e.target.value)
                console.log(e.target.value)
            }
        const SubmitForm = (e)=>{
            e.preventDefault();
            const newEntry={email:email,password:password}
            SetAllEntry([...AllEntry,newEntry]);
            console.log(AllEntry)
        }
    
       
    
    
    
    return (
        
        <form action="" onSubmit={SubmitForm} >
        <div>
        <label  htmlFor='email'>Email</label>
       : <input type='text'value={email}onChange={handleChange}name='email'id='email'></input>
            
            
        
        <br></br>
        <br></br>
        
        <label  htmlFor='password'>password</label>
    :   <input type='text' value={password}onChange={onChange}id='password'autoComplete='off'/>
        <br></br>
        <br></br>
    <label htmlFor='confirmPassword'>confirmPassword</label>
   : <input type='confirmPassword'value={confirmPassword}onChange={changeHandle}id='confirmpassword'autoComplete='off'/>
       
        
        <br></br>
        <br></br>
        <button type='submit'>login</button>
        </div>
      </form>
        
        
        )
    }
    



export default Basicform
