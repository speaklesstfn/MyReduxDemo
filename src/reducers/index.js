/**
 * Created by tfn on 16-12-30.
 */

import {combineReducers} from 'redux';

import num from './numReducer';
import text from './textReducer';

const rootReducer = combineReducers({
    num,
    text,
});

export default rootReducer;