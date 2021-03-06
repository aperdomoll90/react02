import React from 'react'
import Navbar from './Navbar'

function Header({isLoggedIn, setIsLoggedIn}){
return (
<>
<Navbar
setIsLoggedIn={setIsLoggedIn}
 isLoggedIn={ isLoggedIn} />
<h1>Welcome {isLoggedIn ? 'back' : 'guest' } ! </h1>
</>
)
}

export default Header