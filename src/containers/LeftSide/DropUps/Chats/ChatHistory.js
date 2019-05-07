import React from "react";
import Auxilliary from "../../../../hoc/Auxillary";
// import MobileModal from "../../../../ReusableUI-Components/MobileModal";

class ChatHistory extends React.Component {
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
                    <div className="mobile__newChat__selectedContact">Chats</div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="col-12 py-3 d-flex">
            <div className="d-flex align-items-center pl-3 pr-4">
              <img src={require("../../../../assets/svg/export.svg")} alt="gallery" height="18" width="18" />
            </div>
            <div className="d-flex align-items-center w-100">
              <div>
                <div className="mobile__settings__header__name">Export Chat</div>
              </div>
            </div>
          </div>
          <div className="col-12 py-3 d-flex">
            <div className="d-flex align-items-center pl-3 pr-4">
              <img src={require("../../../../assets/svg/archive.svg")} alt="cloud upload" height="18" width="18" />
            </div>
            <div className="d-flex align-items-center w-100">
              <div>
                <div className="mobile__settings__header__name">Archive all chats</div>
              </div>
            </div>
          </div>
          <div className="col-12 py-3 d-flex">
            <div className="d-flex align-items-center pl-3 pr-4">
              <img src={require("../../../../assets/svg/minus.svg")} alt="minus" height="18" width="18" />
            </div>
            <div className="d-flex align-items-center w-100">
              <div>
                <div className="mobile__settings__header__name">Clear all chats</div>
              </div>
            </div>
          </div>

          <div className="col-12 py-3 d-flex">
            <div className="d-flex align-items-center pl-3 pr-4">
              <img src={require("../../../../assets/svg/delete-bin2.svg")} alt="delete-bin" height="18" width="18" />
            </div>
            <div className="d-flex align-items-center w-100">
              <div>
                <div className="mobile__settings__header__name">Delete all chats</div>
              </div>
            </div>
          </div>
        </div>
        {/* <MobileModal
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
        /> */}
      </Auxilliary>
    );
  }
}

export default ChatHistory;
