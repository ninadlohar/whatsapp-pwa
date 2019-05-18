import React from "react";
import Auxillary from "../../hoc/Auxillary";
import DesktopModal from "../Common__UI__Components/Utils/DesktopModal";
import MainBottomDrawer from "../MobileView/Drawers/BottomDrawer";
import { CSSTransition } from "react-transition-group";
import "../../scss/dropdown/dropdown.scss";
import Help from "../MobileView/Drawers/FullDrawers/Screens/NewChat/Help/Help";
import ViewContact from "../MobileView/Drawers/FullDrawers/Screens/UserChatting/ViewContact__or__GroupInfo/ViewContact";
import MobileMedia from "../MobileView/Drawers/FullDrawers/Screens/UserChatting/Media/Media";
import MobileModal from "./Utils/MobileModal";

class DropDown extends React.Component {
  state = {
    showMenu: false,
    showModal: false,
    clearMessages: false,
    exitGroup: false,
    squeezeLayoutBoolean: this.props.squeezeLayoutBoolean,
    selectedMessages: false,
    footerActive: false,
    openHelp: false,
    viewContact: false,
    mobileMedia: false,
    mute: false,
    muteOptions: [
      { key: "8 hours", value: "8 hours" },
      { key: "1 Week", value: "1 Week" },
      { key: "1 Year", value: "1 Year" }
    ]
  };

  showMenu = () => {
    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  };
  closeMenu = () => {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener("click", this.closeMenu);
    });
  };
  openMuteModal = () => {
    this.setState({ mute: true });
  };
  closeMuteModal = () => {
    this.setState({ mute: false });
  };

  openHelpTrue = () => {
    this.setState({ openHelp: true });
  };

  openHelpFalse = () => {
    this.setState({ openHelp: false });
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

  closeViewContact = () => {
    this.setState({ viewContact: false });
  };

  openViewContact = () => {
    this.setState({ viewContact: true });
  };

  closeMobileMedia = () => {
    this.setState({ mobileMedia: false });
  };

  openMobileMedia = () => {
    this.setState({ mobileMedia: true });
  };

  selectMessages = () => {
    var li = document.getElementById("message1List").getElementsByTagName("li");
    var checkBox = document.getElementsByName("checkboxMessage");

    for (let i = 0; i < li.length; i++) {
      var textnode = document.createElement("input");
      textnode.setAttribute("type", "checkbox");
      textnode.name = "checkboxMessage";
      textnode.id = "checkboxMessage" + i;
      li[i].appendChild(textnode);
    }

    for (let i = 0; i < checkBox.length; i++) {
      checkBox[i].addEventListener("click", () => {
        if (checkBox[i].checked) {
          document.getElementById("list" + i).style.backgroundColor = "rgba(0,191,195,0.08)";
        } else {
          document.getElementById("list" + i).style.backgroundColor = "transparent";
        }
      });
    }
    this.setState({ footerActive: !this.state.footerActive }, () => {
      document.getElementById("selectedMessagesFooter").style.transition = "0.1s";
      document.getElementById("selectedMessagesFooter").style.transform = "translate(0,0%)";
    });
  };

  slideInToggler = () => {
    let leftSide = document.getElementById("col-xl-3-5");
    let rightSide = document.getElementById("col-xl-6-5");
    this.setState({ squeezeLayoutBoolean: true }, () => {
      leftSide.classList.add("DOMChangedLeftSide", "DOMChangedLeftSide_P-1301");
      rightSide.classList.add("DOMChangedRightSide", "DOMChangedRightSide_P-1301");
    });
  };

  render() {
    let leftMenu = (
      <div className="left-dropdown">
        <div className="px-4 py-2 dropdown__text__color" onClick={() => this.props.handleMenuClick("newGroup")}>
          New Group
        </div>
        <div className="px-4 py-2 dropdown__text__color" onClick={() => this.props.handleMenuClick("profile")}>
          Profile
        </div>
        <div className="px-4 py-2 dropdown__text__color" onClick={() => this.props.handleMenuClick("archievedChat")}>
          Archived
        </div>
        <div className="px-4 py-2 dropdown__text__color" onClick={() => this.props.handleMenuClick("starredMessages")}>
          Starred
        </div>
        <div className="px-4 py-2 dropdown__text__color" onClick={() => this.props.handleMenuClick("settings")}>
          Settings
        </div>
        <div className="px-4 py-2 dropdown__text__color">Logout</div>
      </div>
    );
    let rightMenu = (
      <div className="right-dropdown">
        <div className="px-4 py-2 dropdown__text__color" onClick={() => this.props.handleMenuClick1("CONTACT")}>
          Contact Info
        </div>
        <div className="px-4 py-2 dropdown__text__color" onClick={this.selectMessages}>
          Selected Messages
        </div>
        <div className="px-4 py-2 dropdown__text__color" onClick={this.toggle}>
          Mute
        </div>
        <div className="px-4 py-2 dropdown__text__color" onClick={this.clearMessagesToggle}>
          Clear Messages
        </div>
        <div className="px-4 py-2 dropdown__text__color" onClick={this.exitGroupToggle}>
          Delete Chat
        </div>
      </div>
    );

    let mobileViewDropDown = (
      <div className="right-dropdown">
        <div className="px-4 py-2 dropdown__text__color" onClick={this.props.setNewGroupTrue}>
          New Group
        </div>
        <div className="px-4 py-2 dropdown__text__color" onClick={this.props.setNewBroadcastTrue}>
          New Broadcast
        </div>
        <div className="px-4 py-2 dropdown__text__color" onClick={this.props.setStarredMessagesTrue}>
          Starred Messages
        </div>
        <div className="px-4 py-2 dropdown__text__color" onClick={this.props.setSettingsTrue}>
          Settings
        </div>
      </div>
    );
    let attachment = (
      <div className="main-attachment-dropdown">
        <div className="attachment-dropdown">
          <img src={require("../../assets/images/gallery.png")} alt="gallery" className="attachment-icons" />
          <img src={require("../../assets/images/camera.png")} alt="camera" className="attachment-icons" />
          <img src={require("../../assets/images/file.jpg")} alt="file" className="attachment-icons" />
          <img src={require("../../assets/images/user.png")} alt="user" className="attachment-icons" />
        </div>
      </div>
    );

    let newChatDropdown = (
      <div className="mobile-right-dropdown">
        <div className="px-4 py-2 dropdown__text__color">Invite Friend</div>
        <div className="px-4 py-2 dropdown__text__color">Contacts</div>
        <div className="px-4 py-2 dropdown__text__color">Refresh</div>
        <div className="px-4 py-2 dropdown__text__color" onClick={this.openHelpTrue}>
          Help
        </div>
      </div>
    );

    let userChatDropdown = (
      <div className="mobile-right-dropdown">
        <div className="px-3 py-2 dropdown__text__color" onClick={this.openViewContact}>
          View Contact
        </div>
        <div className="px-3 py-2 dropdown__text__color" onClick={this.openMobileMedia}>
          Media
        </div>
        <div className="px-3 py-2 dropdown__text__color" onClick={this.props.setSearchActiveFn}>
          Search
        </div>
        <div className="px-3 py-2 dropdown__text__color" onClick={this.openMuteModal}>
          Mute Notifications
        </div>
        <div className="px-3 py-2 dropdown__text__color">Wallpaper</div>
        <div className="px-3 py-2 dropdown__text__color" onClick={this.openMoreDropdown}>
          More
        </div>
      </div>
    );

    let moreOptionsDropdown = (
      <div className="mobile-right-dropdown">
        <div className="px-3 py-2 dropdown__text__color">Report</div>
        <div className="px-3 py-2 dropdown__text__color">Block</div>
        <div className="px-3 py-2 dropdown__text__color">Clear Chat</div>
        <div className="px-3 py-2 dropdown__text__color">Export Chat</div>
        <div className="px-3 py-2 dropdown__text__color">Add Shortcut</div>
      </div>
    );

    let viewProfileDropdown = (
      <div className="mobile-right-dropdown">
        <div className="px-3 py-2 dropdown__text__color">Share</div>
        <div className="px-3 py-2 dropdown__text__color">Edit</div>
        <div className="px-3 py-2 dropdown__text__color">View in address book</div>
        <div className="px-3 py-2 dropdown__text__color">View security code</div>
      </div>
    );

    let callInfoDropdown = (
      <div className="mobile-right-dropdown">
        <div className="px-2 py-2">Remove from call log</div>
        <div className="px-2 py-2">Block</div>
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
    } else if (this.props.newChatDropdown) {
      dropDownMenu = this.props.newChatDropdown && this.state.showMenu ? newChatDropdown : null;
    } else if (this.props.userChatDropdown) {
      dropDownMenu = this.props.userChatDropdown && this.state.showMenu ? userChatDropdown : null;
    } else if (this.props.moreOptionsDropdown) {
      dropDownMenu = this.props.moreOptionsDropdown && this.state.showMenu ? moreOptionsDropdown : null;
    } else if (this.props.viewProfileDropdown) {
      dropDownMenu = this.props.viewProfileDropdown && this.state.showMenu ? viewProfileDropdown : null;
    } else if (this.props.callInfoDropdown) {
      dropDownMenu = this.props.callInfoDropdown && this.state.showMenu ? callInfoDropdown : null;
    }

    return (
      <Auxillary>
        <i className={this.props.mobile ? "" : "icon-color"}>
          <i
            className={this.props.classes + "  single-icons d-flex justify-content-center align-items-center"}
            onClick={this.showMenu}
          />
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
        <DesktopModal isOpen={this.state.showModal} toggle={this.toggle}>
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
        </DesktopModal>
        <DesktopModal isOpen={this.state.clearMessages} toggle={this.clearMessagesToggle}>
          <div className="clear__messages__title">Clear "Group 1"?</div>
          <div className="clear__messages__clear__starred__messages">
            <img src={require("../../assets/svg/green-check-box.svg")} height="16" width="16" alt="checkbox-green" />
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
        </DesktopModal>
        <DesktopModal isOpen={this.state.exitGroup} toggle={this.exitGroupToggle}>
          <div className="clear__messages__title">Exit Group "Group 1"?</div>
          <div className="modal__cancel__mute__button d-flex justify-content-end">
            <div className="modal__cancel" onClick={this.exitGroupToggle}>
              CANCEL
            </div>
            <div className="modal__mute" onClick={this.exitGroupToggle}>
              EXIT
            </div>
          </div>
        </DesktopModal>
        <MainBottomDrawer onOpen={this.openHelpTrue} open={this.state.openHelp}>
          <Help componentWithoutSearchBar={this.props.componentWithoutSearchBar} closeDrawer={this.openHelpFalse} />
        </MainBottomDrawer>
        <MainBottomDrawer onOpen={this.openViewContact} open={this.state.viewContact}>
          <ViewContact closeDrawer={this.closeViewContact} />
        </MainBottomDrawer>
        <MainBottomDrawer onOpen={this.openMobileMedia} open={this.state.mobileMedia}>
          <MobileMedia componentWithoutSearchBar={this.componentWithoutSearchBar} closeDrawer={this.closeMobileMedia} />
        </MainBottomDrawer>
        <MobileModal
          openModal={this.openMuteModal}
          open={this.state.mute}
          closeModal={this.closeMuteModal}
          key2={this.state.muteOptions}
        />
      </Auxillary>
    );
  }
}

export default DropDown;
