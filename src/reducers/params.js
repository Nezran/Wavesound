import query from '../http/index'

const params = (state = {string:'',cat:'artist'}, action) => {

    switch (action.type){
        case 'QUERY_SEARCH':

            return {string:action.string,cat:state.cat}

        case 'TYPE_SEARCH':
            // action dont used

            query.searchArtists(state.string,action.cat).then((res) => {
                console.log(res);
            });

            return {string:state.string,cat:action.cat}
        default:
            return state
    }

}

export default params