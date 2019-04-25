import React from "react";
import "../../../App.scss";

const MessageLogs = props => {
  return (
    <div className="sender-chat-logs-main">
      <div className="sender-chat-logs d-flex flex-column" id="message1List">
        {props.messageLogs
          ? props.messageLogs.map((k, i) => (
              <li key={i} style={{ listStyleType: "none" }} id={"message" + i}>
                <div className="message">
                  <div className="arrowOnFirstMessage" />
                  <span> {k.textMessage} </span>
                  <span className="time-and-tick text-right">
                    <span> 12: 36 </span>
                    <span>
                      <img src={require("../../../assets/svg/double-click.svg")} alt="double-tick" className="double-tick" />
                    </span>
                  </span>
                </div>
              </li>
            ))
          : null}
      </div>
    </div>
  );
};

export default MessageLogs;
