import { LOADING } from "./ActionTypes";
import { ILoadingAction } from "./IActions";
import { LoadingStatus } from "./LoadingStatus";

export const LoadingAction: (status: LoadingStatus) => ILoadingAction = (status: LoadingStatus) => {
    return {
        status,
        type: LOADING
    }
}