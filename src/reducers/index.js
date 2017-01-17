/**
 * Created by tfn on 16-12-30.
 */

import {combineReducers} from 'redux';

import numReducer from './numReducer';
import textReducer from './textReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
    nReducer: numReducer,
    tReducer: textReducer,
    lReducer: loginReducer,
});

export default rootReducer;