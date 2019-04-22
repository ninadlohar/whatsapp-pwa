import React from "react";
import SearchInputBox from "../../components/SearchInputBox/SearchInputBox";
import DropDown from "../../components/dropDown";
import Aux from "../../hoc/Aux";
import DefaultLoadedChat from "../../components/TypesOfUserChats/DefaultLoadedChat";
import NewUserChat from "../../components/TypesOfUserChats/NewUserChat";

class LeftSide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newChatWindowActiveToggle: false,
      baseClasses: ["col-xl-3-5", "left-side-of-chat-window", "px-0"],
      squeezeLayoutBoolean: this.props.squeezeLayoutBoolean,
      isChatARegularMessage: this.props.isChatARegularMessage
    };
    this.toggleHandlerIn = this.toggleHandlerIn.bind(this);
    this.toggleHandlerOut = this.toggleHandlerOut.bind(this);
  }

  componentDidMount() {
    this.setState({ isChatARegularMessage: true });
    this.props.isChatARegularMessageFn();
  }

  toggleHandlerIn() {
    document.getElementById("newChatActiveBox").style.visibility = "visible";
    document.getElementById("message-logs").style.display = "none";
    if (!this.state.newChatWindowActiveToggle) {
      this.setState(
        {
          newChatWindowActiveToggle: !this.state.newChatWindowActiveToggle
        },
        () => {
          document.getElementById("newChatActiveBox").style.transform = "translate(0%, 0)";
        }
      );
    }
  }

  toggleHandlerOut() {
    document.getElementById("newChatActiveBox").style.transform = "translate(-100%, 0)";
    setTimeout(() => {
      document.getElementById("message-logs").style.display = "block";
      this.setState({
        newChatWindowActiveToggle: !this.state.newChatWindowActiveToggle
      });
    }, 200);
  }

  render() {
    let frequentlyContacted = (
      <div className="chat-1 w-100 py-4 d-flex single-user-chat-box pr-3">
        <div className="single-user-chat-box d-flex align-items-center frequently-contacted">FREQUENTLY CONTACTED</div>
      </div>
    );
    let newGroup = (
      <div className="chat-1 w-100 py-2 d-flex single-user-chat-box pr-3">
        <div className="sender-image-padding py-1">
          <img src={require("../../assets/images/new-group.png")} alt="new-group" className="sender-user-image" />
        </div>
        <div className="remaining d-flex align-items-center">New Group</div>
      </div>
    );
    /** newChat component is too reusable */
    let newChat = (
      <div className="row mx-0 newChatActiveBox" id="newChatActiveBox">
        <header className="col-12 display-content-area-header px-0">
          <div className="newChatActive">
            <div className="row">
              <div className="col-12 d-flex h-59 align-items-center">
                <span className="newChatLeftArrow" onClick={this.toggleHandlerOut}>
                  <i className="fas fa-arrow-left" />
                </span>
                <span className="newChatHeader">New Chat</span>
              </div>
            </div>
          </div>
        </header>
        <SearchInputBox />
        <section className="col-12 px-0 chat-section">
          <div className="row mx-0">
            {/** all chats will append here from API */}
            {/** log-of-chats-new-chat-active will be true when active else log-of-chats toggle*/}
            <div className="col-12 px-0 log-of-chats-new-chat-active">
              <div className="row mx-0">
                {newGroup}
                {frequentlyContacted}
                <NewUserChat />
                <NewUserChat />
                <NewUserChat />
                <NewUserChat />
                <NewUserChat />
                <NewUserChat />
                <NewUserChat />
                <NewUserChat />
                <NewUserChat />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
    let messageLogs = (
      <Aux>
        {newChat}
        <div className="row mx-0" id="message-logs">
          <header className="col-12 display-content-area-header px-0">
            <div className="row mx-0">
              <div className="col-3 px-0">
                <div className="logged-in-user-image-div py-2 px-3">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Carl-Benz_coloriert.jpg"
                    alt="karl-benz"
                    className="logged-in-user-image"
                  />
                </div>
              </div>
              <div className="col-9">
                <div className="row mx-0 justify-content-end align-items-center h-100">
                  <div className="px-3">
                    <img src={require("../../assets/svg/charging-circle.svg")} alt="status-v3" height="24" width="18" />
                  </div>
                  <div className="px-3" onClick={this.toggleHandlerIn}>
                    <img src={require("../../assets/svg/message-ballon.svg")} alt="message-ballon" height="20" width="20" />
                  </div>
                  <DropDown leftDropdown={this.props.leftDropdown} classes="fas fa-ellipsis-v" />
                </div>
              </div>
            </div>
          </header>
          {/** input box  */}
          <SearchInputBox placeholder="Search or start new Chat" />
          {/** chat section */}
          <section className="col-12 px-0 chat-section">
            <div className="row mx-0">
              {/** all chats will append here from API */}
              <div className="col-12 px-0 log-of-chats">
                <div className="row mx-0">
                  <DefaultLoadedChat />
                  <DefaultLoadedChat />
                  <DefaultLoadedChat />
                  <DefaultLoadedChat />
                  <DefaultLoadedChat />
                  <DefaultLoadedChat />
                  <DefaultLoadedChat />
                  <DefaultLoadedChat />
                  <DefaultLoadedChat />
                  <DefaultLoadedChat />
                </div>
              </div>
            </div>
          </section>
        </div>
      </Aux>
    );
    let appendClasses = this.state.squeezeLayoutBoolean
      ? this.state.baseClasses.concat(this.props.addClassesLeftSide).join(" ")
      : this.state.baseClasses.join(" ");
    return (
      <div className={appendClasses} id="col-xl-3-5">
        <div className="left-side-of-chat-window-child">{messageLogs}</div>
      </div>
    );
  }
}

export default LeftSide;
