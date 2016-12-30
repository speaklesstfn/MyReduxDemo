/**
 * Created by tfn on 16-12-30.
 */

import * as actionTypes from '../constants/actionTypes';

export default function textChange(state = '', action) {
    switch (action.type) {
        case actionTypes.TEXT_UPDATE:
            return state + '_change';
        default:
            return state;
    }
}