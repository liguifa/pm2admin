import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import ReduxThunk from 'redux-thunk'
import { AppReducer } from '../common';
import { LoginReducer } from '../modules/login';

const composedEnhancers = compose(applyMiddleware(ReduxThunk), (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__())
const reducer = combineReducers({
    App: AppReducer,
    Login: LoginReducer,
});

export default createStore(reducer, {}, composedEnhancers)