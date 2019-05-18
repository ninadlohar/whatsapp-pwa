import React from "react";
import Auxilliary from "../../../../../../../hoc/Auxillary";
import MobileModal from "../../../../../../Common__UI__Components/Utils/MobileModal/MobileModal";
import Switch from "@material-ui/core/Switch";
import BottomDrawer from "../../../../BottomDrawer";
import ChatHistory from "../ChatHistory/ChatHistory";

class ChatBackup extends React.Component {
  state = {
    checkedA: false,
    backupToGoogleDrive: false,
    googleAccount: false,
    backUpOverWifi: false,
    key2: [
      { key: "Never", value: "Never" },
      { key: `Only when I tap "Back up`, value: `Only when I tap "Back up` },
      { key: "Daily", value: "Daily" },
      { key: "Weekly", value: "Weekly" },
      { key: "Month", value: "Month" }
    ],
    accounts: [
      { key: "xnyy@gmail.com", value: "xnyy@gmail.com" },
      { key: "tavkqqzd@gmail.com", value: "tavkqqzd@gmail.com" },
      { key: "Add Account", value: "Add Account" }
    ],
    backUpOptions: [{ key: "Wi-Fi", value: "Wi-Fi" }, { key: "Wi-Fi or cellular", value: "Wi-Fi or cellular" }]
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  openBackUpToGoogleModal = () => {
    this.setState({ backupToGoogleDrive: true });
  };

  closeBackUpToGoogleModal = () => {
    this.setState({ backupToGoogleDrive: false });
  };
  openGoogleAccount = () => {
    this.setState({ googleAccount: true });
  };
  closeGoogleAccount = () => {
    this.setState({ googleAccount: false });
  };

  openBackUpOverWifi = () => {
    this.setState({ backUpOverWifi: true });
  };

  closeBackUpOverWifi = () => {
    this.setState({ backUpOverWifi: false });
  };

  componentDidMount() {
    let header = document.getElementById("mobile__chatBackup__head");
    let infoSection = document.getElementById("mobile__chatBackup__section");
    this.props.componentWithoutSearchBar(header, infoSection);
  }

  render() {
    return (
      <Auxilliary>
        <header className="col-12 fixed-top mobile__view__starred__Messages__Header py-2" id="mobile__chatBackup__head">
          <div className="row mx-0 w-100">
            <div className="col-12 px-0 py-1 d-flex">
              <div className="row mx-0 w-100">
                <div className="mobileView__left__arrow d-flex align-items-center justify-content-start" onClick={this.props.closeDrawer}>
                  <img src={require("../../../../../../../assets/svg/left.svg")} width="24" height="24" alt="left-arrow" />
                </div>
                <div className="mobileView__selectContactSection pl-3">
                  <div className="mobile__newChat__selectedContact">Chats</div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div id="mobile__chatBackup__section">
          <div className="col-12 py-3 d-flex deleteAccount__head__section">
            <div className="d-flex align-items-top pl-3 pr-4">
              <img src={require("../../../../../../../assets/svg/cloud-backup.svg")} alt="cloud-backup" height="18" width="18" />
            </div>
            <div className="d-flex align-items-center w-100">
              <div>
                <div className="notifcations__header pb-2">Last Backup</div>
                <div className="privacy__text">
                  Backup your messages and media to Google Drive. You can restore them when you reinstall WhatsApp. Your messages will also
                  backup to your phone's internal storage.
                </div>
                <div className="chatBackup__text pt-3">Local: 2.17 AM</div>
                <div className="chatBackup__text pt-2 pb-3">Google Drive: Never</div>
                <div className="w-100 d-flex">
                  <div className="change_number">
                    <div className="d-flex justify-content-center">BACK UP</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 py-3 d-flex">
            <div className="d-flex align-items-top pl-3 pr-4">
              <img src={require("../../../../../../../assets/svg/google-drive.svg")} alt="google-drive" height="18" width="18" />
            </div>
            <div className="d-flex align-items-center w-100">
              <div>
                <div className="notifcations__header pb-2">Google Drive settings</div>
                <div className="privacy__text">
                  Messages and media backed up in Google Drive are not protected by WhatsApp end-to-end encryption
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 py-3 d-flex" onClick={this.openBackUpToGoogleModal}>
            <div className="d-flex align-items-center pl-4 pr-4" />
            <div className="d-flex align-items-center w-100 pl-2">
              <div>
                <div className="mobile__settings__header__name">Backup to Google Drive</div>
                <div className="mobile__settings__header__status">Never</div>
              </div>
            </div>
          </div>

          <div className="col-12 py-3 d-flex" onClick={this.openGoogleAccount}>
            <div className="d-flex align-items-center pl-4 pr-4" />
            <div className="d-flex align-items-center w-100 pl-2">
              <div>
                <div className="mobile__settings__header__name">Google Account</div>
                <div className="mobile__settings__header__status">None Selected</div>
              </div>
            </div>
          </div>

          <div className="col-12 py-3 d-flex" onClick={this.openBackUpOverWifi}>
            <div className="d-flex align-items-center pl-4 pr-4" />
            <div className="d-flex align-items-center w-100 pl-2">
              <div>
                <div className="mobile__settings__header__name">Back up Over</div>
                <div className="mobile__settings__header__status">Wi-Fi Only</div>
              </div>
            </div>
          </div>

          <div className="col-12 py-3 d-flex">
            <div className="d-flex align-items-center pl-4 pr-4" />
            <div className="d-flex align-items-center w-100 pl-2">
              <div className="custom__width85">
                <div className="mobile__settings__header__name">Include Vidoes</div>
              </div>
              <div>
                <Switch checked={this.state.checkedA} onChange={this.handleChange("checkedA")} value="checkedA" />
              </div>
            </div>
          </div>
        </div>
        <MobileModal
          openModal={this.openBackUpToGoogleModal}
          open={this.state.backupToGoogleDrive}
          closeModal={this.closeBackUpToGoogleModal}
          h6="Back up to Google Drive"
          key2={this.state.key2}
          value="Never"
        />
        <MobileModal
          openModal={this.openGoogleAccount}
          open={this.state.googleAccount}
          closeModal={this.closeGoogleAccount}
          h6="Choose an account"
          key2={this.state.accounts}
          value="xnyy@gmail.com"
        />
        <MobileModal
          openModal={this.openBackUpOverWifi}
          open={this.state.backUpOverWifi}
          closeModal={this.closeBackUpOverWifi}
          h6="Back up over"
          key2={this.state.backUpOptions}
          value="Wi-Fi Only"
        />
        <BottomDrawer onOpen={this.openChatHistory} open={this.state.chatHistory}>
          <ChatHistory componentWithoutSearchBar={this.props.componentWithoutSearchBar} closeDrawer={this.closeChatHistory} />
        </BottomDrawer>
      </Auxilliary>
    );
  }
}

export default ChatBackup;
