import React from "react";
import MobileModal from "../../../../../../../../ReusableUI-Components/MobileModal";
import Checkbox from "@material-ui/core/Checkbox";

class NotifcationInsideViewContact extends React.Component {
  state = {
    checkedA: false,
    checkedB: false,
    customNotifications: false,
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
  componentDidMount() {
    let header = document.getElementById("mobile__notifications__head");
    let content = document.getElementById("mobile__notifications__scetion");
    this.props.componentWithoutSearchBar(header, content);
  }

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

  render() {
    return (
      <div>
        <header
          className="col-12 fixed-top mobile__view__starred__Messages__Header py-2"
          id="mobile__notifications__head"
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
                  <div className="mobile__newChat__selectedContact">Notifications</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div
          className="media-section mobile__settings__basicInfo__section col-12 px-0"
          id="mobile__notifications__scetion"
        >
          <div className="row mx-0">
            <div className="col-12 d-flex align-items-center">
              <div className="w-100 privacy__header">
                <div className="mobile__settings__header__name">Use Custom Notifications</div>
              </div>
              <div className="switch">
                <Checkbox checked={this.state.checkedA} onChange={this.handleChange("checkedA")} value="checkedA" />
              </div>
            </div>
            <div className="notifcations__header pb-1 pt-3 pl-4">Message Notifications</div>

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
                  <div className="mobile__settings__header__status">
                    Show previews of notifications at the top of the screen
                  </div>
                </div>
                <div>
                  <Checkbox checked={this.state.checkedB} onChange={this.handleChange("checkedB")} value="checkedA" />
                </div>
              </div>
            </div>

            <div className="notifcations__header pb-1 pt-3 pl-4">Call Notifcations</div>

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
      </div>
    );
  }
}

export default NotifcationInsideViewContact;
