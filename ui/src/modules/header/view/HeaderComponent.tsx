import Breadcrumb from "antd/lib/breadcrumb";
import Icon from "antd/lib/icon";
import * as React from "react";
import "../style/HeaderComponent.css";

export class HeaderComponent extends React.Component<{}, {}> {
	public render(): JSX.Element {
		return (
			<div className="pa-header">
				<div>
					<div className="pa-header-icon">
						<Icon style={{fontSize: '20px'}} type="menu-unfold" />
					</div>
					<div>
						<Breadcrumb>
    						<Breadcrumb.Item href="">
      							<Icon type="home" />
    						</Breadcrumb.Item>
    						<Breadcrumb.Item href="">
      							<Icon type="user" />
      							<span>Application List</span>
    						</Breadcrumb.Item>
    						<Breadcrumb.Item>
      							Application
    						</Breadcrumb.Item>
  						</Breadcrumb>
					</div>
				</div>
				<div>text</div>
			</div>
		)
	}
}