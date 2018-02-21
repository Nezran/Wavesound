

const artistes = (state = {
    isFetching: false,
    items: []
}, action) => {

    switch (action.type){
        case 'REQUEST_ARTISTS':
            return Object.assign({}, state, {
                isFetching: true
            })
        case 'RESET_ARTISTS':
            console.log("reset")
            return state = {
                isFetching: false,
                items: []
            }
        case 'RECEIVE_ARTISTS':
            return Object.assign({}, state, {
                isFetching: false,
                items: Array.isArray(action.artists) ? action.artists : [],
                lastUpdated: action.receivedAt
            })
        default:
            return state
    }

}

export default artistes