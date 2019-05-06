import React from "react";
import Auxillary from "../../../../../../hoc/Auxillary";
// import Account from "../../Account";
// import MainBottomDrawer from "../../../BottomDrawer";

class TSVFinallyDone extends React.Component {
  state = {
    step2: false
  };
  setStep2True = () => {
    this.setState({ step2: true });
  };
  setStep2False = () => {
    this.setState({ step2: false });
  };
  render() {
    return (
      <Auxillary>
        <div>
          <header className="col-12 mobile__view__starred__Messages__Header py-2" id="head">
            <div className="row mx-0 w-100">
              <div className="col-12 px-0 py-1 d-flex">
                <div className="row mx-0 w-100">
                  <div
                    className="mobileView__left__arrow d-flex align-items-center justify-content-start"
                    onClick={this.props.closeDrawer}
                  >
                    <img
                      src={require("../../../../../../assets/svg/left.svg")}
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
          <section className="col-12 px-0 leftSide__chat__section">
            <div className="row mx-0">
              <div className="col-12 px-0 leftSide__log__of__chats leftSlider__profile__section">
                <div className="row mx-0">
                  <div className="p-3 w-100">
                    <div className="d-flex justify-content-center">
                      <div className="archieved-chats-cirle">
                        <div className="h-100 d-flex justify-content-center align-items-center">
                          <img
                            src={require("../../../../../../assets/svg/archieved-chat.svg")}
                            alt="archieved-chat"
                            width="70"
                            height="70"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="no-archieved-chats text-center">
                      Two Step Verification is enabled. You;llneed to enter your PIN when registering your phone number
                      with WhatsApp again
                    </div>
                  </div>
                  <div className="col-12 px-0">
                    <div className="row mx-0">
                      <div className="col-12 py-3 d-flex">
                        <div className="d-flex align-items-center pl-3 pr-4">
                          <img
                            src={require("../../../../../../assets/svg/cancel-button.svg")}
                            alt="sender-images"
                            height="18"
                            width="18"
                          />
                        </div>
                        <div className="d-flex align-items-center w-100">
                          <div>
                            <div className="mobile__settings__header__name">Disable</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 py-3 d-flex">
                        <div className="d-flex align-items-center pl-3 pr-4">
                          <img
                            src={require("../../../../../../assets/svg/more-dots.svg")}
                            alt="sender-images"
                            height="18"
                            width="18"
                          />
                        </div>
                        <div className="d-flex align-items-center w-100">
                          <div>
                            <div className="mobile__settings__header__name">Change Pin</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 py-3 d-flex">
                        <div className="d-flex align-items-center pl-3 pr-4">
                          <img
                            src={require("../../../../../../assets/svg/envelope.svg")}
                            alt="sender-images"
                            height="18"
                            width="18"
                          />
                        </div>
                        <div className="d-flex align-items-center w-100">
                          <div>
                            <div className="mobile__settings__header__name">Change Email Address</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="enable-button-parent w-100 d-flex justify-content-center" onClick={this.setStep2True}>
            <div className="enable-button">
              <div className="d-flex justify-content-center">GO BACK TO ACCOUNT</div>
            </div>
          </div>
        </div>
        {/* <MainBottomDrawer onOpen={this.setStep2True} open={this.state.step2}>
          <Account closeDrawer={this.setStep2False} />
        </MainBottomDrawer> */}
      </Auxillary>
    );
  }
}

export default TSVFinallyDone;
