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