import React from "react";
import Input from "../../../ReusableUI-Components/Input";
import MessageLogs from "../MessageLogs/MessageLogs";
import Aux from "../../../hoc/Aux";
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
      <Aux>
        <MessageLogs messageLogs={this.state.messageList} />
        <footer className="footer" id="footer">
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
      </Aux>
    );
  }
}

export default FooterAndMessageLogs;
