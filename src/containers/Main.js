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
      searchComponent: true,
      isTextAStatus: false,
      squeezeLayoutBoolean: false,

      isChatWithStatusAndAdmin: false,
      isChatARegularMessage: false,
      isChatWithStatus: false,

      setLeftHiddenComponentVisible: false,

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

  squeezeBooleanTrue = () => {
    this.setState({ squeezeLayoutBoolean: true });
  };

  squeezeBooleanFalse = () => {
    this.setState({ squeezeLayoutBoolean: false });
  };

  setSearchComponentFalseFn = () => {
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

  setLeftSliderScreen = screen => {
    this.setState({ currentScreen: screen }, () => {
      this.LeftDrawer.toggleHandlerIn();
    });
  };

  render() {
    return (
      <div className="col-12 px-0">
        <div className="green-box">
          <div className="row mx-0 bgColor">
            <div className="display-content-area d-flex" id="page">
              <div className="display-content-area-child">
                {/** d-flex enables flexbox -> 2 parts of screen */}
                {/** divide screen into two parts -> chat-people and chat logs */}

                {/* {this.state.setLeftHiddenComponentVisible ? ( */}
                <HiddenComponentLeftSide
                  onRef={ref => (this.LeftDrawer = ref)}
                  setLeftHiddenComponentVisible={this.state.setLeftHiddenComponentVisible}
                  squeezeLayoutBoolean={this.state.squeezeLayoutBoolean}
                  squeezeBooleanTrue={this.squeezeBooleanTrue}
                  squeezeBooleanFalse={this.squeezeBooleanFalse}
                  currentScreen={this.state.currentScreen}
                />

                <LeftSide
                  leftDropdown={this.state.leftDropdown}
                  squeezeLayoutBoolean={this.state.squeezeLayoutBoolean}
                  addClassesLeftSide={this.state.addClassesLeftSide}
                  isTextAMessageFn={this.isTextAMessageFn}
                  isTextAStatus={this.state.isTextAStatus}
                  isChatARegularMessage={this.state.isChatARegularMessage}
                  isChatARegularMessageFn={this.isChatARegularMessageFn}
                  setLeftHiddenComponentVisible={this.state.setLeftHiddenComponentVisible}
                  setLeftSliderScreen={this.setLeftSliderScreen}
                />
                <RightSide
                  rightDropdown={this.state.rightDropdown}
                  addClassesRightSide={this.state.addClassesRightSide}
                  squeezeLayoutBoolean={this.state.squeezeLayoutBoolean}
                  squeezeBooleanTrue={this.squeezeBooleanTrue}
                  setSearchComponentFalseFn={this.setSearchComponentFalseFn}
                />
                {/* {this.state.squeezeLayoutBoolean ? ( */}
                <HiddenComponentRightSide
                  squeezeLayoutBoolean={this.state.squeezeLayoutBoolean}
                  hiddenClass={this.state.hiddenClass}
                  squeezeBooleanTrue={this.squeezeBooleanTrue}
                  squeezeBooleanFalse={this.squeezeBooleanFalse}
                  searchComponent={this.state.searchComponent}
                  isTextAStatus={this.state.isTextAStatus}
                  isTextAStatusFn={this.isTextAStatusFn}
                  isChatWithStatusAndAdmin={this.state.isChatWithStatusAndAdmin}
                  isChatWithStatusAndAdminFn={this.isChatWithStatusAndAdminFn}
                />
                {/* ) : null} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
