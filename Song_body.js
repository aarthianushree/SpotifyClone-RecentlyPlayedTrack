import React from 'react'
import './Song_body.css'
import { useDataLayerValue } from './DataLayer'
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone';
import ArrowBackIosNewTwoToneIcon from '@mui/icons-material/ArrowBackIosNewTwoTone';
import { Avatar } from '@mui/material';
import Button from '@mui/material/Button';


const Song_body = () => {

  const [{ user,recentlyPlayed }, dispatch] = useDataLayerValue();
  

  return (


    <div className='Song_body_size'>

      <div className='header_size'>

        <div className='headerTop'>
        <ArrowBackIosNewTwoToneIcon  fontSize='medium'/>
        <ArrowForwardIosTwoToneIcon className='arrowIcon' fontSize='medium' />
        <Button className='btn' variant="outlined" size="medium">
        Explore Premium
        </Button>
        <Avatar src={user?.images[0]?.url} alt="anu"/>
        </div>

      </div>

      <div>
        <h2 className='title'>Recently Played</h2>
        <div className='grid'>
          {recentlyPlayed?.items?.map(playlist => {
            return (
              <div className='box'>
                <img className='box_image' src={playlist.track?.album?.images[0].url} alt='' />
                <p className='box_text'>{playlist?.track?.name?.substring(0, 35)}</p>
              </div>
            )

          })}

        </div>
        
      </div>

    </div>

  )
}

export default Song_body