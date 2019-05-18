import React from "react";
import MainBottomDrawer from "../../../../BottomDrawer";
import Auxillary from "../../../../../../../hoc/Auxillary";
import ChangeNumberWithInputs from "./ChangeNumberWithInputs/ChangeNumberWithInputs";

class ChangeNumber extends React.Component {
  state = {
    changeNumberWithInputs: false
  };
  setChangeNumberWithInputsTrue = () => {
    this.setState({ changeNumberWithInputs: true });
  };
  setChangeNumberWithInputsFalse = () => {
    this.setState({ changeNumberWithInputs: false });
  };
  componentDidMount() {
    let header = document.getElementById("mobile__changeNumber__head");
    let infoSection = document.getElementById("mobile__changeNumber__section");
    this.props.componentWithoutSearchBar(header, infoSection);
  }
  render() {
    return (
      <Auxillary>
        <header
          className="col-12 fixed-top mobile__view__starred__Messages__Header py-2"
          id="mobile__changeNumber__head"
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
                  <div className="mobile__newChat__selectedContact">Change Number</div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div id="mobile__changeNumber__section">
          <section className="col-12 px-0 leftSide__chat__section">
            <div className="row mx-0">
              <div className="col-12 px-0  leftSlider__profile__section">
                <div className="row mx-0">
                  <div className="p-3 w-100">
                    <div className="d-flex justify-content-center">
                      <div className="archieved-chats-cirle">
                        <div className="h-100 d-flex justify-content-center align-items-center">
                          <img
                            src={require("../../../../../../../assets/svg/sim-card.svg")}
                            alt="sim-card"
                            width="70"
                            height="70"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mobile__settings__header__name">
                      Changing your phone number will migrate your account info, groups & settings
                    </div>
                    <div className="no-archieved-chats pt-2">
                      Before proceding please confirm that you are able to receive SMS or calls at your new number
                    </div>
                    <div className="no-archieved-chats pt-2">
                      If you have both a new phone & new number, first change your number on your old phone
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div
            className="enable-button-parent w-100 d-flex justify-content-center"
            onClick={this.setChangeNumberWithInputsTrue}
          >
            <div className="enable-button">
              <div className="d-flex justify-content-center">NEXT</div>
            </div>
          </div>
        </div>
        <MainBottomDrawer onOpen={this.setChangeNumberWithInputsTrue} open={this.state.changeNumberWithInputs}>
          <ChangeNumberWithInputs
            componentWithoutSearchBar={this.props.componentWithoutSearchBar}
            closeDrawer={this.setChangeNumberWithInputsFalse}
          />
        </MainBottomDrawer>
      </Auxillary>
    );
  }
}

export default ChangeNumber;
