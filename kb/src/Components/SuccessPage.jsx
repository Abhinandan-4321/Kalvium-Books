import React from 'react'
import '../index.css'
import tick from '/src/assets/checked.png'
import { Link } from 'react-router-dom'

function SuccessPage() {
  return (
    <div className='Scont'>
      <div className='Sccont'> 
        <h1 className = "hello">Registration SuccessFul</h1>
        <img src={tick} style={{height:"100px", marginTop:"10px", marginBottom:"30px"}} />
        <Link to = "/"><button className='BackBtn' >Back to Library</button></Link>
      </div>
    </div>
  )
}

export default SuccessPage