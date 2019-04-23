import React from "react";
import SearchInputBox from "../../components/SearchInputBox/SearchInputBox";
import DropDown from "../../components/dropDown";
import Aux from "../../hoc/Aux";
import DefaultLoadedChat from "../../components/TypesOfUserChats/DefaultLoadedChat";

class LeftSide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setLeftHiddenComponentVisible: this.props.setLeftHiddenComponentVisible,
      baseClasses: ["col-xl-3-5", "left-side-of-chat-window", "px-0"],
      squeezeLayoutBoolean: this.props.squeezeLayoutBoolean,
      isChatARegularMessage: this.props.isChatARegularMessage
    };
    this.toggleHandlerIn = this.toggleHandlerIn.bind(this);
  }

  componentDidMount() {
    this.setState({ isChatARegularMessage: true });
    this.props.isChatARegularMessageFn();
  }

  toggleHandlerIn() {
    this.setState({ setLeftHiddenComponentVisible: true }, () => {
      this.props.setLeftHiddenComponentVisibleFn();
      this.props.defaultLeftHiddenChatsFn();
      document.getElementById("message-logs").style.display = "none";
      setTimeout(() => {
        document.getElementById("newChatActiveBox").style.transform = "translate(0%, 0)";
      }, 100);
    });
  }

  newGroup = () => {
    this.props.makeNewGroupFn();
    this.toggleHandlerIn();
  };

  render() {
    /** newChat component is too reusable */
    let messageLogs = (
      <Aux>
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
                  <DropDown leftDropdown={this.props.leftDropdown} classes="fas fa-ellipsis-v" newGroup={this.newGroup} />
                </div>
              </div>
            </div>
          </header>
          {/** input box  */}
          <SearchInputBox placeholder="Search or start new Chat" casualSearchBox={true} />
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
    /** if hidden componenet toggle then -> pass props to display proper chatType -> then in Hidden<C> switch based on */
    /** message logs is default */
    /** only new chat will be shown on toggle. */
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
