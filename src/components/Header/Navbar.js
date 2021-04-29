import React from 'react'

function Navbar({isLoggedIn,setIsLoggedIn}){
    

    if (!isLoggedIn){
        return <button onClick={ ()=>setIsLoggedIn(true)}>LOGIN</button>
    }
    return <button onClick={ ()=>setIsLoggedIn(false)}>LOGOUT</button> 

    
}


export default Navbar