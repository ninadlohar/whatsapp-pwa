import React from "react";
import Auxilliary from "../../../hoc/Auxillary";
import MainBottomDrawer from "./BottomDrawer";
import Account from "./Account/Account";
import Help from "./Help";
import Chats from "./Chats/Chats";
import Notifications from "./Notifications/Notifications";
import DataAndStorage from "./DataAndStorage/DataAndStorage";
import MobileProfile from "./MobileProfile";
import SmallDrawer from "../../../ReusableUI-Components/SmallDrawer";
import InviteFriends from "../SmallDrawers/InviteFriends";

class MobileStarredMessages extends React.Component {
  state = {
    setSearchActive: false,
    account: false,
    Help: false,
    chats: false,
    dataAndStorage: false,
    notifications: false,
    mobileProfile: false,
    socialMediaLinks: false
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

  setDataAndStorageTrue = () => {
    this.setState({ dataAndStorage: true });
  };

  setDataAndStorageFalse = () => {
    this.setState({ dataAndStorage: false });
  };
  openMobileProfile = () => {
    this.setState({ mobileProfile: true });
  };
  closeMobileProfile = () => {
    this.setState({ mobileProfile: false });
  };
  openSocialMediaLinks = () => {
    this.setState({ socialMediaLinks: true });
  };
  closeSocialMediaLinks = () => {
    this.setState({ socialMediaLinks: false });
  };
  resize = () => {
    window.addEventListener("resize", () => {
      let header = document.getElementById("mobile__settings__head");
      let infoSection = document.getElementById("mobile__settings__section");
      this.props.componentWithoutSearchBar(header, infoSection);
    });
  };
  componentDidMount() {
    let header = document.getElementById("mobile__settings__head");
    let infoSection = document.getElementById("mobile__settings__section");
    this.props.componentWithoutSearchBar(header, infoSection);
    this.resize();
  }

  render() {
    return (
      <Auxilliary>
        <header className="col-12 fixed-top mobile__view__starred__Messages__Header py-2" id="mobile__settings__head">
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
        <div className="col-12 px-0" id="mobile__settings__section">
          <div className="row mx-0">
            <div className="col-12 py-3 d-flex mobile__settings__basicInfo__section" onClick={this.openMobileProfile}>
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
                  src={require("../../../assets/svg/message-ballon2.svg")}
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
                  src={require("../../../assets/svg/notification2.svg")}
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
            <div className="col-12 py-3 d-flex" onClick={this.setDataAndStorageTrue}>
              <div className="d-flex align-items-center pl-3 pr-4">
                <img
                  src={require("../../../assets/svg/charging-circle2.svg")}
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
            <div className="col-12 py-3 d-flex" onClick={this.setHelpTrue}>
              <div className="d-flex align-items-center pl-3 pr-4">
                <img src={require("../../../assets/svg/information.svg")} alt="information" height="18" width="18" />
              </div>
              <div className="d-flex align-items-center w-100">
                <div>
                  <div className="mobile__settings__header__name">Help</div>
                  <div className="mobile__settings__header__status">FAQ, contact us, privacy policy</div>
                </div>
              </div>
            </div>
            <div className="col-12 py-3 d-flex" onClick={this.openSocialMediaLinks}>
              <div className="d-flex align-items-center pl-3 pr-4">
                <img src={require("../../../assets/svg/user2.svg")} alt="two-users" height="18" width="18" />
              </div>
              <div className="d-flex align-items-center w-100">
                <div>
                  <div className="mobile__settings__header__name">Invite a friend</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MainBottomDrawer onOpen={this.openMobileProfile} open={this.state.mobileProfile}>
          <MobileProfile
            componentWithoutSearchBar={this.props.componentWithoutSearchBar}
            closeDrawer={this.closeMobileProfile}
          />
        </MainBottomDrawer>
        <MainBottomDrawer onOpen={this.setAccountTrue} open={this.state.account}>
          <Account
            componentWithoutSearchBar={this.props.componentWithoutSearchBar}
            setAccountFalse={this.setAccountFalse}
          />
        </MainBottomDrawer>
        <MainBottomDrawer onOpen={this.setHelpTrue} open={this.state.Help}>
          <Help componentWithoutSearchBar={this.props.componentWithoutSearchBar} setHelpFalse={this.setHelpFalse} />
        </MainBottomDrawer>
        <MainBottomDrawer onOpen={this.setChatTrue} open={this.state.chats}>
          <Chats componentWithoutSearchBar={this.props.componentWithoutSearchBar} closeDrawer={this.setChatFalse} />
        </MainBottomDrawer>
        <MainBottomDrawer onOpen={this.setNotificationsTrue} open={this.state.notifications}>
          <Notifications
            componentWithoutSearchBar={this.props.componentWithoutSearchBar}
            closeDrawer={this.setNotificationsFalse}
          />
        </MainBottomDrawer>
        <SmallDrawer onOpen={this.openSocialMediaLinks} open={this.state.socialMediaLinks}>
          <InviteFriends closeDrawer={this.closeSocialMediaLinks} />
        </SmallDrawer>
        <MainBottomDrawer onOpen={this.setDataAndStorageTrue} open={this.state.dataAndStorage}>
          <DataAndStorage
            componentWithoutSearchBar={this.props.componentWithoutSearchBar}
            closeDrawer={this.setDataAndStorageFalse}
          />
        </MainBottomDrawer>
      </Auxilliary>
    );
  }
}

export default MobileStarredMessages;
