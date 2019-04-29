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
      <div className="chat-1 w-100 d-flex rightSlider__userInfo__box" onMouseEnter={this.onHover} onMouseLeave={this.offHover}>
        <div className="leftChat__user__image">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Carl-Benz_coloriert.jpg"
            alt="karl-benz"
            className="logged__in__user__image__49px"
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
                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s
              </div>
              <div className="leftChat__messageLeftToRead noOverFlow">
                <span className="sender-notification-count">2</span>
                <span onClick={this.showMenu} className="rollback-on-hover">
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
