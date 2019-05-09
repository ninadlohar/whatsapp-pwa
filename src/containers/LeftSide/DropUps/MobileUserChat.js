import React from "react";
import SearchInputBox from "../../../components/SearchInputBox/SearchInputBox";

class MobileUserChat extends React.Component {
  render() {
    return (
      <div>
        <header className="col-12 mobile__view__chat__Messages__Header" id="head">
          <div className="row mx-0 w-100">
            <div className="col-12 px-0 py-1 d-flex">
              <div className="row mx-0 w-100">
                <div
                  className="mobileView__left__arrow d-flex align-items-center justify-content-start"
                  onClick={this.props.closeDrawer}
                >
                  <img src={require("../../../assets/svg/left.svg")} width="20" height="20" alt="left-arrow" />
                </div>
                <div className="mobileView__selectContactSection pl-3">
                  <div className="mobile__newChat__selectedContact">
                    <img
                      src={require("../../../assets/images/user-image.jpg")}
                      className="mobile__sender__user__image"
                      alt="sender-image"
                    />
                    <span className="pl-3">Nikolay</span>
                  </div>
                </div>
                <div className="mobile__sender__user__options">
                  <span>
                    <img
                      src={require("../../../assets/svg/video-camera1.svg")}
                      height="24"
                      width="24"
                      alt="video camera"
                    />
                  </span>
                  <span>
                    <img src={require("../../../assets/svg/call.svg")} height="18" width="18" alt="video camera" />
                  </span>
                  <span>
                    <img src={require("../../../assets/svg/ellipsis.svg")} height="18" width="18" alt="video camera" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="col-12 px-0" id="content1">
          <div className="row mx-0" />
        </div>
        <div className="mobile__screen__input justify-content-center px-1 align-items-center w-100 d-flex">
          <div className="custom__width90">
            <SearchInputBox searchBoxType="mobileMainChat" />
          </div>
          <div className="d-flex justify-content-center align-items-center mobile__screen__microphone ml-1">
            <img src={require("../../../assets/svg/microphone-black.svg")} alt="microphone" width="18" height="18" />
          </div>
        </div>
      </div>
    );
  }
}

export default MobileUserChat;