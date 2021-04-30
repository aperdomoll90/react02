import React from 'react'
import {Link} from 'react-router-dom'

function SingleCoffee({ coffee }) {
  if(!coffee.title) {
    return null
  }
  const slug = coffee.title.toLowerCase().replace('','-')
  return (
    <h3>
       <Link to={`/coffees/${slug}`}> {coffee.title}</Link>
    </h3>
   
  )
}

export default SingleCoffee