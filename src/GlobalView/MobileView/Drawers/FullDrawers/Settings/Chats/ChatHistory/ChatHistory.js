import React from "react";
import Auxilliary from "../../../../../../../hoc/Auxillary";
import MobileModal from "../../../../../../Common__UI__Components/Utils/MobileModal/MobileModal";

class ChatHistory extends React.Component {
  state = {
    archiveChats: false,
    clearChats: false,
    deleteChats: false,
    clearC: [
      { key: "checkedB", value: false, message: "Delete related media from my device" },
      { key: "checkedC", value: false, message: "Delete starred messages" }
    ],
    deleteC: [{ key: "checkedA", value: true, message: "Delete media from my phone" }]
  };

  openArchiveChatsModal = () => {
    this.setState({ archiveChats: true });
  };
  closeArchiveChatsModal = () => {
    this.setState({ archiveChats: false });
  };
  openClearChats = () => {
    this.setState({ clearChats: true });
  };
  closeClearChats = () => {
    this.setState({ clearChats: false });
  };
  openDeleteChats = () => {
    this.setState({ deleteChats: true });
  };
  closeDeleteChats = () => {
    this.setState({ deleteChats: false });
  };
  componentDidMount() {
    let header = document.getElementById("mobile__chatHistory__head");
    let infoSection = document.getElementById("mobile__chatHistory__section");
    this.props.componentWithoutSearchBar(header, infoSection);
  }

  render() {
    return (
      <Auxilliary>
        <header className="col-12 fixed-top mobile__view__starred__Messages__Header py-2" id="mobile__chatHistory__head">
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
        <div id="mobile__chatHistory__section">
          <div className="col-12 py-3 d-flex">
            <div className="d-flex align-items-center pl-3 pr-4">
              <img src={require("../../../../../../../assets/svg/export.svg")} alt="gallery" height="18" width="18" />
            </div>
            <div className="d-flex align-items-center w-100">
              <div>
                <div className="mobile__settings__header__name">Export Chat</div>
              </div>
            </div>
          </div>
          <div className="col-12 py-3 d-flex" onClick={this.openArchiveChatsModal}>
            <div className="d-flex align-items-center pl-3 pr-4">
              <img src={require("../../../../../../../assets/svg/archive.svg")} alt="cloud upload" height="18" width="18" />
            </div>
            <div className="d-flex align-items-center w-100">
              <div>
                <div className="mobile__settings__header__name">Archive all chats</div>
              </div>
            </div>
          </div>
          <div className="col-12 py-3 d-flex" onClick={this.openClearChats}>
            <div className="d-flex align-items-center pl-3 pr-4">
              <img src={require("../../../../../../../assets/svg/minus.svg")} alt="minus" height="18" width="18" />
            </div>
            <div className="d-flex align-items-center w-100">
              <div>
                <div className="mobile__settings__header__name">Clear all chats</div>
              </div>
            </div>
          </div>

          <div className="col-12 py-3 d-flex" onClick={this.openDeleteChats}>
            <div className="d-flex align-items-center pl-3 pr-4">
              <img src={require("../../../../../../../assets/svg/delete-bin2.svg")} alt="delete-bin" height="18" width="18" />
            </div>
            <div className="d-flex align-items-center w-100">
              <div>
                <div className="mobile__settings__header__name">Delete all chats</div>
              </div>
            </div>
          </div>
        </div>
        <MobileModal
          openModal={this.openArchiveChatsModal}
          open={this.state.archiveChats}
          closeModal={this.closeArchiveChatsModal}
          simpleText="Are you sure you want to archive ALL chats ?"
          button1="CANCEL"
          button2="OK"
        />
        <MobileModal
          openModal={this.openClearChats}
          open={this.state.clearChats}
          closeModal={this.closeClearChats}
          simpleText="Messages in all chats will disappear forever."
          button1="CANCEL"
          button2="CLEAR MESSAGES"
          clearC={this.state.clearC}
        />
        <MobileModal
          openModal={this.openDeleteChats}
          open={this.state.deleteChats}
          closeModal={this.closeDeleteChats}
          simpleText="Are you sure you want to delete All chats and thier messages."
          button1="CANCEL"
          button2="DELETE"
          clearC={this.state.deleteC}
        />
      </Auxilliary>
    );
  }
}

export default ChatHistory;
