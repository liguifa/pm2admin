import 'antd/dist/antd.css';
import Spin from 'antd/lib/spin';
import * as React from 'react';
import { connect } from "react-redux";
import  { BrowserRouter as Router, Route } from 'react-router-dom';
import { ILoadingAction, LoadingStatus } from './common';
import { Http } from './common';
import "./common/index.css";
import Login from './modules/login';
import { IState } from './store';

interface IAppProps {
    status: LoadingStatus,
    dispatch?: (action: ILoadingAction) => void
}

class AppComponent extends React.Component<IAppProps, {}> {
    public componentDidMount() {
        Http.interceptors(this.props.dispatch!)
    }

    public render() {
        return (
            <div className="App">
                <Router>
                    <Route path="/login" component={Login} />
                </Router>
                { this.props.status === LoadingStatus.LOADING ? <Spin className="pa-app-loading" tip="玩命加载中..." /> : null }
            </div>
        );
    }
}

const mapStateToProps: (state: IState) => IAppProps = ({ App }) => {
    return {
        status: App && App.status
    }
}

export default connect(mapStateToProps)(AppComponent);
