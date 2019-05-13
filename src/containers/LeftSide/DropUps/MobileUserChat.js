import React from "react";
import SearchInputBox from "../../../components/SearchInputBox/SearchInputBox";
import DropDown from '../../../ReusableUI-Components/dropDown';
import ViewContact from './ViewContact';
import BottomDrawer from './BottomDrawer';

class MobileUserChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userChatDropdown: true,
      moreOptionsDropdown: true,
      setSearchActive: false,
      viewContact: false,
      secondValue: "",
      messageList: []
    }
    this.resizeFn = this.resizeFn.bind(this);
  }
  setSearchActiveFn = () => {
    this.setState({ setSearchActive: true })
  };

  setSearchDeactiveFn = () => {
    this.setState({ setSearchActive: false });
  };
  openViewContact = () => {
    this.setState({ viewContact: true })
  }
  closeViewContact = () => {
    this.setState({ viewContact: false })
  }
  resizeFn() {
    var page = document.getElementById("page").clientHeight;
    var headheight = document.getElementById("user-chat-header").clientHeight
    var content = document.getElementById("message2List")
    var footer = document.getElementById("user-chat-section").clientHeight
    var availableheight = page - headheight - footer
    content.style.marginTop = headheight + "px"
    content.style.height = availableheight - 13 + "px"
    content.style.overflow = "auto";
  }

  componentDidMount() {
    var page = document.getElementById("page").clientHeight;
    var headheight = document.getElementById("user-chat-header").clientHeight
    var content = document.getElementById("message2List")
    var footer = document.getElementById("user-chat-section").clientHeight
    var availableheight = page - headheight - footer
    content.style.marginTop = headheight + "px"
    content.style.height = availableheight - 13 + "px"
    content.style.overflow = "auto";
    window.addEventListener("resize", this.resizeFn);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeFn);
  }
  sendMessageIcon = (e) => {
    this.setState({ secondValue: e });
  }
  appendDataToMessageLogScreen = e => {
    if (this.state.secondValue === "" || this.state.secondValue.trim() === "") {
      return;
    } else if (this.state.secondValue !== "") {
      this.setState({
        messageList: this.state.messageList.concat({ textMessage: this.state.secondValue }),
        secondValue: ""
      });
    }
  };
  render() {
    console.log(this.state.messageList)
    return (
      <div>
        {this.state.setSearchActive ? (
          <SearchInputBox
            placeholder="Search..."
            searchBoxType="chatActiveSearch"
            setSearchDeactiveFn={this.setSearchDeactiveFn}
          />
        ) : (
            <header className="col-12 mobile__view__chat__Messages__Header fixed-top" id="user-chat-header">
              <div className="row mx-0 w-100">
                <div className="col-12 px-0 py-1 d-flex">
                  <div className="row mx-0 w-100">
                    <div
                      className="mobileView__left__arrow d-flex align-items-center justify-content-start"
                      onClick={this.props.closeDrawer}
                    >
                      <img src={require("../../../assets/svg/left.svg")} width="20" height="20" alt="left-arrow" />
                    </div>
                    <div className="mobileView__selectContactSection pl-3" onClick={this.openViewContact}>
                      <div className="mobile__newChat__selectedContact">
                        <img
                          src={require("../../../assets/images/user-image.jpg")}
                          className="mobile__sender__user__image"
                          alt="sender-pic"
                        />
                        <span className="pl-3">Nikolay</span>
                      </div>
                    </div>
                    <div className=" mobile__sender__user__options">
                      <span className="single-icons d-flex align-items-center">
                        <img
                          src={require("../../../assets/svg/video-camera1.svg")}
                          height="24"
                          width="24"
                          alt="video camera"
                        />
                      </span>
                      <span className="single-icons user__chat__phone__icon">
                        <img src={require("../../../assets/svg/call.svg")} height="18" width="18" alt="video camera" />
                      </span>
                      <DropDown
                        classes="fas fa-ellipsis-v"
                        userChatDropdown={this.state.userChatDropdown}
                        moreOptionsDropdown={this.state.moreOptionsDropdown}
                        setSearchActiveFn={this.setSearchActiveFn}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </header>
          )}
        <div className="user-chat-section">
          <div className="d-flex flex-column mobile__chat__section" id="message2List">
            {this.state.messageList
              ? this.state.messageList.map((k, i) => (
                <li key={i} style={{ listStyleType: "none" }} id={"list" + i}>
                  <div className="mobile__chat__sender__message">
                    <div className="rightSide__chat__sender__firstMessage" />
                    <span> {k.textMessage} </span>
                    <span className="time-and-tick text-right">
                      <span> 12: 36 </span>
                      <span>
                        <img
                          src={require("../../../assets/svg/double-click.svg")}
                          alt="double-tick"
                          className="double-tick"
                        />
                      </span>
                    </span>
                  </div>
                </li>
              ))
              : null}
          </div>
          <footer className="col-12 px-0" id="user-chat-section">
            <div className="row mx-0">
              <div className="mobiale__screen__input justify-content-center px-1 align-items-center w-100 d-flex">
                <div className="custom__width90">
                  <i className="mobile__chat__smiley far fa-grin-alt" />
                  <SearchInputBox
                    searchBoxType="mobileMainChat"
                    onChangeHandler={this.sendMessageIcon}
                    value={this.state.secondValue}
                    placeholder="Type a message..."
                    onClickHandler={this.appendDataToMessageLogScreen} />
                </div>
                <div
                  onClick={this.appendDataToMessageLogScreen}
                  className="d-flex justify-content-center align-items-center mobile__screen__microphone ml-1"
                  id="footer3"
                >
                  <img src={require("../../../assets/svg/microphone-black.svg")} alt="microphone" width="18" height="18" />
                </div>
              </div>
            </div>
          </footer>
        </div>
        <BottomDrawer onOpen={this.openViewContact} open={this.state.viewContact}>
          <ViewContact closeDrawer={this.closeViewContact} />
        </BottomDrawer>
      </div>
    );
  }
}

export default MobileUserChat;
