import { connect } from "react-redux"; 
import { IState } from "../../store";
import { IMainProps } from "./props/IMainProps";
import { MainComponent } from "./view/MainComponent";
export { MainReducer } from "./store/Reducer";
export { IMainState } from "./store/IState";
export { LOADING } from "./store/ActionTypes";
export { LoadingStatus } from "./store/LoadingStatus";
export { ILoadingAction } from "./store/IActions";

const mapStateToProps: (state: IState) => IMainProps = ({ Main }) => {
    return {
        status: Main && Main.status
    }
}

export default connect(mapStateToProps)(MainComponent);