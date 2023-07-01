import React from 'react'
import './Footer.css'
import { useDataLayerValue } from './DataLayer'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import DoDisturbOnOutlinedIcon from '@mui/icons-material/DoDisturbOnOutlined';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ReplayIcon from '@mui/icons-material/Replay';
import Slider from '@mui/material/Slider';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import ReorderIcon from '@mui/icons-material/Reorder';
import DevicesIcon from '@mui/icons-material/Devices';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';


const Footer = () => {

  const [{recentlyPlayed}, dispatch] = useDataLayerValue();
  
  return (
    <div className='footer_size'>
    
    <div className='left'>
    {recentlyPlayed?.items?.map( (order, index)=>{
      return(
        <img className='leftimage' src={order.track.album.images[0].url} alt=''/>
      )
    }).filter( (recentlyPlayed,index)=>{
      return(
        index == 0
      )
    })}
    
    <div>
    {recentlyPlayed?.items?.map( order=>{
      return(
        <p>{order.track.name.substring(0,16)}</p>
      )
    }).filter( (recentlyPlayed,index)=>{
      return(
        index == 0
      )
    })}

    {recentlyPlayed?.items?.map( order=>{
    return(
      <p className='leftText'>{order.track.artists.map(order=>{
        return (order.name)}).join(' , ').substring(0,25)}</p>
    )
  }).filter( (recentlyPlayed,index)=>{
    return (
      index == 0
    )
  })}
    </div>
    <FavoriteBorderRoundedIcon className='heartIcon'/>
    <DoDisturbOnOutlinedIcon/>

    </div>

    <div className='middle'>
    <div className='middleTop'>
    <ShuffleIcon fontSize='medium'/>
    <SkipPreviousIcon fontSize='medium'/>
    <PlayCircleIcon fontSize='large'/>
    <SkipNextIcon fontSize='medium'/>
    <ReplayIcon fontSize='medium'/>
    </div>
    
    <div className='middleBottom'>
    <Slider fontSize='small' className='footer_green'/>
    </div>

    </div>

    <div className='right'>
    <SmartDisplayIcon fontSize='small'/>
    <KeyboardVoiceIcon fontSize='small'/>
    <ReorderIcon fontSize='small'/>
    <DevicesIcon fontSize='small'/>
    <VolumeUpIcon fontSize='small'/>
    <Slider fontSize='small' className='footer_rightslider'/>
    </div>

    </div>
  )
}

export default Footer