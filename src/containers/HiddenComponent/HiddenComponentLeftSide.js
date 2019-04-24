import React from "react";
import NewGroup from "./LeftSubComp/NewGroup";
import Profile from "./LeftSubComp/Profile";
import DefaultHiddenLeftChat from "./LeftSubComp/DefaultHiddenChat";
import ArchievedChat from "./LeftSubComp/ArcheivedChat";
import StarredMessages from "./LeftSubComp/StarredMessages";

class HiddenComponentLeftSide extends React.Component {
  state = {
    baseClasses: ["row", "mx-0", "newChatActiveBox"],
    hiddenLeftClass: ["DOMChangedLeftHiddenSide"]
  };

  toggleHandlerIn() {
    this.setState({ setLeftHiddenComponentVisible: true }, () => {
      document.getElementById("message-logs").style.display = "none";
      setTimeout(() => {
        document.getElementById("newChatActiveBox").style.transform = "translate(0%, 0)";
      }, 100);
    });
  }

  toggleHandlerOut = () => {
    document.getElementById("newChatActiveBox").style.transform = "translate(-100%, 0)";
    setTimeout(() => {
      document.getElementById("message-logs").style.display = "block";
      this.setState({
        setLeftHiddenComponentVisible: false
      });
    }, 200);
  };

  componentDidMount = () => {
    this.props.onRef(this);
  };

  render() {
    let appendClasses = this.props.setLeftHiddenComponentVisible
      ? this.state.baseClasses.concat(this.state.hiddenLeftClass).join(" ")
      : this.state.baseClasses.join(" ");

    let classes = this.props.squeezeLayoutBoolean ? appendClasses : this.state.baseClasses.join(" ");

    let makeNewGroup = <NewGroup classes={classes} toggleHandlerOut={this.toggleHandlerOut} />;
    let profile = <Profile classes={classes} toggleHandlerOut={this.toggleHandlerOut} />;
    let display = (
      <DefaultHiddenLeftChat
        setLeftHiddenComponentVisible={this.props.setLeftHiddenComponentVisible}
        squeezeLayoutBoolean={this.props.squeezeLayoutBoolean}
        toggleHandlerOut={this.toggleHandlerOut}
      />
    );
    let archievedChat = <ArchievedChat classes={classes} toggleHandlerOut={this.toggleHandlerOut} />;
    let starredMessages = <StarredMessages classes={classes} toggleHandlerOut={this.toggleHandlerOut} />;

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
    }

    return display;
  }
}

export default HiddenComponentLeftSide;
