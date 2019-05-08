/** clearC for checkboxes and key2 for radio buttons */

import React from "react";
import Auxilliary from "../../../../hoc/Auxillary";
import MobileModal from "../../../../ReusableUI-Components/MobileModal";
import Switch from "@material-ui/core/Switch";
import { timingSafeEqual } from "crypto";

class DataAndStorage extends React.Component {
  state = {
    setSearchActive: false,
    whenUsingMobileData: false,
    whenConnectedToWifi: false,
    whenRoaming: false,
    whenUsingMobileDataOptions: [
      { key: "Photos", value: true, message: "Photos" },
      { key: "Audio", value: false, message: "Audio" },
      { key: "Video", value: false, message: "Video" },
      { key: "Documents", value: false, message: "Documents" }
    ],
    whenConnectedToWifiOptions: [
      { key: "Photos", value: true, message: "Photos" },
      { key: "Audio", value: true, message: "Audio" },
      { key: "Video", value: true, message: "Video" },
      { key: "Documents", value: true, message: "Documents" }
    ],
    whenRoamingOptions: [
      { key: "Photos", value: true, message: "Photos" },
      { key: "Audio", value: true, message: "Audio" },
      { key: "Video", value: true, message: "Video" },
      { key: "Documents", value: true, message: "Documents" }
    ]
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  openWhenUsingMobileData = () => {
    this.setState({ whenUsingMobileData: true });
  };
  closeWhenUsingMobileData = () => {
    this.setState({ whenUsingMobileData: false });
  };
  openWhenConnectedToWifi = () => {
    this.setState({ whenConnectedToWifi: true });
  };
  closeWhenConnectedToWifi = () => {
    this.setState({ whenConnectedToWifi: false });
  };
  openWhenRoaming = () => {
    this.setState({ whenRoaming: true });
  };
  closeWhenRoaming = () => {
    this.setState({ whenRoaming: false });
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
                    <div className="mobile__newChat__selectedContact">Data and Storage usage</div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="col-12 px-0">
            <div className="row mx-0">
              <div className="notifcations__header pb-1 pt-3 pl-4">Usage</div>

              <div className="col-12 py-3 d-flex">
                <div className="d-flex align-items-center w-100 pl-2">
                  <div className="custom__width85">
                    <div className="mobile__settings__header__name">Network Usage</div>
                    <div className="mobile__settings__header__status">6.6 GB sent. 7.2 GB received</div>
                  </div>
                </div>
              </div>

              <div className="col-12 py-3 d-flex mobile__settings__basicInfo__section">
                <div className="d-flex align-items-center w-100 pl-2">
                  <div className="custom__width85">
                    <div className="mobile__settings__header__name">Storage</div>
                    <div className="mobile__settings__header__status">706.0 MB</div>
                  </div>
                </div>
              </div>

              <div className="notifcations__header pb-1 pt-3 pl-4">Media auto-download</div>

              <div className="col-12 py-3 d-flex" onClick={this.openWhenUsingMobileData}>
                <div className="d-flex align-items-center w-100 pl-2">
                  <div className="custom__width85">
                    <div className="mobile__settings__header__name">When using mobile data</div>
                    <div className="mobile__settings__header__status">Photos</div>
                  </div>
                </div>
              </div>

              <div className="col-12 py-3 d-flex" onClick={this.openWhenConnectedToWifi}>
                <div className="d-flex align-items-center w-100 pl-2">
                  <div className="custom__width85">
                    <div className="mobile__settings__header__name">When connected on Wi-Fi</div>
                    <div className="mobile__settings__header__status">All Media</div>
                  </div>
                </div>
              </div>

              <div className="col-12 py-3 d-flex mobile__settings__basicInfo__section" onClick={this.openWhenRoaming}>
                <div className="d-flex align-items-center w-100 pl-2">
                  <div className="custom__width85">
                    <div className="mobile__settings__header__name">When roaming</div>
                    <div className="mobile__settings__header__status">No Media</div>
                  </div>
                  <div />
                </div>
              </div>

              <div className="notifcations__header py-2 pl-4">Call Settings</div>

              <div className="col-12 py-3 d-flex">
                <div className="d-flex align-items-center w-100 pl-2">
                  <div className="custom__width85">
                    <div className="mobile__settings__header__name">Low data usage</div>
                    <div className="mobile__settings__header__status">Reduce the data used in call</div>
                  </div>
                  <div>
                    <Switch checked={this.state.checkedA} onChange={this.handleChange("checkedA")} value="checkedA" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MobileModal
          openModal={this.openWhenUsingMobileData}
          open={this.state.whenUsingMobileData}
          closeModal={this.closeWhenUsingMobileData}
          h6="When using mobile data"
          clearC={this.state.whenUsingMobileDataOptions}
          value="Photos"
          button1="CANCEL"
          button2="OK"
        />
        <MobileModal
          openModal={this.openWhenConnectedToWifi}
          open={this.state.whenConnectedToWifi}
          closeModal={this.closeWhenConnectedToWifi}
          h6="When connected to Wi-Fi"
          clearC={this.state.whenConnectedToWifiOptions}
          value="Photos"
          button1="CANCEL"
          button2="OK"
        />
        <MobileModal
          openModal={this.openWhenConnectedToWifi}
          open={this.state.whenConnectedToWifi}
          closeModal={this.closeWhenConnectedToWifi}
          h6="When connected to Wi-Fi"
          clearC={this.state.whenConnectedToWifiOptions}
          value="Photos"
          button1="CANCEL"
          button2="OK"
        />
        <MobileModal
          openModal={this.openWhenRoaming}
          open={this.state.whenRoaming}
          closeModal={this.closeWhenRoaming}
          h6="When roaming"
          clearC={this.state.whenRoamingOptions}
          value="Photos"
          button1="CANCEL"
          button2="OK"
        />
      </Auxilliary>
    );
  }
}

export default DataAndStorage;
