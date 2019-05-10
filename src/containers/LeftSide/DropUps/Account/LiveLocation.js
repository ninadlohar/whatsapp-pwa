import React from "react";
import Auxillary from "../../../../hoc/Auxillary";

class LiveLocation extends React.Component {
  componentDidMount() {
    let header = document.getElementById("mobile__liveLocation__head");
    let infoSection = document.getElementById("mobile__liveLocation__section");
    this.props.componentWithoutSearchBar(header, infoSection);
  }
  render() {
    return (
      <Auxillary>
        <header
          className="col-12 fixed-top mobile__view__starred__Messages__Header py-2"
          id="mobile__liveLocation__head"
        >
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
                  <div className="mobile__newChat__selectedContact">Two-Step Verification</div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="col-12 px-0 leftSide__chat__section" id="mobile__liveLocation__section">
          <div className="row mx-0">
            <div className="col-12 px-0 leftSide__log__of__chats leftSlider__profile__section">
              <div className="row mx-0">
                <div className="p-3 w-100 deleteAccount__head__section">
                  <div className="d-flex justify-content-center">
                    <div className="archieved-chats-cirle">
                      <div className="h-100 d-flex justify-content-center align-items-center">
                        <img
                          src={require("../../../../assets/svg/finish.svg")}
                          alt="archieved-chat"
                          width="70"
                          height="70"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="no-archieved-chats text-center">You aren't sharing live location in any chats</div>
                </div>
                <div className="col-12 pt-2 liveLocation__text text-center">
                  Live location requires background location. You can manage this in your device settings
                </div>
              </div>
            </div>
          </div>
        </section>
      </Auxillary>
    );
  }
}

export default LiveLocation;
