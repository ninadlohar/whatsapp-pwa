import React from "react";

class DefaultLoadedChat extends React.Component {
  state = {
    onHoverState: false,
    showMenu: false
  };

  onHover = () => {
    this.setState({ onHoverState: true }, () => {
      document.getElementById("rollback-on-hover").style.transform = "translate(-6px, 0)";
      document.getElementById("rollback-on-hover").style.transition = "0.3s";
    });
  };
  offHover = () => {
    this.setState({ onHoverState: false });
  };
  showMenu = event => {
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
        <div className="chat-dropdown-links">Archeive Chat</div>
        <div className="chat-dropdown-links">Mute</div>
        <div className="chat-dropdown-links">Delete Chat</div>
        <div className="chat-dropdown-links">Pin Chat</div>
        <div className="chat-dropdown-links">Mark as Unread</div>
      </div>
    );

    let dropdown = this.state.showMenu ? chatDropdownMenu : null;
    let downArrow = <i className="fas fa-chevron-down" />;
    let addChevron = this.state.onHoverState ? downArrow : null;

    return (
      <div
        className="chat-1 w-100 d-flex rightSlider__userInfo__box"
        onMouseEnter={this.onHover}
        onMouseLeave={this.offHover}
      >
        <div className="leftChat__user__image">
          <img
            src={require("../../../assets/images/220px-Chris_Hemsworth_as_Thor.jpg")}
            alt="mclaren"
            className="sender__image__left__window"
          />
        </div>
        <div className="leftChat__user__details">
          <div className="leftChat__senderName___time">
            <div className="row mx-0">
              <div className="leftChat__senderName noOverFlow">NiKO</div>
              <div className="leftChat__time noOverFlow">08:33 PM</div>
            </div>
          </div>
          <div className="leftChat__message___messageLeftToRead">
            <div className="row mx-0">
              <div className="leftChat__message noOverFlow">
                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s
              </div>
              <div className="leftChat__messageLeftToRead noOverFlow">
                <span className="sender-notification-count">2</span>
                <span onClick={this.showMenu} className="rollback-on-hover" id="rollback-on-hover">
                  {addChevron}
                  {dropdown}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DefaultLoadedChat;
