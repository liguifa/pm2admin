import { ILoginState } from "../modules/login";
import { IMainState } from "../modules/main";

export interface IState {
    Login: ILoginState,
    Main: IMainState
}