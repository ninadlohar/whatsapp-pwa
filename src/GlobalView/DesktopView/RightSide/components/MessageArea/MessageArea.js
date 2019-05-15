import React from "react";
import "../../../../../App.scss";

const MessageArea = props => {
  return (
    <div className="rightSide__chat__logScreen__parent">
      <div className="rightSide__chat__logScreen__child d-flex flex-column" id="message1List">
        {props.messageLogs
          ? props.messageLogs.map((k, i) => (
              <li key={i} style={{ listStyleType: "none" }} id={"list" + i}>
                <div className="rightSide__chat__sender__message">
                  <div className="rightSide__chat__sender__firstMessage" />
                  <span> {k.textMessage} </span>
                  <span className="time-and-tick text-right">
                    <span> 12: 36 </span>
                    <span>
                      <img
                        src={require("../../../../../assets/svg/double-click.svg")}
                        alt="double-tick"
                        className="double-tick"
                      />
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

export default MessageArea;
