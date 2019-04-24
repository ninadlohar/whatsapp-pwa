import React from "react";
import Aux from "../hoc/Aux";

class DropDown extends React.Component {
  state = {
    showMenu: false,
    squeezeLayoutBoolean: this.props.squeezeLayoutBoolean
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
  slideInToggler = () => {
    let leftSide = document.getElementById("col-xl-3-5");
    let rightSide = document.getElementById("col-xl-6-5");
    this.setState({ squeezeLayoutBoolean: true }, () => {
      this.props.setTrue();
      this.props.setDropdownTrueFn();
      leftSide.classList.add("DOMChangedLeftSide", "DOMChangedLeftSide_P-1301");
      rightSide.classList.add("DOMChangedRightSide", "DOMChangedRightSide_P-1301");
      console.log("dropdown called");
    });
  };

  render() {
    let leftMenu = (
      <div className="left-dropdown">
        <div className="px-4 py-2" onClick={() => this.props.handleMenuClick("newGroup")}>
          New Group
        </div>
        <div className="px-4 py-2" onClick={() => this.props.handleMenuClick("profile")}>
          Profile
        </div>
        <div className="px-4 py-2" onClick={() => this.props.handleMenuClick("archievedChat")}>
          Archived
        </div>
        <div className="px-4 py-2" onClick={() => this.props.handleMenuClick("starredMessages")}>
          Starred
        </div>
        <div className="px-4 py-2" onClick={() => this.props.handleMenuClick("settings")}>
          Settings
        </div>
        <div className="px-4 py-2">Logout</div>
      </div>
    );
    let rightMenu = (
      <div className="right-dropdown">
        <div className="px-4 py-2" onClick={this.slideInToggler}>
          Contact Info
        </div>
        <div className="px-4 py-2">Selected Messages</div>
        <div className="px-4 py-2">Mute</div>
        <div className="px-4 py-2">Clear Messages</div>
        <div className="px-4 py-2">Delete Chat</div>
      </div>
    );
    let attachment = (
      <div className="main-attachment">
        <div className="main-attachment-dropdown">
          <div className="attachment-dropdown">
            <img src={require("../assets/images/gallery.png")} alt="gallery" className="attachment-icons" />
            <img src={require("../assets/images/camera.png")} alt="camera" className="attachment-icons" />
            <img src={require("../assets/images/file.jpg")} alt="file" className="attachment-icons" />
            <img src={require("../assets/images/user.png")} alt="user" className="attachment-icons" />
          </div>
        </div>
      </div>
    );

    let dropDownMenu = null;
    if (this.props.leftDropdown) {
      dropDownMenu = this.props.leftDropdown && this.state.showMenu ? leftMenu : null;
    } else if (this.props.rightDropdown) {
      dropDownMenu = this.props.rightDropdown && this.state.showMenu ? rightMenu : null;
    } else if (this.props.attachment) {
      dropDownMenu = this.props.attachment && this.state.showMenu ? attachment : null;
    }
    return (
      <Aux>
        <div className={this.state.showMenu ? "px-3 icon-active align-items-center justify-items-center d-flex" : "px-3"}>
          <i className="icon-color">
            <i className={this.props.classes} onClick={this.showMenu} />
          </i>
          {dropDownMenu}
        </div>
      </Aux>
    );
  }
}

export default DropDown;
