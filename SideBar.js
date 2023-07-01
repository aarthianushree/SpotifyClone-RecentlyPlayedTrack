import React from 'react'
import './SideBar.css'
import { useDataLayerValue } from './DataLayer'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import EastIcon from '@mui/icons-material/East';

const SideBar = () => {

  const [{playlists}, dispatch] = useDataLayerValue();

  return (
    <div className='sidebar_size'>
    <MoreHorizRoundedIcon className='sideBaricons'/>

    <div className='container1'>
    
    <div className='container1IconText'>
    <HomeRoundedIcon/>
    <h3>HOME</h3>
    </div>
    <div  className='container1IconText'>
    <SearchRoundedIcon/>
    <h3>SEARCH</h3>
    </div>
    

    <div className='lib'>
    <div className='libIcon_info'>
    <LibraryMusicRoundedIcon/>
    <h4>YOUR LIBRARY</h4>
    <AddToPhotosIcon/>
    <EastIcon/>
    </div>
    </div>
    </div>

    <div className='container2'>
   
    {playlists?.items?.map( playlist=>{
      return(
      <div className='playlistItems'>
      <img className='images' src={playlist.images[0]?.url} alt=''/>
      <p className='playlist_name'>{playlist.name}</p><br></br>
      </div>
      )
    })}

    
    
    </div>
    </div>
  )
}

export default SideBar