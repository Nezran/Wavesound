import { combineReducers } from 'redux'
import params from './params'
import artistes from './artistes'
import artist from './artist'


const soundApp = combineReducers(
    {
        params,
        artistes,
        artist
    }
)



export default soundApp
