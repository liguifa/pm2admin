import { IAction } from "../store";

export enum LoadingStatus {
    SUCCESS,
    ERROR,
    LOADING
}

export interface ILoadingAction extends IAction{
    status: LoadingStatus
}

export const LOADING = "LOADING";

export const LoadingAction: (status: LoadingStatus) => ILoadingAction = (status: LoadingStatus) => {
    return {
        status,
        type: LOADING
    }
}

export interface IAppState {
    status: LoadingStatus
}

export const AppReducer: (state: IAppState, action: ILoadingAction) => IAppState = (state: IAppState, action: ILoadingAction) => {
    switch(action.type) {
        case LOADING: {
            return { ...state, status: action.status}
        }
    }
    return { ...state }
}