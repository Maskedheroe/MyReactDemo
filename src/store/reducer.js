import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './actionTypes'

const defaultState = {
    inputValue: '',
    list: []
};


//state 是整个数据(可以理解为笔记本中的数据)
//reducer可以接收state 但是不能修改state
export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {   //这就是一个reducer操作
        const newState = JSON.parse(JSON.stringify(state));  //做深copy
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if (action.type === DELETE_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
    return state;
}
