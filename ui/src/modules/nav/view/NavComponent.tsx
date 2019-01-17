import * as React from "react";
import "../style/NavComponent.css";
import { ShrinkableComponent } from "./ShrinkableComponent";

export class NavComponent extends React.Component<{}, {}> {
	public render(): JSX.Element {
		return (
			<div className="pa-nav">
				<div className="pa-nav-title">
					<a href="#/">
						<img src={require("../../../assets/logo.png")} />
						PM2 Admin
					</a>
				</div>
				<ShrinkableComponent />
			</div>
		)
	}
}