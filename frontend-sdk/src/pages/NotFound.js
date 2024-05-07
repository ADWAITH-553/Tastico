import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='w-screen h-screen bg-black flex flex-col items-center  '>
      <p className='text-3xl text-white m-8'>Page Not Found !</p>
      <img src = "https://cdn.svgator.com/images/2022/01/404-page-design-animation.gif" 
      className='h-1/2'/>
        <Link to="/" className='mt-4'>
        Return to home page
      </Link>
        
    </div>
  )
}

export default NotFound
