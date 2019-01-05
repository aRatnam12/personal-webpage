// @flow
import React from "react";
import navMap, { type NavItem } from "./nav-map";
import SideNav from "./side-nav";
import MainPanel from "./main-panel";
import "./App.css";

type State = {
  activeNavItem: NavItem
};

class App extends React.Component<*, State> {
  state = {
    activeNavItem: Object.keys(navMap)[0]
  };

  handleUpdateActiveNavItem = (navItem: NavItem): void => {
    this.setState({
      activeNavItem: navItem
    });
  };

  render() {
    const { activeNavItem } = this.state;
    return (
      <div className="App">
        <h1 className="App__welcome">Welcome to Ansh's webpage!</h1>
        <div className="App__main">
          <SideNav
            activeNavItem={activeNavItem}
            onUpdateActiveNavItem={this.handleUpdateActiveNavItem}
          />
          <MainPanel activeNavItem={activeNavItem} />
        </div>
      </div>
    );
  }
}

export default App;
