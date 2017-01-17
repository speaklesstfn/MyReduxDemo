/**
 * Created by tfn on 16-12-30.
 */

import * as actionTypes from '../constants/actionTypes';

const numInitState = {
    num: 0,
};

export default function numChange(state = numInitState, action) {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                num: state.num + 1,
            };
        case actionTypes.DECREMENT:
            return {
                ...state,
                num: state.num - 1,
            };
        default:
            return state;
    }
}