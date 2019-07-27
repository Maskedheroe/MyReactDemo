import React, {Component} from 'react';
import 'antd/dist/antd.css'
import store from './store'
import {getDeleteItemAction, getInputChangeAction, getItemAddAction} from './store/actionCreaters';
import TodoListUI from './TodoListUI'
import axios from 'axios'
export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();  //组件里的数据来自与store里的数据
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        //标准的观察者模式，该组件要观察store的改变了
        store.subscribe(this.handleStoreChange);
    }

    render() {
        return (
            <TodoListUI
                inputValue = {this.state.inputValue}
                list = {this.state.list}
                handleInputChange = {this.handleInputChange}
                handleButtonClick = {this.handleButtonClick}
                handleItemDelete = {this.handleItemDelete}
            />)

    }

    componentDidMount() {
        axios.get('http://localhost:3000/todoList.json').then((res)=>{
            console.log(res);
        })
    }

    handleItemDelete(index) {
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }

    handleInputChange(e) {
        //ACTION
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action); //把action传递给了store
    }

    handleStoreChange() {
        //当我感知store变化了，则当前组件改变state状态
        this.setState(store.getState());
    }

    handleButtonClick() {
        const action = getItemAddAction();
        store.dispatch(action);
    }
}
