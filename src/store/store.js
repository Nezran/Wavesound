import soundApp from '../reducers/index'
import thunk from 'redux-thunk';
import {
    applyMiddleware,
    compose,
    createStore
} from 'redux';

 function configureStore (initialState, debug = false) {

    let createStoreWithMiddleware;

    const middleware = applyMiddleware(thunk);

    createStoreWithMiddleware = compose(
        middleware);

    const store = createStoreWithMiddleware(createStore)(
            soundApp, initialState
    );

    return store;
}


const store = configureStore();

export default store