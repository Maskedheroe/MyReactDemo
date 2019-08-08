import React, { Component } from "react";
import {connect} from 'react-redux';

const TodoList = (props) => {
// class TodoList extends Component {  //UI组件可以写为无状态组件

    const { inputValue, chanInputValue, handleClick } = props;  //结构赋值来简化代码,可以对比21行
        
    return (
        <div>
                <div>
                    <input 
                        value={inputValue}
                        onChange={chanInputValue}
                    />
                    <button onClick={handleClick} >提交</button>
                </div>
                <ul>
                    {
                        props.list.map((item,index)=>{
                            return <li onClick={props.handleDelete} key={index}> {item} </li>
                        })
                    }
                
                </ul>
        </div>
    )
}

const mapStateToProps = (state) => { //将store里的inputvalue映射到state的inputvalue
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        chanInputValue(e){
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action);
        },

        handleClick(){
            const action = {
                type: 'add_item'
            }
            dispatch(action);
        },

        handleDelete(index){
            const action = {
                type: 'delete_item',
                index
            }
            dispatch(action);
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList); //让store和TodoList连接，因为TodoList在provider里
// export default TodoList;