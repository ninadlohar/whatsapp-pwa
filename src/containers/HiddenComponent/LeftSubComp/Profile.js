import React from "react";

const Profile = props => {
  return (
    <div className={props.classes} id="newChatActiveBox">
      {/* <div className="row mx-0 newChatActiveBox" id="newChatActiveBox"> */}
      <header className="col-12 px-0">
        <div className="newChatActive">
          <div className="row">
            <div className="col-12 d-flex h-59 align-items-center">
              <span className="newChatLeftArrow" onClick={props.toggleHandlerOut}>
                <i className="fas fa-arrow-left" />
              </span>
              <span className="newChatHeader">Profile</span>
            </div>
          </div>
        </div>
      </header>
      <section className="col-12 px-0 chat-section">
        <div className="row mx-0">
          {/** all chats will append here from API */}
          {/** log-of-chats-new-chat-active will be true when active else log-of-chats toggle*/}
          <div className="col-12 px-0 log-of-chats-new-chat-active">
            <div className="row mx-0">Photo</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
