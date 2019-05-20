import React from "react";
import Auxilliary from "../../../../../../hoc/Auxillary";
import MobileModal from "../../../../../Common__UI__Components/Utils/MobileModal/MobileModal";
import Switch from "@material-ui/core/Switch";
import BottomDrawer from "../../../BottomDrawer/BottomDrawer";
import ChatHistory from "./ChatHistory/ChatHistory";
import ChatBackup from "./ChatBackup/ChatBackup";

class Chats extends React.Component {
  state = {
    checkedA: false,
    fontSize: false,
    language: false,
    chatHistory: false,
    chatBackup: false,
    key2: [{ key: "Small", value: "Small" }, { key: "Medium", value: "Medium" }, { key: "Large", value: "Large" }],
    langKey: [
      { key: "Phone's Language(English)", value: "Phone's Language(English)" },
      { key: "हिंदी", value: "हिंदी" },
      { key: "मराठी", value: "मराठी" },
      { key: "ಕನ್ನಡ", value: "ಕನ್ನಡ" },
      { key: "తెలుగు", value: "తెలుగు" }
    ]
  };
  openFontSizeModal = () => {
    this.setState({ fontSize: true });
  };
  closeFontSizeModal = () => {
    this.setState({ fontSize: false });
  };
  openLanguageModal = () => {
    this.setState({ language: true });
  };
  closeLanguageModal = () => {
    this.setState({ language: false });
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  openChatHistory = () => {
    this.setState({ chatHistory: true });
  };

  closeChatHistory = () => {
    this.setState({ chatHistory: false });
  };

  openChatBackup = () => {
    this.setState({ chatBackup: true });
  };

  closeChatBackup = () => {
    this.setState({ chatBackup: false });
  };

  componentDidMount() {
    let header = document.getElementById("mobile__chats__head");
    let infoSection = document.getElementById("mobile__chats__section");
    this.props.componentWithoutSearchBar(header, infoSection);
  }

  render() {
    return (
      <Auxilliary>
        <header className="col-12 fixed-top mobile__view__starred__Messages__Header py-2" id="mobile__chats__head">
          <div className="row mx-0 w-100">
            <div className="col-12 px-0 py-1 d-flex">
              <div className="row mx-0 w-100">
                <div className="mobileView__left__arrow d-flex align-items-center justify-content-start" onClick={this.props.closeDrawer}>
                  <img src={require("../../../../../../assets/svg/left.svg")} width="24" height="24" alt="left-arrow" />
                </div>
                <div className="mobileView__selectContactSection pl-3">
                  <div className="mobile__newChat__selectedContact">Chats</div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div id="mobile__chats__section">
          <div className="col-12 px-0">
            <div className="row mx-0">
              <div className="col-12 py-3 d-flex">
                <div className="d-flex align-items-center pl-4 pr-4" />
                <div className="d-flex align-items-center w-100 pl-2">
                  <div className="custom__width85">
                    <div className="mobile__settings__header__name">Enter is Send</div>
                    <div className="mobile__settings__header__status">Enter key will send your message</div>
                  </div>
                  <div>
                    <Switch checked={this.state.checkedA} onChange={this.handleChange("checkedA")} value="checkedA" />
                  </div>
                </div>
              </div>

              <div className="col-12 py-3 d-flex">
                <div className="d-flex align-items-center pl-4 pr-4" />
                <div className="d-flex align-items-center w-100 pl-2">
                  <div className="custom__width85">
                    <div className="mobile__settings__header__name">Media Visibility</div>
                    <div className="mobile__settings__header__status">Show newly downloaded media on your phone's gallery</div>
                  </div>
                  <Switch checked={this.state.checkedA} onChange={this.handleChange("checkedA")} value="checkedA" />
                </div>
              </div>
              <div className="col-12 py-3 d-flex" onClick={this.openFontSizeModal}>
                <div className="d-flex align-items-center pl-4 pr-4" />
                <div className="d-flex align-items-center w-100 pl-2">
                  <div>
                    <div className="mobile__settings__header__name">Font Size</div>
                    <div className="mobile__settings__header__status">Medium</div>
                  </div>
                </div>
              </div>
              <div className="col-12 py-3 d-flex mobile__settings__basicInfo__section" onClick={this.openLanguageModal}>
                <div className="d-flex align-items-center pl-4 pr-4" />
                <div className="d-flex align-items-center w-100 pl-2">
                  <div>
                    <div className="mobile__settings__header__name">App Language</div>
                    <div className="mobile__settings__header__status">Phone's language(English)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 py-3 d-flex">
            <div className="d-flex align-items-center pl-3 pr-4">
              <img src={require("../../../../../../assets/svg/gallery2.svg")} alt="gallery" height="18" width="18" />
            </div>
            <div className="d-flex align-items-center w-100">
              <div>
                <div className="mobile__settings__header__name">Wallpaper</div>
              </div>
            </div>
          </div>
          <div className="col-12 py-3 d-flex">
            <div className="d-flex align-items-center pl-3 pr-4">
              <img
                src={require("../../../../../../assets/svg/cloud-storage-uploading-option.svg")}
                alt="cloud upload"
                height="18"
                width="18"
              />
            </div>
            <div className="d-flex align-items-center w-100" onClick={this.openChatBackup}>
              <div>
                <div className="mobile__settings__header__name">Chat Backup</div>
              </div>
            </div>
          </div>
          <div className="col-12 py-3 d-flex" onClick={this.openChatHistory}>
            <div className="d-flex align-items-center pl-3 pr-4">
              <img src={require("../../../../../../assets/svg/history.svg")} alt="history" height="18" width="18" />
            </div>
            <div className="d-flex align-items-center w-100">
              <div>
                <div className="mobile__settings__header__name">Chat History</div>
              </div>
            </div>
          </div>
        </div>
        <MobileModal
          openModal={this.openFontSizeModal}
          open={this.state.fontSize}
          closeModal={this.closeFontSizeModal}
          h6="Font Size"
          key2={this.state.key2}
          value="Medium"
        />
        <MobileModal
          openModal={this.openLanguageModal}
          open={this.state.language}
          closeModal={this.closeLanguageModal}
          h6="App Language"
          key2={this.state.langKey}
          value="Phone's Language(English)"
        />
        <BottomDrawer onOpen={this.openChatHistory} open={this.state.chatHistory}>
          <ChatHistory componentWithoutSearchBar={this.props.componentWithoutSearchBar} closeDrawer={this.closeChatHistory} />
        </BottomDrawer>
        <BottomDrawer onOpen={this.openChatBackup} open={this.state.chatBackup}>
          <ChatBackup componentWithoutSearchBar={this.props.componentWithoutSearchBar} closeDrawer={this.closeChatBackup} />
        </BottomDrawer>
      </Auxilliary>
    );
  }
}

export default Chats;
