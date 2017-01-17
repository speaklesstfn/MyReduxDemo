/**
 * Created by tfn on 16-12-30.
 */

import * as actionTypes from '../constants/actionTypes';

const textInitState = {
    text: '',
};

export default function textChange(state = textInitState, action) {
    switch (action.type) {
        case actionTypes.TEXT_UPDATE:
            return {
                ...state,
                text: state.text + '_change',
            };
        default:
            return state;
    }
}