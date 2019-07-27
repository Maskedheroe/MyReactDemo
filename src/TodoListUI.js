import React from 'react';
import {Button, Input, List, Typography} from "antd";
/*换成无状态组件*/
//只有render函数时，UI组件可以替换为无状态组件，其性能较高，因为UI组件有各种生命周期函数，但只有render有用
const TodoListUI = (props) => {
    return (<div style={{marginTop: 10, marginLeft: 10}}>
            <div>
                <Input value={props.inputValue}
                       style={{width: '300px', marginTop: 10}}
                       onChange={props.handleInputChange}
                />
                <Button type="primary" onClick={props.handleButtonClick}>提交</Button>
            </div>
            <List
                style={{marginTop: '10', width: 300}}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (
                    <List.Item onClick={() => {
                        props.handleItemDelete(index);
                    }}>
                        <Typography.Text mark>[ITEM]</Typography.Text> {item}
                    </List.Item>
                )}
            />
        </div>
    )
};
export default TodoListUI;
/*

export default class TodoListUI extends Component {
    render() {
        return (<div style={{marginTop: 10, marginLeft: 10}}>
                <div>
                    <Input value={this.props.inputValue}
                           style={{width: '300px', marginTop: 10}}
                           onChange={this.props.handleInputChange}
                    />
                    <Button type="primary" onClick={this.props.handleButtonClick}>提交</Button>
                </div>
                <List
                    style={{marginTop: '10', width: 300}}
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item, index) => (
                        <List.Item onClick={()=>{
                            this.props.handleItemDelete(index);
                        }}>
                            <Typography.Text mark>[ITEM]</Typography.Text> {item}
                        </List.Item>
                    )}
                />
            </div>
        )
    }
    //使用方法时传值的手段是-->
    /!*
    this.state .handleItemDelete.bind(this, index)这是在本组件中直接调用时使用的手段
    * *!/
}
*/
