import React from "react";
import SearchInputBox from "../../../../../../components/SearchInputBox/SearchInputBox";
import Auxillary from "../../../../../../hoc/Auxillary";
import TwoStepVerificationStep4 from "./TwoStepVerificationStep4";
import MainBottomDrawer from "../../../BottomDrawer";

class TwoStepVerificationStep3 extends React.Component {
  state = {
    TwoStepVerification4: false
  };
  setTwoStepVerifcation4True = () => {
    this.setState({ TwoStepVerification4: true });
  };
  setTwoStepVerification4False = () => {
    this.setState({ TwoStepVerification4: false });
  };
  componentDidMount() {
    let header = document.getElementById("mobile__twoStepVerification3__head");
    let infoSection = document.getElementById("mobile__twoStepVerification3__section");
    this.props.componentWithoutSearchBar(header, infoSection);
  }
  render() {
    return (
      <Auxillary>
        <header
          className="col-12 fixed-top mobile__view__starred__Messages__Header py-2"
          id="mobile__twoStepVerification3__head"
        >
          <div className="row mx-0 w-100">
            <div className="col-12 px-0 py-1 d-flex">
              <div className="row mx-0 w-100">
                <div
                  className="mobileView__left__arrow d-flex align-items-center justify-content-start"
                  onClick={this.props.closeDrawer}
                >
                  <img src={require("../../../../../../assets/svg/left.svg")} width="24" height="24" alt="left-arrow" />
                </div>
                <div className="mobileView__selectContactSection pl-3">
                  <div className="mobile__newChat__selectedContact">Two-Step Verification</div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div id="mobile__twoStepVerification3__section">
          <section className="col-12 px-0 leftSide__chat__section">
            <div className="row mx-0">
              <div className="col-12 px-0 leftSide__log__of__chats leftSlider__profile__section">
                <div className="row mx-0">
                  <div className="p-3 w-100">
                    <div className="no-archieved-chats text-center">
                      Add an email address to your account which will be used to reset your PIN if you forget it and
                      safeguard your account.
                    </div>
                    <div className="twoStepVerification__input">
                      <SearchInputBox searchBoxType="mobileTSVInput3" placeholder="Email" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div
            className="enable-button-parent w-100 d-flex justify-content-center"
            onClick={this.setTwoStepVerifcation4True}
          >
            <div className="enable-button">
              <div className="d-flex justify-content-center">NEXT</div>
            </div>
          </div>
        </div>

        <MainBottomDrawer onOpen={this.setTwoStepVerification4True} open={this.state.TwoStepVerification4}>
          <TwoStepVerificationStep4
            componentWithoutSearchBar={this.props.componentWithoutSearchBar}
            closeDrawer={this.setTwoStepVerification4False}
          />
        </MainBottomDrawer>
      </Auxillary>
    );
  }
}

export default TwoStepVerificationStep3;
