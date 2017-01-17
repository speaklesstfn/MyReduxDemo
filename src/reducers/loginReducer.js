/**
 * Created by tfn on 2017/1/17.
 */

import * as actionTypes from '../constants/actionTypes';

const loginInitState = {
    isLogined: false,
    user: '',
    status: 'init',
};

export default function startLogin(state = loginInitState, action) {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCES:
            return {
                ...state,
                isLogined: true,
                user: 'tfn',
                status: 'done',
            };
        case actionTypes.START_LOGIN:
            return {
                ...state,
                status: 'starting',
            };
        default:
            return state;
    }
}