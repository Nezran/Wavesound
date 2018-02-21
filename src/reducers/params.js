import query from '../http/index'

const params = (state = {string:'',cat:'artist'}, action) => {

    switch (action.type){
        case 'QUERY_SEARCH':

            /*query.searchArtists(action.string,state.cat).then((res) => {
                console.log(res);
            });*/

            return {string:action.string,cat:state.cat}

        case 'TYPE_SEARCH':

            query.searchArtists(state.string,action.cat).then((res) => {
                console.log(res);
            });

            return {string:state.string,cat:action.cat}
        default:
            return state
    }

}

export default params