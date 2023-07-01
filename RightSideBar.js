import React from 'react'
import './RightSideBar.css'
import { useDataLayerValue } from './DataLayer'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';


export const RightSideBar = () => {

  const [{recentlyPlayed, tracks}, dispatch] = useDataLayerValue();
  
 
  return (
  <div className='rightSideBar_size'>

{recentlyPlayed?.items?.map( order=>{
    return(
      <p className='rightText'>{order.track.name}</p>
    )
  }).filter( (recentlyPlayed,index)=>{
    return(
      index == 0
    )
  })}

  <div className='rightbox1'>
  {recentlyPlayed?.items?.map( order=>{
    return(
    <img className='rightImage' src={order?.track?.album?.images[0]?.url}/>  
    )
  }).filter( (recentlyPlayed, index)=>{
    return(
      index == 0
    )
  })}
  
  <div className='song_info'>
  <div>
  {recentlyPlayed?.items?.map( order=>{
    return(
      <h3 className='rightheading'>{order.track.name.substring(0,20)}</h3>
    )
  }).filter( (recentlyPlayed,index)=>{
    return(
      index == 0
    )
  })}

  {recentlyPlayed?.items?.map( order=>{
    return(
      <h5 className='rightNames'>{order?.track?.artists?.map(order=>{
        return (order.name)}).join(' , ').substring(0,30)}</h5>
    )
  }).filter( (recentlyPlayed,index)=>{
    return (
      index == 0
    )
  })}

  </div>

  <div className='righticons'>
  <FavoriteBorderRoundedIcon/>
  <MoreHorizRoundedIcon className='iconGap'/>
  </div>
  </div>
 
  </div>

  <div className='rightBox2'>
  <h4>TOP TRACK LISTENED</h4>
  <div className='currentTrackDetails'>

  <img className='Trackimage' src={tracks?.items?.map( order=>{
    return(
      order?.album?.images[0].url
    )
  }).filter( (tracks,index)=>{
    return (
      index==0
    )
  })}/>

  <div className='currentTrackDetails_text'>
  <h5>{tracks?.items?.map( order=>{
    return (
      order?.album?.name.substring(0,30)
    )
  }).filter( (tracks,index)=>{
    return (
      index==0
    )
  })}</h5>

  <h4>{tracks?.items?.map( order=>{
    return (
      order?.name
    )
  }).filter( (tracks,index)=>{
    return (
      index==0
    )
  })}</h4>
  </div>
  
  </div>
  </div>
  
  <div className='rightBox3'>

  <div className='rightBox3Text'>
    <h4>Next In Queue</h4>
    <p>Open Queue</p>
  </div>

  <div className='queueSong_info'>

  
  {recentlyPlayed?.items?.map( order=>{
    return(
    <img className='rightQueueImage' src={order.track?.album?.images[0]?.url}/>  
    )
  }).filter( (recentlyPlayed, index)=>{
    return(
      index == 1
    )
  })}
  <div className='box3QueueText'>
  {recentlyPlayed?.items?.map( order=>{
    return(
      <h3>{order.track.name.substring(0,25)}</h3>
    )
  }).filter( (recentlyPlayed,index)=>{
    return(
      index == 1
    )
  })}

  {recentlyPlayed?.items?.map( order=>{
    return(
      <p>{order?.track?.artists?.map(order=>{
        return (order.name)}).join(' , ').substring(0,20)}</p>
    )
  }).filter( (recentlyPlayed,index)=>{
    return (
      index == 1
    )
  })}
  </div>

  
  </div>

  </div>

  </div>
  )
  
}
