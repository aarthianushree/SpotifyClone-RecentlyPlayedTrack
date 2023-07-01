import React from 'react'
import SideBar from './SideBar'
import Body from './Body'
import './Player.css'
import Footer from './Footer'
import { RightSideBar } from './RightSideBar'

export const Player = () => {
  return (
    <div className='whole_page_style'>
        <SideBar/>
        <Body/>
        <RightSideBar/>
        <Footer/>
        
    </div>
  )
}
