// @flow
import React from "react";
import navMap, { type NavItem } from "../nav-map";
import "./main-panel.css";

type Props = {|
  activeNavItem: NavItem
|};

export default class MainPanel extends React.Component<Props> {
  render() {
    return (
      <div className="main-panel">
        <img
          className="main-panel__img"
          src={navMap[this.props.activeNavItem].imgSrc}
          alt={this.props.activeNavItem}
        />
        {navMap[this.props.activeNavItem].descriptions.map(description => (
          <p>{description}</p>
        ))}
      </div>
    );
  }
}
