import React from "react";
import SearchInputBox from "../../../../../../../Common__UI__Components/Utils/SearchInputBox/SearchInputBox";
import Auxillary from "../../../../../../../../hoc/Auxillary";
import MainBottomDrawer from "../../../../../BottomDrawer";
import TwoStepVerificationStep2 from "../TwoStepVerificationStep2/TwoStepVerificationStep2";

class TwoStepVerificationStep1 extends React.Component {
  state = {
    TwoStepVerification2: false
  };
  setTwoStepVerifcation2True = () => {
    this.setState({ TwoStepVerification2: true });
  };
  setTwoStepVerification2False = () => {
    this.setState({ TwoStepVerification2: false });
  };
  componentDidMount() {
    let header = document.getElementById("mobile__twoStepVerification1__head");
    let infoSection = document.getElementById("mobile__twoStepVerification1__section");
    this.props.componentWithoutSearchBar(header, infoSection);
  }
  render() {
    return (
      <Auxillary>
        <div>
          <header className="col-12 fixed-top mobile__view__starred__Messages__Header py-2" id="mobile__twoStepVerification1__head">
            <div className="row mx-0 w-100">
              <div className="col-12 px-0 py-1 d-flex">
                <div className="row mx-0 w-100">
                  <div className="mobileView__left__arrow d-flex align-items-center justify-content-start" onClick={this.props.closeDrawer}>
                    <img src={require("../../../../../../../../assets/svg/left.svg")} width="24" height="24" alt="left-arrow" />
                  </div>
                  <div className="mobileView__selectContactSection pl-3">
                    <div className="mobile__newChat__selectedContact">Two-Step Verification</div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div id="mobile__twoStepVerification1__section">
            <section className="col-12 px-0 leftSide__chat__section">
              <div className="row mx-0">
                <div className="col-12 px-0 leftSide__log__of__chats leftSlider__profile__section">
                  <div className="row mx-0">
                    <div className="p-3 w-100">
                      <div className="no-archieved-chats text-center">
                        Enter a 6-Digit PIN which you'll be asked for when you register your phone number with WhatsApp
                      </div>
                      <div className="twoStepVerification__input">
                        <SearchInputBox searchBoxType="mobileTSVInput" placeholder="* * * * * *" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="enable-button-parent w-100 d-flex justify-content-center" onClick={this.setTwoStepVerifcation2True}>
              <div className="enable-button">
                <div className="d-flex justify-content-center">NEXT</div>
              </div>
            </div>
          </div>
        </div>
        <MainBottomDrawer onOpen={this.setTwoStepVerifcation2True} open={this.state.TwoStepVerification2}>
          <TwoStepVerificationStep2
            componentWithoutSearchBar={this.props.componentWithoutSearchBar}
            closeDrawer={this.setTwoStepVerification2False}
          />
        </MainBottomDrawer>
      </Auxillary>
    );
  }
}

export default TwoStepVerificationStep1;
