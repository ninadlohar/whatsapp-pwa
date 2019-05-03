import React from "react";
import NewGroup from "./LeftSubComp/NewGroup";
import Profile from "./LeftSubComp/Profile";
import ArchievedChat from "./LeftSubComp/ArcheivedChat";
import StarredMessages from "./LeftSubComp/StarredMessages";
import Settings from "./LeftSubComp/Settings";
import NewChat from "./LeftSubComp/NewChat";

class HiddenComponentLeftSide extends React.Component {
  state = {
    baseClasses: ["row", "mx-0", "leftSlider__chatActiveBox"],
    hiddenLeftClass: ["DOMChangedLeftHiddenSide"]
  };

  toggleHandlerIn() {
    document.getElementById("leftSlider__chatActiveBox").style.transform =
      "translate(0%, 0)";
  }

  toggleHandlerOut = () => {
    document.getElementById("leftSlider__chatActiveBox").style.transform =
      "translate(-100%, 0)";
  };

  componentDidMount = () => {
    this.props.onRef(this);
  };

  render() {
    let classes = this.props.squeezeLayoutBoolean
      ? this.state.baseClasses.concat(this.state.hiddenLeftClass).join(" ")
      : this.state.baseClasses.join(" ");

    let makeNewGroup = (
      <NewGroup classes={classes} toggleHandlerOut={this.toggleHandlerOut} />
    );
    let profile = (
      <Profile classes={classes} toggleHandlerOut={this.toggleHandlerOut} />
    );
    let display1 = (
      <NewChat
        squeezeLayoutBoolean={this.props.squeezeLayoutBoolean}
        toggleHandlerOut={this.toggleHandlerOut}
      />
    );
    let archievedChat = (
      <ArchievedChat
        classes={classes}
        toggleHandlerOut={this.toggleHandlerOut}
      />
    );
    let starredMessages = (
      <StarredMessages
        classes={classes}
        toggleHandlerOut={this.toggleHandlerOut}
      />
    );
    let settingsC = (
      <Settings classes={classes} toggleHandlerOut={this.toggleHandlerOut} />
    );
    let display = null;
    switch (this.props.currentScreen) {
      case "newGroup":
        display = makeNewGroup;
        break;
      case "profile":
        display = profile;
        break;
      case "archievedChat":
        display = archievedChat;
        break;
      case "starredMessages":
        display = starredMessages;
        break;
      case "settings":
        display = settingsC;
        break;
      case "defaultView":
        display = display1;
        break;
      default:
        display = display1;
        break;
    }

    return display;
  }
}

export default HiddenComponentLeftSide;
