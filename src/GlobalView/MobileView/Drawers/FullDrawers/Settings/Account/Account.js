import React from "react";
import Auxilliary from "../../../../../../hoc/Auxillary";
import MainBottomDrawer from "../../../BottomDrawer/BottomDrawer";
import Privacy from "./Privacy/Privacy";
import Security from "./Security/Security";
import TwoStepVerification from "./TwoStepVerifcation/TwoStepVerification";
import ChangeNumber from "./ChangeNumber/ChangeNumber";
import RequestAccountInfo from "./RequestAccountInfo/RequestAccountInfo";
import DeleteMyAccount from "./DeleteMyAccount/DeleteMyAccount";

class Account extends React.Component {
  state = {
    setSearchActive: false,
    privacy: false,
    Security: false,
    TwoStepVerification: false,
    ChangeNumber: false,
    RequestAccountInfo: false,
    deleteAccount: false
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

  setPrivacyTrue = () => {
    this.setState({ privacy: true });
  };

  setPrivacyFalse = () => {
    this.setState({ privacy: false });
  };

  setSecurityTrue = () => {
    this.setState({ Security: true });
  };

  setSecurityFalse = () => {
    this.setState({ Security: false });
  };
  setTwoStepVerificationTrue = () => {
    this.setState({ TwoStepVerification: true });
  };

  setTwoStepVerificationFalse = () => {
    this.setState({ TwoStepVerification: false });
  };

  setChangeNumberTrue = () => {
    this.setState({ ChangeNumber: true });
  };

  setChangeNumberFalse = () => {
    this.setState({ ChangeNumber: false });
  };

  setRequestAccountInfoTrue = () => {
    this.setState({ RequestAccountInfo: true });
  };

  setRequestAccountInfoFalse = () => {
    this.setState({ RequestAccountInfo: false });
  };

  deleteAccountTrue = () => {
    this.setState({ deleteAccount: true });
  };

  deleteAccountFalse = () => {
    this.setState({ deleteAccount: false });
  };

  componentDidMount() {
    let header = document.getElementById("mobile__account__head");
    let infoSection = document.getElementById("mobile__account__section");
    this.props.componentWithoutSearchBar(header, infoSection);
  }

  render() {
    return (
      <Auxilliary>
        <div>
          <header className="col-12 fixed-top mobile__view__starred__Messages__Header py-2" id="mobile__account__head">
            <div className="row mx-0 w-100">
              <div className="col-12 px-0 py-1 d-flex">
                <div className="row mx-0 w-100">
                  <div
                    className="mobileView__left__arrow d-flex align-items-center justify-content-start"
                    onClick={this.props.setAccountFalse}
                  >
                    <img src={require("../../../../../../assets/svg/left.svg")} width="24" height="24" alt="left-arrow" />
                  </div>
                  <div className="mobileView__selectContactSection pl-3">
                    <div className="mobile__newChat__selectedContact">Account</div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="col-12 px-0" id="mobile__account__section">
            <div className="row mx-0">
              <div className="col-12 py-3 d-flex" onClick={this.setPrivacyTrue}>
                <div className="d-flex align-items-center pl-3 pr-4">
                  <img src={require("../../../../../../assets/svg/locked-padlock.svg")} alt="sender-images" height="18" width="18" />
                </div>
                <div className="d-flex align-items-center w-100">
                  <div>
                    <div className="mobile__settings__header__name">Privacy</div>
                  </div>
                </div>
              </div>
              <div className="col-12 py-3 d-flex" onClick={this.setSecurityTrue}>
                <div className="d-flex align-items-center pl-3 pr-4">
                  <img src={require("../../../../../../assets/svg/antivirus.svg")} alt="message-ballon" height="18" width="18" />
                </div>
                <div className="d-flex align-items-center w-100">
                  <div>
                    <div className="mobile__settings__header__name">Security</div>
                  </div>
                </div>
              </div>
              <div className="col-12 py-3 d-flex" onClick={this.setTwoStepVerificationTrue}>
                <div className="d-flex align-items-center pl-3 pr-4">
                  <img src={require("../../../../../../assets/svg/more-dots.svg")} alt="notification-bell" height="18" width="18" />
                </div>
                <div className="d-flex align-items-center w-100">
                  <div>
                    <div className="mobile__settings__header__name">Two-step verification</div>
                  </div>
                </div>
              </div>
              <div className="col-12 py-3 d-flex" onClick={this.setChangeNumberTrue}>
                <div className="d-flex align-items-center pl-3 pr-4">
                  <img src={require("../../../../../../assets/svg/smartphone.svg")} alt="sender-images" height="18" width="18" />
                </div>
                <div className="d-flex align-items-center w-100">
                  <div>
                    <div className="mobile__settings__header__name">Change Number</div>
                  </div>
                </div>
              </div>
              <div className="col-12 py-3 d-flex" onClick={this.setRequestAccountInfoTrue}>
                <div className="d-flex align-items-center pl-3 pr-4">
                  <img src={require("../../../../../../assets/svg/text-file.svg")} alt="sender-images" height="18" width="18" />
                </div>
                <div className="d-flex align-items-center w-100">
                  <div>
                    <div className="mobile__settings__header__name">Request Account Info</div>
                  </div>
                </div>
              </div>
              <div className="col-12 py-3 d-flex" onClick={this.deleteAccountTrue}>
                <div className="d-flex align-items-center pl-3 pr-4">
                  <img src={require("../../../../../../assets/svg/delete-bin2.svg")} alt="sender-images" height="18" width="18" />
                </div>
                <div className="d-flex align-items-center w-100">
                  <div>
                    <div className="mobile__settings__header__name">Delete My Account</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MainBottomDrawer onOpen={this.setPrivacyTrue} open={this.state.privacy}>
          <Privacy componentWithoutSearchBar={this.props.componentWithoutSearchBar} closeDrawer={this.setPrivacyFalse} />
        </MainBottomDrawer>
        <MainBottomDrawer onOpen={this.setSecurityTrue} open={this.state.Security}>
          <Security componentWithoutSearchBar={this.props.componentWithoutSearchBar} closeDrawer={this.setSecurityFalse} />
        </MainBottomDrawer>
        <MainBottomDrawer onOpen={this.setTwoStepVerificationTrue} open={this.state.TwoStepVerification}>
          <TwoStepVerification
            componentWithoutSearchBar={this.props.componentWithoutSearchBar}
            closeDrawer={this.setTwoStepVerificationFalse}
          />
        </MainBottomDrawer>
        <MainBottomDrawer onOpen={this.setChangeNumberTrue} open={this.state.ChangeNumber}>
          <ChangeNumber componentWithoutSearchBar={this.props.componentWithoutSearchBar} closeDrawer={this.setChangeNumberFalse} />
        </MainBottomDrawer>
        <MainBottomDrawer onOpen={this.setRequestAccountInfoTrue} open={this.state.RequestAccountInfo}>
          <RequestAccountInfo
            componentWithoutSearchBar={this.props.componentWithoutSearchBar}
            closeDrawer={this.setRequestAccountInfoFalse}
          />
        </MainBottomDrawer>
        <MainBottomDrawer onOpen={this.deleteAccountTrue} open={this.state.deleteAccount}>
          <DeleteMyAccount componentWithoutSearchBar={this.props.componentWithoutSearchBar} closeDrawer={this.deleteAccountFalse} />
        </MainBottomDrawer>
      </Auxilliary>
    );
  }
}

export default Account;
