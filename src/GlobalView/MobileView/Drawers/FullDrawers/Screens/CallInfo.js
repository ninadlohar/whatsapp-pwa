import React from "react";
import Dropdown from "../../../../Common__UI__Components/DropDown/DropDown";
import Auxillary from "../../../../../hoc/Auxillary";
import UserChatting from "./UserChatting/UserChatting";
import BottomDrawer from "../../BottomDrawer";

class CallInfo extends React.Component {
  state = {
    openChat: false,
    callInfoDropdown: true
  };

  componentWithoutSearchBar = (header, leftHeight) => {
    var height = document.getElementById("page").clientHeight;
    var headheight = header.clientHeight;
    var content = leftHeight;
    var step1 = height - headheight;
    var availableheight = step1;
    content.style.marginTop = headheight + "px";
    content.style.height = availableheight + "px";
    content.style.overflow = "auto";
  };

  componentDidMount() {
    let header = document.getElementById("call__info__header");
    let content = document.getElementById("call__info__section");
    this.componentWithoutSearchBar(header, content);
  }
  openChat = () => {
    this.setState({ openChat: true });
  };
  closeChat = () => {
    this.setState({ openChat: false });
  };
  render() {
    return (
      <Auxillary>
        <header className="col-12 fixed-top call__info__header py-1" id="call__info__header">
          <div className="row mx-0 w-100">
            <div className="col-12 px-0 py-1 d-flex">
              <div className="row mx-0 w-100">
                <div className="mobileView__left__arrow d-flex align-items-center justify-content-start" onClick={this.props.closeDrawer}>
                  <img src={require("../../../../../assets/svg/left.svg")} width="24" height="24" alt="left-arrow" />
                </div>
                <div className="mobileView__selectContactSection pl-3 d-flex align-items-center">
                  <div className="mobile__newChat__selectedContact">Call Info</div>
                </div>
                <div className="d-flex justify-content-end call__history__options">
                  <div className="single-icons d-flex justify-content-center align-items-center" onClick={this.openChat}>
                    <img src={require("../../../../../assets/svg/message-ballon3.svg")} alt="message-ballon" height="20" width="20" />
                  </div>
                  <Dropdown classes="fas fa-ellipsis-v" callInfoDropdown={this.state.callInfoDropdown} />
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="call__info__section" id="call__info__section">
          <div className="chat-1 w-100 d-flex rightSlider__userInfo__box">
            <div className="leftChat__user__image">
              <img
                src={require("../../../../../assets/images/BB_S5B_004_sm.jpg")}
                alt="tim-holland"
                className="sender__image__left__window"
              />
            </div>
            <div className="calls__user__details__mobile">
              <div className="leftChat__senderName___time">
                <div className="row mx-0">
                  <div className="leftChat__senderName noOverFlow">NiKO</div>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <span className="d-flex align-items-center single-icons mr-2">
                <img src={require("../../../../../assets/svg/call1.svg")} alt="call" height="20" width="20" />
              </span>
              <span className="d-flex align-items-center single-icons">
                <img src={require("../../../../../assets/svg/video-camera.svg")} alt="video-camera" height="22" width="22" />
              </span>
            </div>
          </div>
          <div className="media-section call__history__mobile m-2">
            <div className="col-12 viewProfile__section__header py-1 deleteAccount__head__section">Today</div>
            <div className="col-12">
              <span className="pr-2">
                <img src={require("../../../../../assets/svg/call-received-arrow.svg")} height="11" width="11" alt="call-received" />
              </span>
              Missed
            </div>
            <div className="row mx-0">
              <div className="col-12 leftChat__message noOverFlow">
                <span>10:30 AM</span>
              </div>
            </div>
          </div>
          <div className="media-section call__history__mobile m-2">
            <div className="col-12 viewProfile__section__header py-1 deleteAccount__head__section">Today</div>
            <div className="col-12">
              <span className="pr-2">
                <img src={require("../../../../../assets/svg/call-received-arrow.svg")} height="11" width="11" alt="call-received" />
              </span>
              Missed
            </div>
            <div className="row mx-0">
              <div className="col-12 leftChat__message noOverFlow">
                <span>10:30 AM</span>
              </div>
            </div>
          </div>
          <div className="media-section call__history__mobile m-2">
            <div className="col-12 viewProfile__section__header py-1 deleteAccount__head__section">Today</div>
            <div className="col-12">
              <span className="pr-2">
                <img src={require("../../../../../assets/svg/call-received-arrow.svg")} height="11" width="11" alt="call-received" />
              </span>
              Missed
            </div>
            <div className="row mx-0">
              <div className="col-12 leftChat__message noOverFlow">
                <span>10:30 AM</span>
              </div>
            </div>
          </div>
        </div>
        <BottomDrawer onOpen={this.openChat} open={this.state.openChat}>
          <UserChatting closeDrawer={this.closeChat} />
        </BottomDrawer>
      </Auxillary>
    );
  }
}

export default CallInfo;
