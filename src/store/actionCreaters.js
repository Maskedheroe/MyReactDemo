import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './actionTypes'

export const getInputChangeAction = (value) => ({  //ES6写法，返回值是一个对象时可以不用return，直接()
    type: CHANGE_INPUT_VALUE,
    value: value
});
export const getItemAddAction = () => ({
    type: ADD_TODO_ITEM,
});

export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index: index
});
