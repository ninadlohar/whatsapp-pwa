import React from "react";
import Auxillary from "../../../../../../../../hoc/Auxillary";

class BlockedContact extends React.Component {
  componentDidMount() {
    let header = document.getElementById("mobile__blockedContact__head");
    let infoSection = document.getElementById("mobile__blockedContact__section");
    this.props.componentWithoutSearchBar(header, infoSection);
  }
  render() {
    return (
      <Auxillary>
        <header
          className="col-12 fixed-top mobile__view__starred__Messages__Header py-2"
          id="mobile__blockedContact__head"
        >
          <div className="row mx-0 w-100">
            <div className="col-12 px-0 py-1 d-flex">
              <div className="row mx-0 w-100">
                <div
                  className="mobileView__left__arrow d-flex align-items-center justify-content-start"
                  onClick={this.props.closeDrawer}
                >
                  <img
                    src={require("../../../../../../../../assets/svg/left.svg")}
                    width="24"
                    height="24"
                    alt="left-arrow"
                  />
                </div>
                <div className="mobileView__selectContactSection pl-3">
                  <div className="mobile__newChat__selectedContact">Blocked Contact</div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="col-12 px-0 leftSide__chat__section" id="mobile__blockedContact__section">
          <div className="row mx-0">
            <div className="col-12 px-0 leftSide__log__of__chats leftSlider__profile__section">
              <div className="row mx-0">
                <div className="p-3 w-100 deleteAccount__head__section">
                  <div className="d-flex justify-content-center">
                    <div className="archieved-chats-cirle">
                      <div className="h-100 d-flex justify-content-center align-items-center">
                        <img
                          src={require("../../../../../../../../assets/svg/block-user.svg")}
                          alt="blocked-user"
                          width="70"
                          height="70"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="no-archieved-chats text-center">No blocked contacts</div>

                  <div className="pt-2 text-center">
                    <strong>
                      Tap the icon to
                      <span className="px-2">
                        <i class="fas fa-user-times" />
                      </span>
                      select a contact to block
                    </strong>
                  </div>
                </div>
                <div className="col-12 pt-2 liveLocation__text text-center">
                  Blocked contacts will no longer be available to call you or send you messages.
                </div>
              </div>
            </div>
          </div>
        </section>
      </Auxillary>
    );
  }
}

export default BlockedContact;
