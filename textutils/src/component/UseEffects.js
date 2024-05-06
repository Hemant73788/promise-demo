import React,{ useState,useEffect} from 'react'

function UseEffects() {
  const[count,setCount]=useState(2);
  const handleClick=()=>{
    setCount(count+1)
    alert("page is updated")
  }
      useEffect (()=>{
        document.title= 'chats ($ {count})'
       
        console.log("Useeffects ")
    });

  return (
    <div>
      <h1>{count}</h1>
      <button className='btn'onClick={handleClick}>click</button>
        

    </div>
    
  )
}

export default UseEffects;