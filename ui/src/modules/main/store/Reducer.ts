import { LOADING } from "./ActionTypes";
import { ILoadingAction } from "./IActions";
import { IMainState } from "./IState";

export const MainReducer: (state: IMainState, action: ILoadingAction) => IMainState = (state: IMainState, action: ILoadingAction) => {
    switch(action.type) {
        case LOADING: {
            return { ...state, status: action.status}
        }
    }
    return { ...state }
}