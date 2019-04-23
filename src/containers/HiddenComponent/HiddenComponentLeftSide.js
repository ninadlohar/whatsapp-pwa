import React from "react";
import NewUserChat from "../../components/TypesOfUserChats/NewUserChat";
import SearchInputBox from "../../components/SearchInputBox/SearchInputBox";

class HiddenComponentLeftSide extends React.Component {
  state = {
    baseClasses: ["row", "mx-0", "newChatActiveBox"],
    hiddenLeftClass: ["DOMChangedLeftHiddenSide"],
    show: true
  };
  toggleHandlerOut = () => {
    document.getElementById("newChatActiveBox").style.transform = "translate(-100%, 0)";
    setTimeout(() => {
      document.getElementById("message-logs").style.display = "block";
      this.setState({
        setLeftHiddenComponentVisible: false
      });
    }, 200);
  };

  render() {
    let appendClasses = this.props.setLeftHiddenComponentVisible
      ? this.state.baseClasses.concat(this.state.hiddenLeftClass).join(" ")
      : this.state.baseClasses.join(" ");
    /** if the whole DOM is manipulated with the hidden right screen popped in then this classes is executed */
    let classes = this.props.squeezeLayoutBoolean ? appendClasses : this.state.baseClasses.join(" ");
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
    let newChat = (
      <div className={classes} id="newChatActiveBox">
        {/* <div className="row mx-0 newChatActiveBox" id="newChatActiveBox"> */}
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
        <SearchInputBox casualSearchBox={true} placeholder="Search Contacts" />
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

    let makeNewGroup = (
      <div className={classes} id="newChatActiveBox">
        {/* <div className="row mx-0 newChatActiveBox" id="newChatActiveBox"> */}
        <header className="col-12 display-content-area-header px-0">
          <div className="newChatActive">
            <div className="row">
              <div className="col-12 d-flex h-59 align-items-center">
                <span className="newChatLeftArrow" onClick={this.toggleHandlerOut}>
                  <i className="fas fa-arrow-left" />
                </span>
                <span className="newChatHeader">Add Group Participants</span>
              </div>
            </div>
          </div>
        </header>
        <section className="col-12 px-0 chat-section">
          <SearchInputBox casualSearchBox={false} placeholder="Type Contact Name" />
          <div className="row mx-0">
            {/** all chats will append here from API */}
            {/** log-of-chats-new-chat-active will be true when active else log-of-chats toggle*/}
            <div className="col-12 px-0 log-of-chats-new-chat-active">
              <div className="row mx-0">
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

    // let display = null;
    // if (this.props.makeNewGroup) {
    //   display = this.props.makeNewGroup ? makeNewGroup : null;
    // } else if (this.props.defaultLeftHiddenChats) {
    //   display = this.props.defaultLeftHiddenChats ? newChat : null;
    // }
    switch (true) {
      case this.props.makeNewGroup: {
        return makeNewGroup;
      }
      case this.props.defaultLeftHiddenChats: {
        return newChat;
      }
    }
    // return display;
  }
}

export default HiddenComponentLeftSide;
