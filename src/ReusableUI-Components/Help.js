import React from "react";
import Auxillary from "../hoc/Auxillary";

class Help extends React.Component {
  componentDidMount() {
    console.log(this.props)
    let header = document.getElementById("mobile__help__head");
    let content = document.getElementById("mobile__help__section");
    this.props.componentWithoutSearchBar(header, content);
  }
  render() {
    return (
      <Auxillary>
        <header className="col-12 fixed-top mobile__view__starred__Messages__Header py-2" id="mobile__help__head">
          <div className="row mx-0 w-100">
            <div className="col-12 px-0 py-1 d-flex">
              <div className="row mx-0 w-100">
                <div
                  className="mobileView__left__arrow d-flex align-items-center justify-content-start"
                  onClick={this.props.closeDrawer}
                >
                  <img src={require("../assets/svg/left.svg")} width="24" height="24" alt="left-arrow" />
                </div>
                <div className="mobileView__selectContactSection pl-3">
                  <div className="mobile__newChat__selectedContact">Contacts Help</div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="col-12 privacy__text leftSide__chat__section" id="mobile__help__section">
          <div className="row">
            <div className="col-12 pt-2">
              If some of your friends don't appear in the contact list, we recommend the following steps:
            </div>
            <ul>
              <li>Make sure that your friend's phone number is in your address book</li>
              <li>Make sure that your friend is using WhatsApp Messenger.</li>
            </ul>
          </div>
        </section>
      </Auxillary>
    );
  }
}

export default Help;
