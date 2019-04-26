import React from "react";
import SearchInputBox from "../../../components/SearchInputBox/SearchInputBox";
import NewUserChat from "../../../components/TypesOfUserChats/NewUserChat";

const NewGroup = props => {
  let hashTag = (
    <div className="hashTag w-100">
      <div className="hashTag_child">#</div>
    </div>
  );
  return (
    <div className={props.classes} id="newChatActiveBox">
      <header className="col-12 px-0">
        <div className="newChatActive">
          <div className="row">
            <div className="col-12 d-flex h-59 align-items-center">
              <span className="newChatLeftArrow" onClick={props.toggleHandlerOut}>
                <i className="fas fa-arrow-left" />
              </span>
              <span className="newChatHeader">Add Group Participants</span>
            </div>
          </div>
        </div>
      </header>
      <section className="col-12 px-0 chat-section">
        <SearchInputBox searchBoxType="searchBoxWithLine" placeholder="Type Contact Name" />
        <div className="row mx-0">
          {/** all chats will append here from API */}
          {/** log-of-chats-new-chat-active will be true when active else log-of-chats toggle*/}
          <div className="col-12 px-0 log-of-chats new-chat-active">
            <div className="row mx-0">
              {hashTag}
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
};

export default NewGroup;
