import 'antd/dist/antd.css';
import Card from 'antd/lib/card';
import Spin from 'antd/lib/spin';
import * as React from 'react';
import  { BrowserRouter as Router, Route } from 'react-router-dom';
import { Http } from '../../../common';
import Login from '../../../modules/login';
import Header from "../../header";
import Nav from "../../nav";
import { IMainProps } from "../props/IMainProps";
import { LoadingStatus } from '../store/LoadingStatus';
import "../style/MainComponent.css";

export class MainComponent extends React.Component<IMainProps, {}> {
    public componentDidMount() {
        Http.interceptors(this.props.dispatch!)
    }

    public render(): JSX.Element {
        return (
            <Router>
                <div className="pa-main">
                    <Route path="/login" component={Login} />
                    <Nav />
                    <div className="pa-main-right">
                        <Header />
                        <div className="pa-main-right-body">
                        <h1>busess_nlog_service</h1>
                        <Card bordered={false} style={{ width: `calc(100% - 30px)`, marginLeft: `15px`, marginTop: `15px` }}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                            </Card>
                        </div>
                    </div>
                    { this.props.status === LoadingStatus.LOADING ? <Spin className="pa-app-loading" tip="玩命加载中..." /> : null }
                </div>
            </Router>
        );
    }
}
