import React from "react";
import Auxilliary from "../../../hoc/Auxillary";
import MainBottomDrawer from "./BottomDrawer";

class Help extends React.Component {
  state = {
    setSearchActive: false
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

  componentDidMount() {
    let header = document.getElementById("info__section__header").clientHeight;
    let infoSection = document.getElementById("info-section");
    infoSection.style.marginTop = header + "px";
    infoSection.style.overflow = "scroll";
  }

  render() {
    return (
      <Auxilliary>
        <div>
          <header className="col-12 fixed-top mobile__view__starred__Messages__Header py-2" id="info__section__header">
            <div className="row mx-0 w-100">
              <div className="col-12 px-0 py-1 d-flex">
                <div className="row mx-0 w-100">
                  <div
                    className="mobileView__left__arrow d-flex align-items-center justify-content-start"
                    onClick={this.props.setHelpFalse}
                  >
                    <img src={require("../../../assets/svg/left.svg")} width="24" height="24" alt="left-arrow" />
                  </div>
                  <div className="mobileView__selectContactSection pl-3">
                    <div className="mobile__newChat__selectedContact">Account</div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="col-12 px-0" id="info-section">
            <div className="row mx-0">
              <div className="col-12 py-3 d-flex">
                <div className="d-flex align-items-center pl-3 pr-4">
                  <img src={require("../../../assets/svg/information.svg")} alt="information" height="18" width="18" />
                </div>
                <div className="d-flex align-items-center w-100">
                  <div>
                    <div className="mobile__settings__header__name">FAQ</div>
                  </div>
                </div>
              </div>
              <div className="col-12 py-3 d-flex">
                <div className="d-flex align-items-center pl-3 pr-4">
                  <img src={require("../../../assets/svg/user2.svg")} alt="two-users" height="18" width="18" />
                </div>
                <div className="d-flex align-items-center w-100">
                  <div>
                    <div className="mobile__settings__header__name">Contact us</div>
                  </div>
                </div>
              </div>
              <div className="col-12 py-3 d-flex">
                <div className="d-flex align-items-center pl-3 pr-4">
                  <img src={require("../../../assets/svg/text-file.svg")} alt="text-file" height="18" width="18" />
                </div>
                <div className="d-flex align-items-center w-100">
                  <div>
                    <div className="mobile__settings__header__name">Terms and Privacy Policy</div>
                  </div>
                </div>
              </div>
              <div className="col-12 py-3 d-flex">
                <div className="d-flex align-items-center pl-3 pr-4">
                  <img
                    src={require("../../../assets/svg/information-circular-button-symbol.svg")}
                    alt="sender-images"
                    height="18"
                    width="18"
                  />
                </div>
                <div className="d-flex align-items-center w-100">
                  <div>
                    <div className="mobile__settings__header__name">App Info</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MainBottomDrawer onOpen={this.setNewChatTrue} open={this.state.newChat}>
          {/* <MobileNewChat closeDrawer={this.setNewChatFalse} /> */}
        </MainBottomDrawer>
      </Auxilliary>
    );
  }
}

export default Help;
