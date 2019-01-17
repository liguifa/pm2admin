import { IAction } from "../../../store";
import { LoadingStatus } from "./LoadingStatus";

export interface ILoadingAction extends IAction{
    status: LoadingStatus
}