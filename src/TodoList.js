import React, {Component, Fragment} from 'react';
import './style.css'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',  //经典的数据驱动就是input的使用，通过state
            list: [],
        }

        //this指向的绑定建议统一写在构造方法中
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor={'insertArea'}>输入内容</label>
                    <input
                        id={'insertArea'}
                        className={'input'}
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }

   /*
    * {    1、父组件向子组件传值，使用属性传递，子组件通过props接受
           2、传递函数时，要注意让子组件的this绑定到父组件上，这才能调父组件的方法(this.handleItemDelete.bind(this))
           3、如果要循环处理组件，则要给子组件加上一个 key 值
      }
    */
    getTodoItem() {
        return this.state.list.map((item, index) => {  //遍历list 返回一个个标签
            return (

                    <TodoItem
                        key={index}
                        content={item}
                        index={index}
                        deleteItem={this.handleItemDelete}
                    />


            )
        })
    }

    handleInputChange(e) {
        //新版RN做法
        const value = e.target.value;  //注意异步了要在外部保存一下。
        this.setState(() => ({  //这是异步操作，为了性能
            inputValue: value
        }));
        /*
        this.setState({
            inputValue: e.target.value
        })*/
    }

    handleBtnClick() {
        /*//不要关注如何操作Dom了，关注数据如何操作
        this.setState({
            //这是展开运算符，之前在list存放的元素全部取出，展开，生成新的数组
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })*/

        this.setState((prevState) => ({  //prevState 推荐如此做！
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }));
    }

    handleItemDelete(index) {
        /*const list = [...this.state.list]; //展开运算符，将之前的数组展开后放在了list中，相当于数组copy
        list.splice(index, 1);
*/
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);  //1是删除一个元素
            return {list}
        });
    }

}
