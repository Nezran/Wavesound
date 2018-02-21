

const artist = (state = {
    isFetching:false,
    artist: {},
    albums: []
}, action) => {

    switch (action.type){
        case 'REQUEST_ARTIST':
            return Object.assign({}, state, {
                isFetching: true
            })
        case 'RECEIVE_ARTIST':
            return Object.assign({}, state, {
                isFetching: false,
                artist: action.artist,
            })
        case 'REQUEST_ARTIST_ALBUM':
            return Object.assign({}, state, {
                isFetching: true
            })
        case 'RECEIVE_ARTIST_ALBUM':
            return Object.assign({}, state, {
                isFetching: false,
                albums: Array.isArray(action.albums) ? action.albums : [],
            })
        default:
            return state
    }

}

export default artist