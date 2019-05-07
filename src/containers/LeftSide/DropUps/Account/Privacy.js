import React from "react";
import Auxilliary from "../../../../hoc/Auxillary";
import MobileDropdown from "../../../../ReusableUI-Components/MobileModal";
import Switch from "@material-ui/core/Switch";

class Privacy extends React.Component {
  state = {
    checkedA: false,
    privacy: false,
    profilePhoto: false,
    about: false
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

  render() {
    return (
      <Auxilliary>
        <header className="col-12 mobile__view__starred__Messages__Header py-2" id="head">
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
        <div className="col-12 py-3">
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
        <div className="col-12 py-3">
          <div className="w-100 privacy__header">
            <div className="mobile__settings__header__name">Groups</div>
          </div>
          <div className="w-100 ">
            <div className="privacy__child__text">Everyone</div>
          </div>
        </div>
        <div className="col-12 py-3">
          <div className="w-100 privacy__header">
            <div className="mobile__settings__header__name">Live Location</div>
          </div>
          <div className="w-100 ">
            <div className="privacy__child__text">None</div>
          </div>
        </div>
        <div className="col-12 py-3">
          <div className="w-100 privacy__header">
            <div className="mobile__settings__header__name">Blocked Contacts</div>
          </div>
          <div className="w-100 ">
            <div className="privacy__child__text">None</div>
          </div>
        </div>
        <MobileDropdown
          openModal={this.openPrivacyModal}
          open={this.state.privacy}
          closeModal={this.closePrivacyModal}
          h6="Last Seen"
        />
        <MobileDropdown
          openModal={this.openProfilePhotoModal}
          open={this.state.profilePhoto}
          closeModal={this.closeProfilePhotoModal}
          h6="Profile Photo"
        />
        <MobileDropdown
          openModal={this.openAboutModal}
          open={this.state.about}
          closeModal={this.closeAboutModal}
          h6="About"
        />
      </Auxilliary>
    );
  }
}

export default Privacy;
