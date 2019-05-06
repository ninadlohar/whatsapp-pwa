import React from "react";
import Auxilliary from "../../../../hoc/Auxillary";
// import MainBottomDrawer from "../BottomDrawer";
import Switch from "@material-ui/core/Switch";

class Notifications extends React.Component {
  state = {
    setSearchActive: false,
    checkedA: false
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  setSearchActiveFn = () => {
    this.setState({ setSearchActive: true }, () => {
      document.getElementById("col-xl-3-5").style.transform = "translate(0, -65px)";
    });
  };

  setSearchDeactiveFn = () => {
    this.setState({ setSearchActive: false }, () => {
      document.getElementById("col-xl-3-5").style.transform = "translate(0px, 0px)";
    });
  };

  render() {
    return (
      <Auxilliary>
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
                    <div className="mobile__newChat__selectedContact">Notifications</div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="col-12 px-0">
            <div className="row mx-0">
              <div className="col-12 py-3 d-flex mobile__settings__basicInfo__section">
                <div className="d-flex align-items-center w-100 pl-2">
                  <div className="custom__width85">
                    <div className="mobile__settings__header__name">Conversation Tones</div>
                    <div className="mobile__settings__header__status">
                      Play sounds for incoming and outgoing messages
                    </div>
                  </div>
                  <div>
                    <Switch checked={this.state.checkedA} onChange={this.handleChange("checkedA")} value="checkedA" />
                  </div>
                </div>
              </div>

              <div className="notifcations__header pb-1 pt-3 pl-4">Messages</div>

              <div className="col-12 py-3 d-flex">
                <div className="d-flex align-items-center w-100 pl-2">
                  <div className="custom__width85">
                    <div className="mobile__settings__header__name">Notification tone</div>
                    <div className="mobile__settings__header__status">Default(New Message)</div>
                  </div>
                </div>
              </div>

              <div className="col-12 py-3 d-flex">
                <div className="d-flex align-items-center w-100 pl-2">
                  <div className="custom__width85">
                    <div className="mobile__settings__header__name">Vibrate</div>
                    <div className="mobile__settings__header__status">Default</div>
                  </div>
                </div>
              </div>

              <div className="col-12 py-3 d-flex">
                <div className="d-flex align-items-center w-100 pl-2">
                  <div className="custom__width85">
                    <div className="mobile__settings__header__name">Popup Notification</div>
                    <div className="mobile__settings__header__status">No Popup</div>
                  </div>
                </div>
              </div>

              <div className="col-12 py-3 d-flex">
                <div className="d-flex align-items-center w-100 pl-2">
                  <div className="custom__width85">
                    <div className="mobile__settings__header__name">Light</div>
                    <div className="mobile__settings__header__status">White</div>
                  </div>
                </div>
              </div>

              <div className="col-12 py-3 d-flex mobile__settings__basicInfo__section">
                <div className="d-flex align-items-center w-100 pl-2">
                  <div className="custom__width85">
                    <div className="mobile__settings__header__name">Use high priority notifications</div>
                    <div className="mobile__settings__header__status">
                      Show previews of notifications at the top of the screen
                    </div>
                  </div>
                  <div>
                    <Switch checked={this.state.checkedA} onChange={this.handleChange("checkedA")} value="checkedA" />
                  </div>
                </div>
              </div>

              <div className="notifcations__header py-2 pl-4">Groups</div>

              <div className="col-12 py-3 d-flex">
                <div className="d-flex align-items-center w-100 pl-2">
                  <div className="custom__width85">
                    <div className="mobile__settings__header__name">Notification tone</div>
                    <div className="mobile__settings__header__status">Default(New Message)</div>
                  </div>
                </div>
              </div>

              <div className="col-12 py-3 d-flex">
                <div className="d-flex align-items-center w-100 pl-2">
                  <div className="custom__width85">
                    <div className="mobile__settings__header__name">Vibrate</div>
                    <div className="mobile__settings__header__status">Default</div>
                  </div>
                </div>
              </div>

              <div className="col-12 py-3 d-flex">
                <div className="d-flex align-items-center w-100 pl-2">
                  <div className="custom__width85">
                    <div className="mobile__settings__header__name">Popup Notification</div>
                    <div className="mobile__settings__header__status">No Popup</div>
                  </div>
                </div>
              </div>

              <div className="col-12 py-3 d-flex">
                <div className="d-flex align-items-center w-100 pl-2">
                  <div className="custom__width85">
                    <div className="mobile__settings__header__name">Light</div>
                    <div className="mobile__settings__header__status">White</div>
                  </div>
                </div>
              </div>

              <div className="col-12 py-3 d-flex mobile__settings__basicInfo__section">
                <div className="d-flex align-items-center w-100 pl-2">
                  <div className="custom__width85">
                    <div className="mobile__settings__header__name">Use high priority notifications</div>
                    <div className="mobile__settings__header__status">
                      Show previews of notifications at the top of the screen
                    </div>
                  </div>
                  <div>
                    <Switch checked={this.state.checkedA} onChange={this.handleChange("checkedA")} value="checkedA" />
                  </div>
                </div>
              </div>

              <div className="notifcations__header pb-1 pt-3 pl-4">Calls</div>

              <div className="col-12 py-3 d-flex">
                <div className="d-flex align-items-center w-100 pl-2">
                  <div className="custom__width85">
                    <div className="mobile__settings__header__name">Ringtone</div>
                    <div className="mobile__settings__header__status">Default(Festival)</div>
                  </div>
                </div>
              </div>

              <div className="col-12 py-3 d-flex">
                <div className="d-flex align-items-center w-100 pl-2">
                  <div className="custom__width85">
                    <div className="mobile__settings__header__name">Vibrate</div>
                    <div className="mobile__settings__header__status">Default</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <MainBottomDrawer onOpen={this.setAccountTrue} open={this.state.account}>
          <Account setAccountFalse={this.setAccountFalse} />
        </MainBottomDrawer>
        <MainBottomDrawer onOpen={this.setHelpTrue} open={this.state.Help}>
          <Help setHelpFalse={this.setHelpFalse} />
        </MainBottomDrawer> */}
      </Auxilliary>
    );
  }
}

export default Notifications;
