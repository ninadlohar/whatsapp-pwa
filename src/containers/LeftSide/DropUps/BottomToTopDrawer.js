import React from "react";
import MobileNewChat from "./MobileNewChat";
import MobileNewGroup from "./MobileNewGroup";

class BottomToTopDrawer extends React.Component {
  render() {
    let display = null;
    if (this.props.newChat) {
      display = <MobileNewChat closeDrawer={this.props.closeDrawer} />;
    } else if (this.props.newGroup) {
      display = <MobileNewGroup closeDrawer={this.props.closeDrawer} />;
    }
    return display;
  }
}

export default BottomToTopDrawer;
