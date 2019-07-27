import {createStore} from 'redux';
import reducer from './reducer';

//公共仓库的管理员
//创建store时一定要传递reducer
const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
