import { ILoadingAction } from "../store/IActions";
import { LoadingStatus } from "../store/LoadingStatus";

export interface IMainProps {
    status: LoadingStatus,
    dispatch?: (action: ILoadingAction) => void
}