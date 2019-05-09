import React from "react";
import Input from "../../../ReusableUI-Components/Input";
import MessageLogs from "../MessageLogs/MessageLogs";
import Auxillary from "../../../hoc/Auxillary";
import "../../../App.scss";

class FooterAndMessageLogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sendMessageIcon: false,
      secondValue: "",
      messageList: []
    };
    this.sendMessageIcon = this.sendMessageIcon.bind(this);
  }

  hideSelectedChatFooter = () => {
    document.getElementById("selectedMessagesFooter").style.transition = "0.3s";
    document.getElementById("selectedMessagesFooter").style.transform = "translate(0,100%)";
  };

  sendMessageIcon(e) {
    this.setState({ secondValue: e, sendMessageIcon: true }, () => {
      if (e === "") {
        this.setState({ sendMessageIcon: false });
        document.getElementById("plane-icon").style.transition = "all 0.2s";
      }
    });
  }

  appendDataToMessageLogScreen = e => {
    if (this.state.secondValue === "" || this.state.secondValue.trim() === "") {
      return;
    } else if (this.state.secondValue !== "") {
      this.setState({
        messageList: this.state.messageList.concat({
          textMessage: this.state.secondValue
        }),
        secondValue: ""
      });
    }
  };

  render() {
    let transformIcons = this.state.sendMessageIcon ? (
      <i className="fas fa-paper-plane icon-color" id="plane-icon" />
    ) : (
      <i className="fas fa-microphone microphone icon-color" />
    );
    return (
      <Auxillary>
        {/* <div className="row mx-0"> */}
        <MessageLogs messageLogs={this.state.messageList} />
        {/* </div> */}
        <div className="row mx-0">
          <footer className="footer w-100" id="footer">
            <div className="rightSide__footer__input__box w-100 d-flex align-items-center py-2">
              <div className="row mx-0 w-100">
                <div className="rightSide__footer__icons__w__10percent d-flex justify-content-center align-items-center">
                  <i className="far fa-grin-alt smiley icon-color" />
                </div>
                <div className="rightSide__footer__icons__w__80percent px-0 py-1">
                  <Input
                    id="send-text-input-box"
                    placeholder="Type a message.."
                    onChangeHandler={this.sendMessageIcon}
                    value={this.state.secondValue}
                    type="textarea"
                    classes="textarea"
                    onClickHandler={this.appendDataToMessageLogScreen}
                  />
                </div>
                <div className="rightSide__footer__icons__w__10percent d-flex justify-content-center align-items-center">
                  <span onClick={this.appendDataToMessageLogScreen}>{transformIcons}</span>
                </div>
              </div>
            </div>
          </footer>
          {/** second footer pops on click */}
          <footer className="footer w-100">
            <div
              className="rightSide__footer__input__box w-100 d-flex align-items-center py-2 selectedMessagesFooter"
              id="selectedMessagesFooter"
            >
              <div className="row mx-0 w-100">
                <div className="slideUp__footer w-100 d-flex">
                  <div className="custom__padding_10 cancel-svg" onClick={this.hideSelectedChatFooter}>
                    <img src={require("../../../assets/svg/cancel-real.svg")} height="15" width="15" alt="exit-svg" />
                  </div>
                  <div className="selectedMessages__count d-flex align-items-center">
                    <span>0 Selected</span>
                  </div>
                  <div className="d-flex justify-content-end">
                    <div className="custom__padding_10 cancel-svg">
                      <img
                        src={require("../../../assets/svg/rate-star-button.svg")}
                        height="18"
                        width="18"
                        alt="star-svg"
                      />
                    </div>
                    <div className="custom__padding_10 cancel-svg">
                      <img
                        src={require("../../../assets/svg/delete-bin.svg")}
                        height="18"
                        width="18"
                        alt="delete-bin-svg"
                      />
                    </div>
                    <div className="custom__padding_10 cancel-svg">
                      <img
                        src={require("../../../assets/svg/forward-arrow.svg")}
                        height="18"
                        width="18"
                        alt="forward-arrow-svg"
                      />
                    </div>
                    <div className="custom__padding_10">
                      <img
                        src={require("../../../assets/svg/download-button.svg")}
                        height="18"
                        width="18"
                        alt="download-svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </Auxillary>
    );
  }
}

export default FooterAndMessageLogs;
