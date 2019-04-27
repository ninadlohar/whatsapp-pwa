import React from "react";
import NewUserChat from "../../../components/TypesOfUserChats/NewUserChat";
import SearchInputBox from "../../../components/SearchInputBox/SearchInputBox";

class DefaultHiddenLeftChat extends React.Component {
  state = {
    baseClasses: ["row", "mx-0", "leftSlider__chatActiveBox"],
    hiddenLeftClass: ["DOMChangedLeftHiddenSide"]
  };
  render() {
    /** if the whole DOM is manipulated with the hidden right screen popped in then this classes is executed */
    let classes = this.props.squeezeLayoutBoolean
      ? this.state.baseClasses.concat(this.state.hiddenLeftClass).join(" ")
      : this.state.baseClasses.join(" ");
    let frequentlyContacted = (
      <div className="chat-1 w-100 py-4 d-flex rightSlider__userInfo__box pr-3">
        <div className="rightSlider__userInfo__box d-flex align-items-center frequently-contacted">FREQUENTLY CONTACTED</div>
      </div>
    );
    let newGroup = (
      <div className="chat-1 w-100 py-2 d-flex rightSlider__userInfo__box pr-3">
        <div className="rightSlider__userInfo__image__padding py-1">
          <img src={require("../../../assets/images/new-group.png")} alt="new-group" className="logged__in__user__image__49px" />
        </div>
        <div className="remaining d-flex align-items-center">New Group</div>
      </div>
    );
    let newChat = (
      <div className={classes} id="leftSlider__chatActiveBox">
        <header className="col-12 display-content-area-header px-0">
          <div className="leftSlider__header__green_box">
            <div className="row">
              <div className="col-12 d-flex custom__59height align-items-center">
                <span className="leftSlider__back__arrow" onClick={this.props.toggleHandlerOut}>
                  <i className="fas fa-arrow-left" />
                </span>
                <span className="leftSlider__greenBox__header">New Chat</span>
              </div>
            </div>
          </div>
        </header>
        <SearchInputBox searchBoxType="withSearchBox" placeholder="Search Contacts" />
        <section className="col-12 px-0 leftSide__chat__section">
          <div className="row mx-0">
            <div className="col-12 px-0 leftSide__log__of__chats ">
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
    return newChat;
  }
}

export default DefaultHiddenLeftChat;
