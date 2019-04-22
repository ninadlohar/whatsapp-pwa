import React from "react";

class NewUserChat extends React.Component {
  render() {
    return (
      <div
        className="chat-1 w-100 py-2 d-flex single-user-chat-box pr-3"
        onMouseEnter={this.props.onHover}
        onMouseLeave={this.props.offHover}
      >
        <div className="sender-image-padding py-1">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Carl-Benz_coloriert.jpg"
            alt="karl-benz"
            className="sender-user-image"
          />
        </div>
        <div className="remaining py-1 px-0">
          <div className="row mx-0">
            <div className="col-12 chat-section-sending-user-data sender-name px-0">
              <span>9139396939</span>
            </div>
          </div>
          <div className="row mx-0">
            <div className="col-12 chat-section-sending-user-data available px-0">Available</div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewUserChat;
