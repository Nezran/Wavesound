import query from '../http/index'

export const stringSearch = (string) => {
    return {
        type:'QUERY_SEARCH',
        string
    }
}

export const typeSearch = (cat) => {
    return {
        type:'TYPE_SEARCH',
        cat:cat
    }
}

export const getArtists = (string, cat) => {
    return {
        type:'GET_ARTISTS',
        string:string,
        cat:cat
    }
}

export const authSpotify = params => {

    return {
        type:'AUTH_APP',
        params
    }

}

//artists
export function resetArtists(){
    return {
        type: 'RESET_ARTISTS'
    }
}

function requestArtists(){
    return {
        type: 'REQUEST_ARTISTS'
    }
}

function receiveArtists(items) {
    return {
        type: 'RECEIVE_ARTISTS',
        artists: items,
        receivedAt: Date.now()
    }
}

export function fetchArtists(string) {
    if(string.length < 3){
        return dispatch => {
            dispatch(resetArtists())
        }
    }else{
        return dispatch => {
            dispatch(requestArtists())
            return query.searchArtists(string).then((res) => {
                dispatch(receiveArtists(res.data.artists.items))
            })
        }
    }

}

// artist

function requestArtist(){
    return {
        type: 'REQUEST_ARTIST'
    }
}

function receiveArtist(items) {
    return {
        type: 'RECEIVE_ARTIST',
        artist: items,
    }
}

export function fetchArtist(string,cat) {
    return dispatch => {
        dispatch(requestArtist())
        return query.searchArtist(string,cat).then((res) => {
            dispatch(receiveArtist(res.data))
        })
    }
}

// albums

function requestArtistAlbums(){
    return {
        type: 'REQUEST_ARTIST_ALBUM'
    }
}

function receiveArtistAlbum(items) {
    return {
        type: 'RECEIVE_ARTIST_ALBUM',
        albums: items,
    }
}

export function fetchArtistAlbums(string,cat) {
    return dispatch => {
        dispatch(requestArtistAlbums())
        return query.searchArtistAlbum(string,cat).then((res) => {
            dispatch(receiveArtistAlbum(res.data.items))
        })
    }
}