const defaultState = {
    inputValue : 'hello world',
    list: []
}

export default (state = defaultState, action) => {
    switch(action.type){
        case 'change_input_value': {
            const newState = JSON.parse(JSON.stringify(state));  //深拷贝
            newState.inputValue = action.value;
            return newState;
        } 
        case 'add_item': {
            const newState = JSON.parse(JSON.stringify(state));  //深拷贝
            newState.list.push(newState.inputValue);
            newState.inputValue = '';
            return newState;
        } 
        case 'delete_item': {
            const newState = JSON.parse(JSON.stringify(state));
            newState.list.splice(action.index,1);
            return newState;
        }
        default:
            break;
    }
    return state;
}