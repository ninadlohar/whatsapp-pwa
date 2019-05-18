import React from "react";
import Auxilliary from "../../../../../../hoc/Auxillary";
import Switch from "@material-ui/core/Switch";
import MobileModal from "../../../../../Common__UI__Components/Utils/MobileModal/MobileModal";

class Notifications extends React.Component {
  state = {
    vibrate: false,
    popup: false,
    color: false,
    colorOptions: [
      { key: "None", value: "None" },
      { key: "White", value: "White" },
      { key: "Yellow", value: "Yellow" },
      { key: "Red", value: "Red" },
      { key: "Blue", value: "Blue" }
    ],
    popupOptions: [
      { key: "No popup", value: "No popup" },
      { key: `Only when screen "on"`, value: `Only when screen "on"` },
      { key: `Only when screen "off"`, value: `Only when screen "off"` },
      { key: "Always show popup", value: "Always show popup" }
    ],
    vibrateOptions: [
      { key: "Off", value: "Off" },
      { key: "Default", value: "Default" },
      { key: "Short", value: "Short" },
      { key: "Long", value: "Long" }
    ]
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  openVibrateModal = () => {
    this.setState({ vibrate: true });
  };
  closeVibrateModal = () => {
    this.setState({ vibrate: false });
  };
  openPopupmodal = () => {
    this.setState({ popup: true });
  };
  closePopupModal = () => {
    this.setState({ popup: false });
  };
  openColorModal = () => {
    this.setState({ color: true });
  };
  closeColorModal = () => {
    this.setState({ color: false });
  };

  componentDidMount() {
    let header = document.getElementById("mobile__notification__head");
    let infoSection = document.getElementById("mobile__notification__section");
    this.props.componentWithoutSearchBar(header, infoSection);
  }

  render() {
    return (
      <Auxilliary>
        <header className="col-12 fixed-top mobile__view__starred__Messages__Header py-2" id="mobile__notification__head">
          <div className="row mx-0 w-100">
            <div className="col-12 px-0 py-1 d-flex">
              <div className="row mx-0 w-100">
                <div className="mobileView__left__arrow d-flex align-items-center justify-content-start" onClick={this.props.closeDrawer}>
                  <img src={require("../../../../../../assets/svg/left.svg")} width="24" height="24" alt="left-arrow" />
                </div>
                <div className="mobileView__selectContactSection pl-3">
                  <div className="mobile__newChat__selectedContact">Notifications</div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div id="mobile__notification__section">
          <div className="col-12 px-0">
            <div className="row mx-0">
              <div className="col-12 py-3 d-flex mobile__settings__basicInfo__section">
                <div className="d-flex align-items-center w-100 pl-2">
                  <div className="custom__width85">
                    <div className="mobile__settings__header__name">Conversation Tones</div>
                    <div className="mobile__settings__header__status">Play sounds for incoming and outgoing messages</div>
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

              <div className="col-12 py-3 d-flex" onClick={this.openVibrateModal}>
                <div className="d-flex align-items-center w-100 pl-2">
                  <div className="custom__width85">
                    <div className="mobile__settings__header__name">Vibrate</div>
                    <div className="mobile__settings__header__status">Default</div>
                  </div>
                </div>
              </div>

              <div className="col-12 py-3 d-flex" onClick={this.openPopupmodal}>
                <div className="d-flex align-items-center w-100 pl-2">
                  <div className="custom__width85">
                    <div className="mobile__settings__header__name">Popup Notification</div>
                    <div className="mobile__settings__header__status">No Popup</div>
                  </div>
                </div>
              </div>

              <div className="col-12 py-3 d-flex" onClick={this.openColorModal}>
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
                    <div className="mobile__settings__header__status">Show previews of notifications at the top of the screen</div>
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

              <div className="col-12 py-3 d-flex" onClick={this.openVibrateModal}>
                <div className="d-flex align-items-center w-100 pl-2">
                  <div className="custom__width85">
                    <div className="mobile__settings__header__name">Vibrate</div>
                    <div className="mobile__settings__header__status">Default</div>
                  </div>
                </div>
              </div>

              <div className="col-12 py-3 d-flex" onClick={this.openPopupmodal}>
                <div className="d-flex align-items-center w-100 pl-2">
                  <div className="custom__width85">
                    <div className="mobile__settings__header__name">Popup Notification</div>
                    <div className="mobile__settings__header__status">No Popup</div>
                  </div>
                </div>
              </div>

              <div className="col-12 py-3 d-flex" onClick={this.openColorModal}>
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
                    <div className="mobile__settings__header__status">Show previews of notifications at the top of the screen</div>
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

              <div className="col-12 py-3 d-flex" onClick={this.openVibrateModal}>
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
        <MobileModal
          openModal={this.openVibrateModal}
          open={this.state.vibrate}
          closeModal={this.closeVibrateModal}
          h6="Vibrate"
          key2={this.state.vibrateOptions}
          value="Default"
        />
        <MobileModal
          openModal={this.openPopupmodal}
          open={this.state.popup}
          closeModal={this.closePopupModal}
          h6="Popup notification"
          key2={this.state.popupOptions}
          value="No popup"
        />
        <MobileModal
          openModal={this.openColorModal}
          open={this.state.color}
          closeModal={this.closeColorModal}
          h6="Light"
          key2={this.state.colorOptions}
          value="White"
        />
      </Auxilliary>
    );
  }
}

export default Notifications;
