import React from "react";

const ArchievedChat = props => {
  return (
    <div className={props.classes} id="leftSlider__chatActiveBox">
      <header className="col-12 px-0">
        <div className="newChatActive">
          <div className="row">
            <div className="col-12 d-flex h-59 align-items-center">
              <span className="newChatLeftArrow" onClick={props.toggleHandlerOut}>
                <i className="fas fa-arrow-left" />
              </span>
              <span className="newChatHeader">Archived Chats</span>
            </div>
          </div>
        </div>
      </header>
      <section className="col-12 px-0 leftSide__chat__section">
        <div className="row mx-0">
          <div className="col-12 px-0 leftSide__log__of__chats new-chat-active profile_section">
            <div className="row mx-0">
              <div className="archievedChatSection w-100">
                <div className="d-flex justify-content-center">
                  <div className="archieved-chats-cirle">
                    <div className="h-100 d-flex justify-content-center align-items-center">
                      <img src={require("../../../assets/svg/archieved-chat.svg")} alt="archieved-chat" width="70" height="70" />
                    </div>
                  </div>
                </div>
                <div className="no-archieved-chats text-center">No Archieved Chats</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArchievedChat;
