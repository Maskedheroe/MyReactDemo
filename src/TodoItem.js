import React,{ Component} from 'react';


class TodoItem extends Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this); //bind放在construct中绑定 节约性能
    }

    render() {
        const {content} =  this.props; //结构赋值一定要加花括号  content等于 this.props.content
        return (
            <div onClick={this.handleClick}>
                {content}
            </div>
        );
    }
    handleClick(){
        const {deleteItem, index } = this.props;  //继续结构赋值
        deleteItem(index);
        //子组件如何修改父组件的内容，在此想调用父组件的方法
    }

}

export default TodoItem;
