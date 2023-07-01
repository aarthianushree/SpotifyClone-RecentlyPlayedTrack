import React from 'react';
import { loginUrl } from './Spotify';
import './Login.css'
import Particles from 'react-particles'

export const Login = () => {
  
  return (

    <div className='login'>


        <img 
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
        alt=""
        />
        
        <a href={loginUrl}>Login to Spotify</a>

    </div>

   
    
    
  )
}
