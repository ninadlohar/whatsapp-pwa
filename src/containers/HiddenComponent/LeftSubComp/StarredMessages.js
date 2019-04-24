import React from "react";
import DropDown from "../../../components/dropDown";

const StarredMessages = props => {
  return (
    <div className={props.classes} id="newChatActiveBox">
      <header className="col-12 px-0">
        <div className="newChatActive">
          <div className="row mx-0">
            <div className="col-10 d-flex h-59 align-items-center px-0">
              <span className="newChatLeftArrow" onClick={props.toggleHandlerOut}>
                <i className="fas fa-arrow-left" />
              </span>
              <span className="newChatHeader">Starred Messages</span>
            </div>
            <div className="col-2 d-flex align-items-center px-0 justify-content-end">
              <div className=" row mx-0">
                <DropDown starredMessagesDropdown={true} classes="fas fa-ellipsis-v" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="col-12 px-0 chat-section">
        <div className="row mx-0">
          {/** all chats will append here from API */}
          {/** log-of-chats-new-chat-active will be true when active else log-of-chats toggle*/}
          <div className="col-12 px-0 log-of-chats new-chat-active starred-messages-container">
            <div className="row mx-0">
              <div className="col-12 starred-messages-section w-100 ">
                <div className="row mx-0 w-100 d-flex">
                  <div className="col-9 d-flex px-0">
                    <div className="starred-messages-sender-image-main">
                      <img
                        alt="sender-img-in-starred-message"
                        src={require("../../../assets/images/user-image.jpg")}
                        className="starred-messages-sender-image"
                      />
                    </div>
                    <div className="custom_pr-3">Dad</div>
                    <div>
                      <img src={require("../../../assets/svg/right.svg")} height="7" width="7" alt="right" />
                    </div>
                    <div className="custom_pl-3">You</div>
                  </div>
                  <div className="col-3 px-0 starred-messages-date-sent text-right">
                    Sunday
                    <img
                      src={require("../../../assets/svg/right-arrow.svg")}
                      alt="right-arrow-angle-1"
                      style={{ marginLeft: "8px" }}
                      height="12"
                      width="12"
                    />
                  </div>
                </div>
                <div className="rox mx-0 w-100">
                  <div className="starred-messages-main">
                    <div className="starred-messages">
                      <div className="col-12 px-0 w-100 starred-messages-date-sent font-italic">
                        <div className="row mx-0 w-100">
                          <div className="col-11 px-0">
                            <img
                              src={require("../../../assets/svg/forward-arrow.svg")}
                              alt="forward-arrow"
                              width="12"
                              height="12"
                              className="mr-1"
                            />
                            Forwarded
                          </div>
                          <div className="col-1 px-0 d-flex justify-content-end">
                            <img
                              src={require("../../../assets/svg/chevron-arrow-down.svg")}
                              alt="chevron-down"
                              width="12"
                              height="12"
                              className="mr-1"
                            />
                          </div>
                        </div>
                      </div>
                      <span>
                        सुंदर. "आई ही अशी बँक आहे जिच्या मध्ये दु:खे जमा करू शकता " " पिता असे क्रेडीट कार्ड आहे जे बॅलन्स नसतांना सुद्धा
                        खूशी देत असते " आई वडीलांचे प्रेम फूकट मिळत असते, बाकी सगळी नाती जपण्यासाठी कांही ना काहितरी किंमत अदा कराविच लागते.
                        तूमचे आई वडिल जर तूमच्यासाठी एटीएम कार्ड बनू शकतात तर, तूम्ही त्यांचे आधार कार्ड का बनू शकत नाही ?
                      </span>
                      <div className="starred-messages-date-sent text-right">
                        <img
                          src={require("../../../assets/svg/rate-star-button.svg")}
                          alt="rate-star"
                          width="10"
                          height="10"
                          className="mr-1"
                        />
                        10:16 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StarredMessages;
