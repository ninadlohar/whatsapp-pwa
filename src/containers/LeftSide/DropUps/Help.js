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
                    onClick={this.props.setHelpFalse}
                  >
                    <img src={require("../../../assets/svg/left.svg")} width="24" height="24" alt="left-arrow"/>
                  </div>
                  <div className="mobileView__selectContactSection pl-3">
                    <div className="mobile__newChat__selectedContact">Account</div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="col-12 px-0">
            <div className="row mx-0">
              <div className="col-12 py-3 d-flex">
                <div className="d-flex align-items-center pl-3 pr-4">
                  <img src={require("../../../assets/svg/key.svg")} alt="sender-images" height="18" width="18" />
                </div>
                <div className="d-flex align-items-center w-100">
                  <div>
                    <div className="mobile__settings__header__name">FAQ</div>
                  </div>
                </div>
              </div>
              <div className="col-12 py-3 d-flex">
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
                    <div className="mobile__settings__header__name">Contact us</div>
                  </div>
                </div>
              </div>
              <div className="col-12 py-3 d-flex">
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
                    <div className="mobile__settings__header__name">Terms and Privacy Policy</div>
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
