// @flow
import React from "react";
import navMap, { type NavItem } from "../nav-map";
import "./side-nav.css";

type Props = {|
  activeNavItem: NavItem,
  onUpdateActiveNavItem: (navItem: NavItem) => void
|};

export default class SideNav extends React.Component<Props> {
  render() {
    return (
      <div className="side-nav">
        <div className="side-nav__header">About</div>
        <ul className="side-nav__items">
          {Object.keys(navMap).map(navItem => (
            <li
              className={`side-nav__item${
                navItem === this.props.activeNavItem
                  ? " side-nav__item--active"
                  : ""
              }`}
              key={navItem}
              onClick={() => this.props.onUpdateActiveNavItem(navItem)}
            >
              {navItem}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
