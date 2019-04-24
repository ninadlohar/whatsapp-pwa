import React from "react";

class DefaultLoadedChat extends React.Component {
  state = {
    onHoverState: false,
    showMenu: false
  };

  onHover = () => {
    this.setState({ onHoverState: true });
  };
  offHover = () => {
    this.setState({ onHoverState: false });
  };
  showMenu = event => {
    console.log("state of showMenu", this.state.showMenu);
    event.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  };
  closeMenu = () => {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener("click", this.closeMenu);
    });
  };

  render() {
    let chatDropdownMenu = (
      <div className="chat-dropdown">
        <div className="px-3 py-1">Archeive Chat</div>
        <div className="px-3 py-1">Mute</div>
        <div className="px-3 py-1">Delete Chat</div>
        <div className="px-3 py-1">Pin Chat</div>
        <div className="px-3 py-1">Mark as Unread</div>
      </div>
    );

    let dropdown = this.state.showMenu ? chatDropdownMenu : null;
    let downArrow = <i className="fas fa-chevron-down" />;
    let addChevron = this.state.onHoverState ? downArrow : null;

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
              <div className="col-9 chat-section-sending-user-data sender-name px-0">
                <span>Angels Do Exist</span>
              </div>
              <div className="col-3 px-0 text-right">
                <span className="chat-section-sending-user-data time">12:22 PM</span>
              </div>
            </div>
          </div>
          <div className="row mx-0">
            <div className="col-10 chat-section-sending-user-data sender-message px-0">
              <span>
                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s
              </span>
            </div>
            <div className="col-1 px-0 rollback-on-hover text-center">
              <span className="badge badge-success sender-notification-count">2</span>
            </div>
            <div className="col-1 px-0" onClick={this.showMenu}>
              <span>
                {addChevron}
                {dropdown}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DefaultLoadedChat;
