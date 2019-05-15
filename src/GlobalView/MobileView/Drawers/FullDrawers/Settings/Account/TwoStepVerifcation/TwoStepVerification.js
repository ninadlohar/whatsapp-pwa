import React from "react";
import Auxillary from "../../../../../../../hoc/Auxillary";
import TwoStepVerificationStep1 from "./TwoStepVerificationStep1/TwoStepVerificationStep1";
import MainBottomDrawer from "../../../../BottomDrawer";

class TwoStepVerification extends React.Component {
  state = {
    step1: false
  };
  setStep1True = () => {
    this.setState({ step1: true });
  };
  setStep1False = () => {
    this.setState({ step1: false });
  };
  componentDidMount() {
    let header = document.getElementById("mobile__twoStepVerification__head");
    let infoSection = document.getElementById("mobile__twoStepVerification__section");
    this.props.componentWithoutSearchBar(header, infoSection);
  }
  render() {
    return (
      <Auxillary>
        <header
          className="col-12 fixed-top mobile__view__starred__Messages__Header py-2"
          id="mobile__twoStepVerification__head"
        >
          <div className="row mx-0 w-100">
            <div className="col-12 px-0 py-1 d-flex">
              <div className="row mx-0 w-100">
                <div
                  className="mobileView__left__arrow d-flex align-items-center justify-content-start"
                  onClick={this.props.closeDrawer}
                >
                  <img
                    src={require("../../../../../../../assets/svg/left.svg")}
                    width="24"
                    height="24"
                    alt="left-arrow"
                  />
                </div>
                <div className="mobileView__selectContactSection pl-3">
                  <div className="mobile__newChat__selectedContact">Two-Step Verification</div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div id="mobile__twoStepVerification__section">
          <section className="col-12 px-0 leftSide__chat__section">
            <div className="row mx-0">
              <div className="col-12 px-0 leftSide__log__of__chats leftSlider__profile__section">
                <div className="row mx-0">
                  <div className="archievedChatSection w-100">
                    <div className="d-flex justify-content-center">
                      <div className="archieved-chats-cirle">
                        <div className="h-100 d-flex justify-content-center align-items-center">
                          <img
                            src={require("../../../../../../../assets/svg/archieved-chat.svg")}
                            alt="archieved-chat"
                            width="70"
                            height="70"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="no-archieved-chats text-center">
                      For added security, enable two-step verification, which will required a PIN when registering your
                      phone number with WhatsApp again
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="enable-button-parent w-100 d-flex justify-content-center" onClick={this.setStep1True}>
            <div className="enable-button">
              <div className="d-flex justify-content-center">ENABLE</div>
            </div>
          </div>
        </div>
        <MainBottomDrawer onOpen={this.setStep1True} open={this.state.step1}>
          <TwoStepVerificationStep1
            componentWithoutSearchBar={this.props.componentWithoutSearchBar}
            closeDrawer={this.setStep1False}
          />
        </MainBottomDrawer>
      </Auxillary>
    );
  }
}

export default TwoStepVerification;
