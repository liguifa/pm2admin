import { IAppState } from "../common";
import { ILoginState } from "../modules/login";

export interface IState {
    Login: ILoginState,
    App: IAppState
}