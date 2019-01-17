import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import ReduxThunk from 'redux-thunk'
import { LoginReducer } from '../modules/login';
import { MainReducer } from '../modules/main';

const composedEnhancers = compose(applyMiddleware(ReduxThunk), (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__())
const reducer = combineReducers({
    Login: LoginReducer,
    Main: MainReducer,
});

export default createStore(reducer, {}, composedEnhancers)