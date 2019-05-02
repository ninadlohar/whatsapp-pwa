import React from "react";
import "../App.scss";
import RightSide from "./RightSide/RightSide";
import LeftSide from "./LeftSide/LeftSide";
import HiddenComponentRightSide from "./HiddenComponent/HiddenComponentRightSide";
import HiddenComponentLeftSide from "./HiddenComponent/HiddenComponentLeftSide";
// import Aux from "../hoc/Aux";

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

      width: window.innerWidth,

      hiddenClass: ["DOMChangedHiddenSide"],
      addClassesLeftSide: ["DOMChangedLeftSide_P-1301", "DOMChangedLeftSide"],
      addClassesRightSide: ["DOMChangedRightSide_P-1301", "DOMChangedRightSide"]
    };
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  isChatWithStatusAndAdminFn = () => {
    this.setState({ isChatWithStatusAndAdmin: true });
  };
  isChatARegularMessageFn = () => {
    this.setState({ isChatARegularMessage: true });
  };
  isChatWithStatusFn = () => {
    this.setState({ isChatWithStatus: true });
  };

  isTextAStatusFn = () => {
    this.setState({ isTextAStatus: false });
  };

  isTextAMessageFn = () => {
    this.setState({ isTextAStatus: true });
  };

  openDrawer = () => {
    this.setState({ squeezeLayoutBoolean: true });
  };

  closeDrawer = () => {
    this.setState({ squeezeLayoutBoolean: false });
  };

  setLeftSliderScreen = screen => {
    this.setState({ currentScreen: screen }, () => {
      this.LeftDrawer.toggleHandlerIn();
    });
  };

  setRightSliderScreen = screen1 => {
    this.openDrawer();
    this.setState({ currentScreen1: screen1 }, () => {
      this.RightDrawer.slideInToggler();
    });
  };

  render() {
    console.log(this.state.squeezeLayoutBoolean);
    const { width } = this.state;
    const mobile = width < 768;
    if (mobile) {
      return (
        <div className="col-12 px-0">
          <div className="green-box">
            <div className="row mx-0 bgColor">
              <div className="display-content-area d-flex" id="page">
                <div className="display-content-area-child">
                  <HiddenComponentLeftSide
                    onRef={ref => (this.LeftDrawer = ref)}
                    squeezeLayoutBoolean={this.state.squeezeLayoutBoolean}
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
                    setLeftSliderScreen={this.setLeftSliderScreen}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="col-12 px-0">
          <div className="green-box">
            <div className="row mx-0 bgColor">
              <div className="display-content-area d-flex" id="page">
                <div className="display-content-area-child">
                  <HiddenComponentLeftSide
                    onRef={ref => (this.LeftDrawer = ref)}
                    squeezeLayoutBoolean={this.state.squeezeLayoutBoolean}
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
                    setLeftSliderScreen={this.setLeftSliderScreen}
                  />

                  <RightSide
                    rightDropdown={this.state.rightDropdown}
                    addClassesRightSide={this.state.addClassesRightSide}
                    squeezeLayoutBoolean={this.state.squeezeLayoutBoolean}
                    setRightSliderScreen={this.setRightSliderScreen}
                  />

                  <HiddenComponentRightSide
                    onRef1={ref1 => (this.RightDrawer = ref1)}
                    squeezeLayoutBoolean={this.state.squeezeLayoutBoolean}
                    hiddenClass={this.state.hiddenClass}
                    closeDrawer={this.closeDrawer}
                    searchComponent={this.state.searchComponent}
                    isTextAStatus={this.state.isTextAStatus}
                    isTextAStatusFn={this.isTextAStatusFn}
                    isChatWithStatusAndAdmin={this.state.isChatWithStatusAndAdmin}
                    isChatWithStatusAndAdminFn={this.isChatWithStatusAndAdminFn}
                    currentScreen1={this.state.currentScreen1}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Main;
