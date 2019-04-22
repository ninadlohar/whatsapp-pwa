import React from "react";

class ContactDataChatWithStataus extends React.Component {
  state = {
    onHoverState: false
  };
  onHover = () => {
    this.setState({ onHoverState: true });
  };
  offHover = () => {
    this.setState({ onHoverState: false });
  };

  render() {
    return (
      <div className="chat-1 w-100 py-2 d-flex single-user-chat-box pr-3" onMouseEnter={this.onHover} onMouseLeave={this.offHover}>
        <div className="sender-image-padding py-1">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Carl-Benz_coloriert.jpg"
            alt="karl-benz"
            className="sender-user-image"
          />
        </div>
        <div className="remaining py-1 px-0">
          <div className="row mx-0">
            <div className="d-flex w-100">
              <div className="col-xl-8 col-lg-7 chat-section-sending-user-data sender-name px-0">
                <span>Angels Do Exist</span>
              </div>
              <div className="col-xl-4 col-lg-5 px-0 text-center">
                <span className="group-admin">Group Admin</span>
              </div>
            </div>
          </div>
          <div className="row mx-0">
            <div className="col-10 chat-section-sending-user-data sender-message px-0">
              <span>I am a status</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactDataChatWithStataus;
