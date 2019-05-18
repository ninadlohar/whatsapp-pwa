import React from "react";

class ContactDataChatWStatus extends React.Component {
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
      <div
        className="chat-1 w-100 d-flex rightSlider__userInfo__box"
        onMouseEnter={this.onHover}
        onMouseLeave={this.offHover}
      >
        <div className="leftChat__user__image">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Carl-Benz_coloriert.jpg"
            alt="karl-benz"
            className="logged__in__user__image__49px"
          />
        </div>
        <div className="leftChat__user__details">
          <div className="leftChat__senderName___groupAdmin">
            <div className="row mx-0">
              <div className="leftChat__senderName__asAdmin noOverFlow">
                NiKO
              </div>
              <div className="leftChat__groupAdmin noOverFlow">
                <span className="group-admin">Group Admin</span>
              </div>
            </div>
          </div>
          <div className="leftChat__message___messageLeftToRead">
            <div className="row mx-0">
              <div className="leftChat__message noOverFlow">I am a status</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactDataChatWStatus;
