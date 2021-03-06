import React from "react";

class NewUserChat extends React.Component {
  render() {
    return (
      <div className=" w-100 d-flex userInfo__box" onMouseEnter={this.props.onHover} onMouseLeave={this.props.offHover}>
        <div className="leftChat__user__image">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Carl-Benz_coloriert.jpg"
            alt="karl-benz"
            className="sender__image__left__window"
          />
        </div>
        <div className="leftChat__user__details">
          <div className="leftChat__senderName___time">
            <div className="row mx-0">
              <div className="leftChat__senderName noOverFlow">NiKO</div>
            </div>
          </div>
          <div className="leftChat__message___messageLeftToRead">
            <div className="row mx-0">
              <div className="leftChat__message noOverFlow">9139396939</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewUserChat;
