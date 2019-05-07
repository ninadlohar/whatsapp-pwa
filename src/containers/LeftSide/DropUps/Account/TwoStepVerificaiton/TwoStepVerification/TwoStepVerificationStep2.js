import React from "react";
import SearchInputBox from "../../../../../../components/SearchInputBox/SearchInputBox";
import Auxillary from "../../../../../../hoc/Auxillary";
import TwoStepVerificationStep3 from "./TwoStepVerificationStep3";
import MainBottomDrawer from "../../../BottomDrawer";

class TwoStepVerificationStep2 extends React.Component {
  state = {
    TwoStepVerification3: false
  };
  setTwoStepVerifcation3True = () => {
    this.setState({ TwoStepVerification3: true });
  };
  setTwoStepVerification3False = () => {
    this.setState({ TwoStepVerification3: false });
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
                    <div className="no-archieved-chats text-center">Confirm your PIN:</div>
                    <div className="twoStepVerification__input">
                      <SearchInputBox searchBoxType="mobileTSVInput" placeholder="* * * * * *" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div
            className="enable-button-parent w-100 d-flex justify-content-center"
            onClick={this.setTwoStepVerifcation3True}
          >
            <div className="enable-button">
              <div className="d-flex justify-content-center">NEXT</div>
            </div>
          </div>
        </div>
        <MainBottomDrawer onOpen={this.setTwoStepVerifcation3True} open={this.state.TwoStepVerification3}>
          <TwoStepVerificationStep3 closeDrawer={this.setTwoStepVerification3False} />
        </MainBottomDrawer>
      </Auxillary>
    );
  }
}

export default TwoStepVerificationStep2;