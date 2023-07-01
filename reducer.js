export const initialState = {
    user: null,
    playlists: [],
    token: null,
    recentlyPlayed: [],
    tracks: []
}

const reducer = (state, action)=>{
    console.log('Specified action', action);
    switch(action.type)
    {
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }
        case 'SET_USER':
            return{
                ...state,
                user: action.user,
            }
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists
            }
        case 'RECENTLY_PLAYED':
            return{
                ...state,
                recentlyPlayed: action.recentlyPlayed
            }
        case 'ARTIST_IDs':
            return{
                ...state,
                artistsID: action.IDs
            }
        case 'TOP_TRACKS':
            return{
                ...state,
                tracks: action.tracks
            }
        default:
            return state;
    }
}

export default reducer;