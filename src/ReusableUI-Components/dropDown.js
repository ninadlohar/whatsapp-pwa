import React from "react";
import Auxillary from "../hoc/Auxillary";
import MainModel from "./Modal";

import { CSSTransition } from "react-transition-group";
import "../scss/dropdown/dropdown.scss";

class DropDown extends React.Component {
  state = {
    showMenu: false,
    showModal: false,
    clearMessages: false,
    exitGroup: false,
    squeezeLayoutBoolean: this.props.squeezeLayoutBoolean,
    selectedMessages: false,
    footerActive: false
  };

  showMenu = () => {
    // event.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  };
  closeMenu = () => {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener("click", this.closeMenu);
    });
  };

  toggle = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  };

  clearMessagesToggle = () => {
    this.setState(prevState => ({
      clearMessages: !prevState.clearMessages
    }));
  };

  exitGroupToggle = () => {
    this.setState(prevState => ({
      exitGroup: !prevState.exitGroup
    }));
  };

  selectMessages = () => {
    var li = document.getElementById("message1List").getElementsByTagName("li");
    for (let i = 0; i < li.length; i++) {
      var textnode = document.createElement("input");
      textnode.setAttribute("type", "checkbox");
      li[i].appendChild(textnode);
    }
    this.setState({ footerActive: !this.state.footerActive }, () => {
      document.getElementById("selectedMessagesFooter").style.transition = "0.3s";
      document.getElementById("selectedMessagesFooter").style.transform = "translate(0,0%)";
    });
  };

  slideInToggler = () => {
    let leftSide = document.getElementById("col-xl-3-5");
    let rightSide = document.getElementById("col-xl-6-5");
    this.setState({ squeezeLayoutBoolean: true }, () => {
      leftSide.classList.add("DOMChangedLeftSide", "DOMChangedLeftSide_P-1301");
      rightSide.classList.add("DOMChangedRightSide", "DOMChangedRightSide_P-1301");
      console.log("dropdown called");
    });
  };

  render() {
    let leftMenu = (
      <div className="left-dropdown">
        <div className="px-4 py-2" onClick={() => this.props.handleMenuClick("newGroup")}>
          New Group
        </div>
        <div className="px-4 py-2" onClick={() => this.props.handleMenuClick("profile")}>
          Profile
        </div>
        <div className="px-4 py-2" onClick={() => this.props.handleMenuClick("archievedChat")}>
          Archived
        </div>
        <div className="px-4 py-2" onClick={() => this.props.handleMenuClick("starredMessages")}>
          Starred
        </div>
        <div className="px-4 py-2" onClick={() => this.props.handleMenuClick("settings")}>
          Settings
        </div>
        <div className="px-4 py-2">Logout</div>
      </div>
    );
    let rightMenu = (
      <div className="right-dropdown">
        <div className="px-4 py-2" onClick={() => this.props.handleMenuClick1("CONTACT")}>
          Contact Info
        </div>
        <div className="px-4 py-2" onClick={this.selectMessages}>
          Selected Messages
        </div>
        <div className="px-4 py-2" onClick={this.toggle}>
          Mute
        </div>
        <div className="px-4 py-2" onClick={this.clearMessagesToggle}>
          Clear Messages
        </div>
        <div className="px-4 py-2" onClick={this.exitGroupToggle}>
          Delete Chat
        </div>
      </div>
    );

    let mobileViewDropDown = (
      <div className="right-dropdown">
        <div className="px-4 py-2" onClick={this.props.setNewGroupTrue}>
          New Group
        </div>
        <div className="px-4 py-2" onClick={this.props.setNewBroadcastTrue}>
          New Broadcast
        </div>
        <div className="px-4 py-2" onClick={this.props.setStarredMessagesTrue}>
          Starred Messages
        </div>
        <div className="px-4 py-2">Settings</div>
      </div>
    );
    let attachment = (
      <div className="main-attachment-dropdown">
        <div className="attachment-dropdown">
          <img src={require("../assets/images/gallery.png")} alt="gallery" className="attachment-icons" />
          <img src={require("../assets/images/camera.png")} alt="camera" className="attachment-icons" />
          <img src={require("../assets/images/file.jpg")} alt="file" className="attachment-icons" />
          <img src={require("../assets/images/user.png")} alt="user" className="attachment-icons" />
        </div>
      </div>
    );

    let dropDownMenu = null;
    if (this.props.leftDropdown) {
      dropDownMenu = this.props.leftDropdown && this.state.showMenu ? leftMenu : null;
    } else if (this.props.rightDropdown) {
      dropDownMenu = this.props.rightDropdown && this.state.showMenu ? rightMenu : null;
    } else if (this.props.attachment) {
      dropDownMenu = this.props.attachment && this.state.showMenu ? attachment : null;
    } else if (this.props.mobileViewDropDown) {
      dropDownMenu = this.props.mobileViewDropDown && this.state.showMenu ? mobileViewDropDown : null;
    }

    return (
      <Auxillary>
        <div
          className={this.state.showMenu ? "px-3 icon-active align-items-center justify-items-center d-flex" : "px-3 "}
        >
          <i className={this.props.mobile ? "" : "icon-color"}>
            <i className={this.props.classes} onClick={this.showMenu} />
          </i>
          <CSSTransition
            timeout={200}
            unmountOnExit
            in={this.state.showMenu}
            classNames="left-dropdown-main"
            onEnter={() => this.showMenu}
            onExited={() => this.closeMenu}
          >
            <Auxillary>{dropDownMenu}</Auxillary>
          </CSSTransition>
        </div>
        <MainModel isOpen={this.state.showModal} toggle={this.toggle}>
          <h5 className="mute__group__name">Mute "Group1"</h5>
          <div className="mute__radio__buttons">
            <div className="modal__mute__radio__buttons_p-6">
              <input type="radio" value="8 Hours" name="8 Hours" defaultChecked={true} />
              <span className="modal__mute__radio__buttons"> 8 Hours</span>
            </div>
            <div className="modal__mute__radio__buttons_p-6">
              <input type="radio" value="1 Week" name="1 Month" defaultChecked={false} />
              <span className="modal__mute__radio__buttons">1 Month </span>
            </div>
            <div className="modal__mute__radio__buttons_p-6">
              <input type="radio" value="1 Year" name="1 Year" defaultChecked={false} />
              <span className="modal__mute__radio__buttons"> 1 Year</span>
            </div>
          </div>
          <div className="modal__cancel__mute__button d-flex justify-content-end">
            <div className="modal__cancel" onClick={this.toggle}>
              CANCEL
            </div>
            <div className="modal__mute" onClick={this.toggle}>
              MUTE
            </div>
          </div>
        </MainModel>
        <MainModel isOpen={this.state.clearMessages} toggle={this.clearMessagesToggle}>
          <div className="clear__messages__title">Clear "Group 1"?</div>
          <div className="clear__messages__clear__starred__messages">
            <img src={require("../assets/svg/green-check-box.svg")} height="16" width="16" alt="checkbox-green" />
            <span className="pl-2 clear_messages__fontSize__14">Keep Starred Messages</span>
          </div>
          <div className="modal__cancel__mute__button d-flex justify-content-end">
            <div className="modal__cancel" onClick={this.clearMessagesToggle}>
              CANCEL
            </div>
            <div className="modal__mute" onClick={this.clearMessagesToggle}>
              CLEAR
            </div>
          </div>
        </MainModel>
        <MainModel isOpen={this.state.exitGroup} toggle={this.exitGroupToggle}>
          <div className="clear__messages__title">Exit Group "Group 1"?</div>
          <div className="modal__cancel__mute__button d-flex justify-content-end">
            <div className="modal__cancel" onClick={this.exitGroupToggle}>
              CANCEL
            </div>
            <div className="modal__mute" onClick={this.exitGroupToggle}>
              EXIT
            </div>
          </div>
        </MainModel>
      </Auxillary>
    );
  }
}

export default DropDown;
