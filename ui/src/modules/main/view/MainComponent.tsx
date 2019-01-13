import * as React from "react";
import  { BrowserRouter as Router, Route } from 'react-router-dom';

export class MainComponent extends React.Component<{}, {}> {
    private username: string | null
    private password: string | null

    constructor(props: {}, context: {}) {
        super(props, context);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.login = this.login.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div>
                
                <Router>
                    {/* <Route path="/" component={Login} /> */}
                </Router>
            </div>
        )
    }

    private login(): void {
        this.props.Login!(this.username as string, this.password as string);
    }

    private onUsernameChange(e: React.ChangeEvent<HTMLInputElement>): void {
        this.username = e.currentTarget.value;
    }

    private onPasswordChange(e: React.ChangeEvent<HTMLInputElement>): void {
        this.password = e.currentTarget.value;
    }
}