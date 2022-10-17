import React from 'react'
import classes from "./Newsletter.module.css"


const Newsletter = () => {
  return (
    <div className={`container ${classes.container}`}>
        <div className={classes.inner_container}>
            <p>Subscribe to newsletter & get company news.</p>
        <div>
            <input type="email" placeholder='Enter your email address' />
            <button>Sign Up </button>
        </div>
        </div>
    </div>
  )
}

export default Newsletter