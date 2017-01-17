/**
 * Created by tfn on 16-12-30.
 */

import * as actionTypes from '../constants/actionTypes';

export const addTodo = () => {
    console.log("action increase");
    return {
        type: actionTypes.INCREMENT,

    };
}

export const decTodo = () => {
    console.log("action decrease");
    return {
        type: actionTypes.DECREMENT,

    };
}

export const textUpdate = () => {
    console.log("action text update");
    return {
        type: actionTypes.TEXT_UPDATE,

    };
}

export const login = () => {
    console.log("action login");
    return ((dispatch) => {
        dispatch({type: actionTypes.START_LOGIN});
        new Promise(function (resolve, reject) {
            setTimeout(() => {
                resolve('haha');
            }, 3000);
        }).then((msg) => {
            dispatch({type: actionTypes.LOGIN_SUCCES});
        });
    });
}