import React from "react";
import Auxilliary from "../../../hoc/Auxillary";
import MainBottomDrawer from "./BottomDrawer";
import Account from "./Account/Account";
import Help from "./Help";
import Chats from "./Chats/Chats";
import Notifications from "./Notifications/Notifications";

class MobileStarredMessages extends React.Component {
  state = {
    setSearchActive: false,
    account: false,
    Help: false,
    chats: false,
    notifications: false
  };
  setSearchActiveFn = () => {
    this.setState({ setSearchActive: true }, () => {
      document.getElementById("col-xl-3-5").style.transform = "translate(0, -65px)";
    });
  };

  setSearchDeactiveFn = () => {
    this.setState({ setSearchActive: false }, () => {
      document.getElementById("col-xl-3-5").style.transform = "translate(0px, 0px)";
    });
  };

  setAccountTrue = () => {
    this.setState({ account: true });
  };

  setAccountFalse = () => {
    this.setState({ account: false });
  };

  setHelpTrue = () => {
    this.setState({ Help: true });
  };

  setHelpFalse = () => {
    this.setState({ Help: false });
  };

  setChatTrue = () => {
    this.setState({ chats: true });
  };

  setChatFalse = () => {
    this.setState({ chats: false });
  };

  setNotificationsTrue = () => {
    this.setState({ notifications: true });
  };

  setNotificationsFalse = () => {
    this.setState({ notifications: false });
  };

  render() {
    return (
      <Auxilliary>
        <div>
          <header className="col-12 mobile__view__starred__Messages__Header py-2" id="head">
            <div className="row mx-0 w-100">
              <div className="col-12 px-0 py-1 d-flex">
                <div className="row mx-0 w-100">
                  <div
                    className="mobileView__left__arrow d-flex align-items-center justify-content-start"
                    onClick={this.props.closeSettingsDrawer}
                  >
                    <img src={require("../../../assets/svg/left.svg")} width="24" height="24" alt="left-arrow" />
                  </div>
                  <div className="mobileView__selectContactSection pl-3">
                    <div className="mobile__newChat__selectedContact">Settings</div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="col-12 px-0">
            <div className="row mx-0">
              <div className="col-12 py-3 d-flex mobile__settings__basicInfo__section">
                <div className="d-flex align-items-center pr-4">
                  <img
                    src={require("../../../assets/images/user-image.jpg")}
                    alt="sender-images"
                    className="mobile__basicUserInfo__image"
                  />
                </div>
                <div className="d-flex align-items-center w-100">
                  <div>
                    <div className="mobile__settings__header__name">
                      <strong>Ninad</strong>
                    </div>
                    <div className="mobile__settings__header__status">Coding</div>
                  </div>
                </div>
              </div>
              {/*** */}
              <div className="col-12 py-3 d-flex" onClick={this.setAccountTrue}>
                <div className="d-flex align-items-center pl-3 pr-4">
                  <img src={require("../../../assets/svg/key.svg")} alt="sender-images" height="18" width="18" />
                </div>
                <div className="d-flex align-items-center w-100">
                  <div>
                    <div className="mobile__settings__header__name">Account</div>
                    <div className="mobile__settings__header__status">Privacy, security, change number</div>
                  </div>
                </div>
              </div>
              <div className="col-12 py-3 d-flex" onClick={this.setChatTrue}>
                <div className="d-flex align-items-center pl-3 pr-4">
                  <img
                    src={require("../../../assets/svg/message-ballon.svg")}
                    alt="sender-images"
                    height="18"
                    width="18"
                  />
                </div>
                <div className="d-flex align-items-center w-100">
                  <div>
                    <div className="mobile__settings__header__name">Chats</div>
                    <div className="mobile__settings__header__status">Backup, History, Wallpaper</div>
                  </div>
                </div>
              </div>
              <div className="col-12 py-3 d-flex" onClick={this.setNotificationsTrue}>
                <div className="d-flex align-items-center pl-3 pr-4">
                  <img
                    src={require("../../../assets/svg/notification.svg")}
                    alt="sender-images"
                    height="18"
                    width="18"
                  />
                </div>
                <div className="d-flex align-items-center w-100">
                  <div>
                    <div className="mobile__settings__header__name">Notifications</div>
                    <div className="mobile__settings__header__status">Message, group & call tones</div>
                  </div>
                </div>
              </div>
              <div className="col-12 py-3 d-flex">
                <div className="d-flex align-items-center pl-3 pr-4">
                  <img
                    src={require("../../../assets/svg/charging-circle.svg")}
                    alt="sender-images"
                    height="18"
                    width="18"
                  />
                </div>
                <div className="d-flex align-items-center w-100">
                  <div>
                    <div className="mobile__settings__header__name">Data and storage usage</div>
                    <div className="mobile__settings__header__status">Network usage, auto-download</div>
                  </div>
                </div>
              </div>
              <div className="col-12 py-3 d-flex">
                <div className="d-flex align-items-center pl-3 pr-4">
                  <img
                    src={require("../../../assets/svg/information.svg")}
                    alt="sender-images"
                    height="18"
                    width="18"
                  />
                </div>
                <div className="d-flex align-items-center w-100" onClick={this.setHelpTrue}>
                  <div>
                    <div className="mobile__settings__header__name">Help</div>
                    <div className="mobile__settings__header__status">FAQ, contact us, privacy policy</div>
                  </div>
                </div>
              </div>
              <div className="col-12 py-3 d-flex">
                <div className="d-flex align-items-center pl-3 pr-4">
                  <img src={require("../../../assets/svg/user2.svg")} alt="sender-images" height="18" width="18" />
                </div>
                <div className="d-flex align-items-center w-100">
                  <div>
                    <div className="mobile__settings__header__name">Invite a friend</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MainBottomDrawer onOpen={this.setAccountTrue} open={this.state.account}>
          <Account setAccountFalse={this.setAccountFalse} />
        </MainBottomDrawer>
        <MainBottomDrawer onOpen={this.setHelpTrue} open={this.state.Help}>
          <Help setHelpFalse={this.setHelpFalse} />
        </MainBottomDrawer>
        <MainBottomDrawer onOpen={this.setChatTrue} open={this.state.chats}>
          <Chats closeDrawer={this.setChatFalse} />
        </MainBottomDrawer>
        <MainBottomDrawer onOpen={this.setNotificationsTrue} open={this.state.notifications}>
          <Notifications closeDrawer={this.setNotificationsFalse} />
        </MainBottomDrawer>
      </Auxilliary>
    );
  }
}

export default MobileStarredMessages;
