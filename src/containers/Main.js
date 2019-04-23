import React from "react";
import "../App.scss";
import RightSide from "./RightSide/RightSide";
import LeftSide from "./LeftSide/LeftSide";
import HiddenComponentRightSide from "./HiddenComponent/HiddenComponentRightSide";
import HiddenComponentLeftSide from "./HiddenComponent/HiddenComponentLeftSide";

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

      /** props set for leftSideHiddenContainer start */
      setLeftHiddenComponentVisible: false,
      /** props set for leftSideHiddenContainer end */

      /** left dropdown -> to hidden left component toggle start */
      makeNewGroup: false,
      defaultLeftHiddenChats: false,
      /** left dropdown -> to hidden left component toggle end */
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

  setLeftHiddenComponentVisibleFn = () => {
    this.setState({ setLeftHiddenComponentVisible: true });
  };

  makeNewGroupFn = () => {
    this.setState({ makeNewGroup: true });
  };

  defaultLeftHiddenChatsFn = () => {
    this.setState({ defaultLeftHiddenChats: true });
  };

  render() {
    console.log(this.state.makeNewGroup);
    return (
      <div className="col-12 px-0">
        <div className="green-box">
          <div className="row mx-0 bgColor">
            <div className="display-content-area d-flex">
              <div className="display-content-area-child">
                {/** d-flex enables flexbox -> 2 parts of screen */}
                {/** divide screen into two parts -> chat-people and chat logs */}

                {this.state.setLeftHiddenComponentVisible ? (
                  <HiddenComponentLeftSide
                    setLeftHiddenComponentVisible={this.state.setLeftHiddenComponentVisible}
                    squeezeLayoutBoolean={this.state.squeezeLayoutBoolean}
                    setHiddenComponentTrue={this.setHiddenComponentTrue}
                    setHiddenComponentFalse={this.setHiddenComponentFalse}
                    makeNewGroup={this.state.makeNewGroup}
                    defaultLeftHiddenChats={this.state.defaultLeftHiddenChats}
                  />
                ) : null}

                <LeftSide
                  leftDropdown={this.state.leftDropdown}
                  squeezeLayoutBoolean={this.state.squeezeLayoutBoolean}
                  addClassesLeftSide={this.state.addClassesLeftSide}
                  isTextAMessageFn={this.isTextAMessageFn}
                  isTextAStatus={this.state.isTextAStatus}
                  isChatARegularMessage={this.state.isChatARegularMessage}
                  isChatARegularMessageFn={this.isChatARegularMessageFn}
                  setLeftHiddenComponentVisible={this.state.setLeftHiddenComponentVisible}
                  setLeftHiddenComponentVisibleFn={this.setLeftHiddenComponentVisibleFn}
                  makeNewGroupFn={this.makeNewGroupFn}
                  defaultLeftHiddenChatsFn={this.defaultLeftHiddenChatsFn}
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
                  <HiddenComponentRightSide
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
