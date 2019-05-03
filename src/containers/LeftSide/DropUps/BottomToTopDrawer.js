import React from "react";
import MobileNewChat from "./MobileNewChat";
import MobileNewGroup from "./MobileNewGroup";

class BottomToTopDrawer extends React.Component {
  render() {
    console.log(this.props);
    let display = null;
    switch (this.props.currentScreen2) {
      case "newChat":
        display = <MobileNewChat closeDrawer={this.props.closeDrawer} />;
        break;
      case "newGroup":
        display = <MobileNewGroup closeDrawer={this.props.closeDrawer} />;
    }
    // if (this.props.newChat) {

    // } else if (this.props.newGroup) {
    //   display = <MobileNewGroup closeDrawer={this.props.closeDrawer} />;
    // }
    return display;
  }
}

export default BottomToTopDrawer;
