/**
 * Created by tfn on 16-12-30.
 */
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore(rootReducer, initialState) {
    return createStoreWithMiddleware(rootReducer, initialState);
}