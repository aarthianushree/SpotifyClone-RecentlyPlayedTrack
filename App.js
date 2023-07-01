import { useEffect} from 'react';
import './App.css';
import { Login } from './Login';
import { getTokenFromUrl } from './Spotify';
import { Player } from './Player';
import spotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer';


const spotify = new spotifyWebApi();

function App() {

  //const [token, setToken] = useState('')
  const [{user, token, recentlyPlayed, artistsID}, dispatch] = useDataLayerValue()

  useEffect( ()=>{
    const hash = getTokenFromUrl();
    window.location.hash="";
    const _token = hash.access_token;

    if(_token){
    //setToken(_token)
    dispatch({
      type: 'SET_TOKEN',
      token: _token
    })

    spotify.setAccessToken(_token); 
    console.log('.....details.....', spotify)

    spotify.getMe().then(user=>{
      //  console.log('user details.....',spotify.getMe(p));
      //  console.log('userId. . .',p.type)
      dispatch({
        type: 'SET_USER',
        user: user
      })
    }) 
    
    spotify.getUserPlaylists().then( playlists=>{
      // console.log('playlists........',spotify.getUserPlaylists());
      // console.log('items. . .',playlists.items)
      dispatch({
        type: 'SET_PLAYLISTS',
        playlists: playlists
      });
    })

    spotify.getMyRecentlyPlayedTracks().then( recentlyPlayed=>{
      // console.log('name...',recentlyPlayed.items[0].track.artists[0].name, recentlyPlayed.items[0].track.album.name)
      dispatch(
        {
          type: 'RECENTLY_PLAYED',
          recentlyPlayed: recentlyPlayed
        }
      )
    })
    
    console.log('hey....',spotify.getMyTopTracks())

    spotify.getMyTopTracks().then( tracks=>{
      dispatch(
        {
          type: "TOP_TRACKS",
          tracks: tracks
        }
      )
    })



    }
  },[]);

  return (
    <div className="App">
    {token?<Player/>:<Login/>}
    </div>
  );
}

export default App;
