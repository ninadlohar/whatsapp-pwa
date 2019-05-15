import React from "react";
import Auxilliary from "../../../../../../../hoc/Auxillary";
import Switch from "@material-ui/core/Switch";

class Privacy extends React.Component {
  state = {
    checkedA: false
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  componentDidMount() {
    let header = document.getElementById("mobile__security__head");
    let infoSection = document.getElementById("mobile__security__section");
    this.props.componentWithoutSearchBar(header, infoSection);
  }
  render() {
    return (
      <Auxilliary>
        <header className="col-12 fixed-top mobile__view__starred__Messages__Header py-2" id="mobile__security__head">
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
                  <div className="mobile__newChat__selectedContact">Security</div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section id="mobile__security__section">
          <div className="p-3 w-100 mobile__security__logo">
            <div className="d-flex justify-content-center align-items-center">
              <div className="archieved-chats-cirle">
                <div className="h-100 d-flex justify-content-center align-items-center">
                  <img
                    src={require("../../../../../../../assets/svg/security.svg")}
                    alt="archieved-chat"
                    width="85"
                    height="85"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 py-3">
            <div className="">
              Your messages and calls are secured with end-to-end encryption, which means WhatsApp and third parties
              can't read or listen to them.<span className="privacy">Read More</span>
            </div>
          </div>

          <div className="col-12 py-3 d-flex">
            <div>
              <div className="w-100 privacy__header">
                <div className="mobile__settings__header__name">Show security notifications</div>
              </div>
              <div className="w-100 ">
                <div className="privacy__child__text">
                  Turn on the settings to receive notifcations when a contact's security code has changed. Your messages
                  and calls are encrypted regardless of setting.
                </div>
              </div>
            </div>
            <div className="switch">
              <Switch checked={this.state.checkedA} onChange={this.handleChange("checkedA")} value="checkedA" />
            </div>
          </div>
        </section>
      </Auxilliary>
    );
  }
}

export default Privacy;
