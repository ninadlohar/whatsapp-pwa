import React from "react";
import Auxilliary from "../../../../hoc/Auxillary";
import MobileModal from "../../../../ReusableUI-Components/MobileModal";
import Switch from "@material-ui/core/Switch";
import BottomDrawer from "../BottomDrawer";
import Groups from "./Groups";
import StatusPrivacy from "./StatusPrivacy";
import LiveLocation from "./LiveLocation";
import BlockedContact from "./BlockedContact";

class Privacy extends React.Component {
  state = {
    checkedA: false,
    privacy: false,
    profilePhoto: false,
    about: false,
    statusPrivacy: false,
    group: false,
    liveLocation: false,
    blockedUser: false,
    key2: [
      { key: "Everyone", value: "Everyone" },
      { key: "My Contacts", value: "My Contacts" },
      { key: "Nobody", value: "Nobody" }
    ]
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  openPrivacyModal = () => {
    this.setState({ privacy: true });
  };
  closePrivacyModal = () => {
    this.setState({ privacy: false });
  };

  openProfilePhotoModal = () => {
    this.setState({ profilePhoto: true });
  };
  closeProfilePhotoModal = () => {
    this.setState({ profilePhoto: false });
  };

  openAboutModal = () => {
    this.setState({ about: true });
  };
  closeAboutModal = () => {
    this.setState({ about: false });
  };

  openStatusPrivacy = () => {
    this.setState({ statusPrivacy: true });
  };
  closeStatusPrivacy = () => {
    this.setState({ statusPrivacy: false });
  };
  openGroup = () => {
    this.setState({ group: true });
  };
  closeGroup = () => {
    this.setState({ group: false });
  };

  openLiveLocation = () => {
    this.setState({ liveLocation: true });
  };
  closeLiveLocation = () => {
    this.setState({ liveLocation: false });
  };

  openBlockedUser = () => {
    this.setState({ blockedUser: true });
  };

  closeBlockedUser = () => {
    this.setState({ blockedUser: false });
  };

  componentDidMount() {
    let header = document.getElementById("mobile__privacy__head");
    let infoSection = document.getElementById("mobile__privacy__section");
    this.props.componentWithoutSearchBar(header, infoSection);
  }

  render() {
    return (
      <Auxilliary>
        <header className="col-12 fixed-top mobile__view__starred__Messages__Header py-2" id="mobile__privacy__head">
          <div className="row mx-0 w-100">
            <div className="col-12 px-0 py-1 d-flex">
              <div className="row mx-0 w-100">
                <div
                  className="mobileView__left__arrow d-flex align-items-center justify-content-start"
                  onClick={this.props.closeDrawer}
                >
                  <img src={require("../../../../assets/svg/left.svg")} width="24" height="24" alt="left-arrow" />
                </div>
                <div className="mobileView__selectContactSection pl-3">
                  <div className="mobile__newChat__selectedContact">Privacy</div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div id="mobile__privacy__section">
          <div className="col-12 py-3">
            <div className="privacy">Who can see my personal Info</div>
            <div className="privacy__text">
              If you don't share your Last Seen, you won't be able to see other people's Last Seen
            </div>
          </div>
          <div className="col-12 py-3" onClick={this.openPrivacyModal}>
            <div className="w-100 privacy__header">
              <div className="mobile__settings__header__name">Last Seen</div>
            </div>
            <div className="w-100 ">
              <div className="privacy__child__text">Everyone</div>
            </div>
          </div>
          <div className="col-12 py-3" onClick={this.openProfilePhotoModal}>
            <div className="w-100 privacy__header">
              <div className="mobile__settings__header__name">Profile Photo</div>
            </div>
            <div className="w-100 ">
              <div className="privacy__child__text">Everyone</div>
            </div>
          </div>
          <div className="col-12 py-3" onClick={this.openAboutModal}>
            <div className="w-100 privacy__header">
              <div className="mobile__settings__header__name">About</div>
            </div>
            <div className="w-100 ">
              <div className="privacy__child__text">Everyone</div>
            </div>
          </div>
          <div className="col-12 py-3" onClick={this.openStatusPrivacy}>
            <div className="w-100 privacy__header">
              <div className="mobile__settings__header__name">Status</div>
            </div>
            <div className="w-100 ">
              <div className="privacy__child__text">My Contacts</div>
            </div>
          </div>

          {/** */}
          <div className="col-12 py-3 d-flex">
            <div>
              <div className="w-100 privacy__header">
                <div className="mobile__settings__header__name">Read Receipts</div>
              </div>
              <div className="w-100 ">
                <div className="privacy__child__text">
                  If turned off, you won't send or receive Read receipts. Read receipts are always sent for group chats
                </div>
              </div>
            </div>
            <div className="switch">
              <Switch checked={this.state.checkedA} onChange={this.handleChange("checkedA")} value="checkedA" />
            </div>
          </div>
          {/** */}
          <div className="col-12 py-3" onClick={this.openGroup}>
            <div className="w-100 privacy__header">
              <div className="mobile__settings__header__name">Groups</div>
            </div>
            <div className="w-100 ">
              <div className="privacy__child__text">Everyone</div>
            </div>
          </div>
          <div className="col-12 py-3" onClick={this.openLiveLocation}>
            <div className="w-100 privacy__header">
              <div className="mobile__settings__header__name">Live Location</div>
            </div>
            <div className="w-100 ">
              <div className="privacy__child__text">None</div>
            </div>
          </div>
          <div className="col-12 py-3" onClick={this.openBlockedUser}>
            <div className="w-100 privacy__header">
              <div className="mobile__settings__header__name">Blocked Contacts</div>
            </div>
            <div className="w-100 ">
              <div className="privacy__child__text">None</div>
            </div>
          </div>
          <BottomDrawer onOpen={this.openStatusPrivacy} open={this.state.statusPrivacy}>
            <StatusPrivacy
              componentWithoutSearchBar={this.props.componentWithoutSearchBar}
              closeDrawer={this.closeStatusPrivacy}
            />
          </BottomDrawer>
          <BottomDrawer onOpen={this.openGroup} open={this.state.group}>
            <Groups componentWithoutSearchBar={this.props.componentWithoutSearchBar} closeDrawer={this.closeGroup} />
          </BottomDrawer>
          <BottomDrawer onOpen={this.openLiveLocation} open={this.state.liveLocation}>
            <LiveLocation
              componentWithoutSearchBar={this.props.componentWithoutSearchBar}
              closeDrawer={this.closeLiveLocation}
            />
          </BottomDrawer>
          <BottomDrawer onOpen={this.openBlockedUser} open={this.state.blockedUser}>
            <BlockedContact
              componentWithoutSearchBar={this.props.componentWithoutSearchBar}
              closeDrawer={this.closeBlockedUser}
            />
          </BottomDrawer>
          <MobileModal
            openModal={this.openPrivacyModal}
            open={this.state.privacy}
            closeModal={this.closePrivacyModal}
            h6="Last Seen"
            key2={this.state.key2}
            value="Everyone"
          />
          <MobileModal
            openModal={this.openProfilePhotoModal}
            open={this.state.profilePhoto}
            closeModal={this.closeProfilePhotoModal}
            h6="Profile Photo"
            key2={this.state.key2}
            value="Everyone"
          />
          <MobileModal
            openModal={this.openAboutModal}
            open={this.state.about}
            closeModal={this.closeAboutModal}
            h6="About"
            key2={this.state.key2}
            value="Everyone"
          />
        </div>
      </Auxilliary>
    );
  }
}

export default Privacy;
