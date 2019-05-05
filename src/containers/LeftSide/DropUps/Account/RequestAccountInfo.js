import React from "react";

class RequestAccountInfo extends React.Component {
  render() {
    return (
      <div>
        <header className="col-12 mobile__view__starred__Messages__Header py-2" id="head">
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
                  <div className="mobile__newChat__selectedContact">Request account info</div>
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
                        <img src={require("../../../../assets/svg/sim-card.svg")} alt="sim-card" width="70" height="70" />
                      </div>
                    </div>
                  </div>
                  <div className="mobile__settings__header__name">Create report of your WhatsApp account information and settings, which you can access or port to another app. This report does not include your messages.</div>
                  <div className="col-12 py-3 d-flex px-0">
                    <div className="d-flex align-items-center pr-3">
                      <img
                        src={require("../../../../assets/svg/clock.svg")}
                        alt="sender-images"
                        height="18"
                        width="18"
                      />
                    </div>
                    <div className="d-flex align-items-center w-100">
                      <div>
                        <div className="mobile__settings__header__name">Request senet</div>
                        <div className="mobile__settings__header__status">Ready by May 8, 2019</div>
                      </div>
                    </div>
                  </div>
                  <div className="no-archieved-chats pt-2">Your reports will be ready in about 3 days. You'll have a few weeks to download your report after it's available.</div>
                  <div className="no-archieved-chats pt-2">Your request will be cancelled if you make changes yo your account such as your number or deleting your account.</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
};

export default RequestAccountInfo;
