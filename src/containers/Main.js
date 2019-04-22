import React from "react";
import "../App.scss";
import RightSide from "./RightSide/RightSide";
import LeftSide from "./LeftSide/LeftSide";
import HiddenComponent from "./HiddenComponent/HiddenComponent";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftDropdown: true,
      rightDropdown: true,
      searchComponent: false,
      isTextAStatus: false,
      squeezeLayoutBoolean: false,
      /** 3 types of user chats start */
      isChatWithStatusAndAdmin: false,
      isChatARegularMessage: false,
      isChatWithStatus: false,
      /** 3 types of user chats end */
      hiddenClass: ["DOMChangedHiddenSide"],
      addClassesLeftSide: ["DOMChangedLeftSide_P-1301", "DOMChangedLeftSide"],
      addClassesRightSide: ["DOMChangedRightSide_P-1301", "DOMChangedRightSide"]
    };
  }

  /** 3 types of user chats start */
  isChatWithStatusAndAdminFn = () => {
    this.setState({ isChatWithStatusAndAdmin: true });
  };
  isChatARegularMessageFn = () => {
    this.setState({ isChatARegularMessage: true });
  };
  isChatWithStatusFn = () => {
    this.setState({ isChatWithStatus: true });
  };
  /** 3 types of user chats end */

  setHiddenComponentTrue = () => {
    this.setState({ squeezeLayoutBoolean: true });
  };

  setHiddenComponentFalse = () => {
    this.setState({ squeezeLayoutBoolean: false });
  };

  setSearchComponentTrueFn = () => {
    this.setState({ searchComponent: true });
  };
  setDropdownTrueFn = () => {
    this.setState({ searchComponent: false });
  };

  isTextAStatusFn = () => {
    this.setState({ isTextAStatus: false });
  };

  isTextAMessageFn = () => {
    this.setState({ isTextAStatus: true });
  };

  render() {
    console.log(this.state.isTextAStatus);
    return (
      <div className="col-12 px-0">
        <div className="green-box">
          <div className="row mx-0 bgColor">
            <div className="display-content-area d-flex">
              <div className="display-content-area-child">
                {/** d-flex enables flexbox -> 2 parts of screen */}
                {/** divide screen into two parts -> chat-people and chat logs */}
                <LeftSide
                  leftDropdown={this.state.leftDropdown}
                  squeezeLayoutBoolean={this.state.squeezeLayoutBoolean}
                  addClassesLeftSide={this.state.addClassesLeftSide}
                  isTextAMessageFn={this.isTextAMessageFn}
                  isTextAStatus={this.state.isTextAStatus}
                  isChatARegularMessage={this.state.isChatARegularMessage}
                  isChatARegularMessageFn={this.isChatARegularMessageFn}
                />
                <RightSide
                  rightDropdown={this.state.rightDropdown}
                  addClassesRightSide={this.state.addClassesRightSide}
                  squeezeLayoutBoolean={this.state.squeezeLayoutBoolean}
                  setHiddenComponentTrue={this.setHiddenComponentTrue}
                  setSearchComponentTrueFn={this.setSearchComponentTrueFn}
                  setDropdownTrueFn={this.setDropdownTrueFn}
                />
                {this.state.squeezeLayoutBoolean ? (
                  <HiddenComponent
                    squeezeLayoutBoolean={this.state.squeezeLayoutBoolean}
                    hiddenClass={this.state.hiddenClass}
                    setHiddenComponentTrue={this.setHiddenComponentTrue}
                    setHiddenComponentFalse={this.setHiddenComponentFalse}
                    searchComponent={this.state.searchComponent}
                    isTextAStatus={this.state.isTextAStatus}
                    isTextAStatusFn={this.isTextAStatusFn}
                    isChatWithStatusAndAdmin={this.state.isChatWithStatusAndAdmin}
                    isChatWithStatusAndAdminFn={this.isChatWithStatusAndAdminFn}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
