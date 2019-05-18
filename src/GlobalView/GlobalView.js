import React from "react";
import "../App.scss";
import RightSide from "./DesktopView/RightSide/RightSide";
import LeftSide from "./DesktopView/LeftSide/LeftSide";
import RightHiddenDrawer from "./DesktopView/RightSide/RightHiddenDrawer/RightHiddenDrawer";
import LeftHiddenDrawer from "./DesktopView/LeftSide/LeftHiddenDrawer/LeftHiddenDrawer";

class GlobalView extends React.Component {
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

  setLeftSliderScreenRightDrawer = screen2 => {
    this.setState({ currentScreen2: screen2 }, () => {
      this.hiddenRightDrawer.openRightHiddenDrawer();
    });
  };

  render() {
    console.log(this.state.squeezeLayoutBoolean);
    const { width } = this.state;
    const mobile = width < 768;
    return (
      <div className="col-12 px-0">
        <div className="green-box">
          <div className="row mx-0 bgColor">
            <div className="display-content-area d-flex" id="page">
              <div className="display-content-area-child">
                <LeftHiddenDrawer
                  onRef={ref => (this.LeftDrawer = ref)}
                  squeezeLayoutBoolean={this.state.squeezeLayoutBoolean}
                  currentScreen={this.state.currentScreen}
                  currentScreen2={this.state.currentScreen2}
                  onRef3={ref3 => (this.hiddenRightDrawer = ref3)}
                  setLeftSliderScreenRightDrawer={this.setLeftSliderScreenRightDrawer}
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
                  mobile={mobile}
                />

                <RightSide
                  rightDropdown={this.state.rightDropdown}
                  addClassesRightSide={this.state.addClassesRightSide}
                  squeezeLayoutBoolean={this.state.squeezeLayoutBoolean}
                  setRightSliderScreen={this.setRightSliderScreen}
                />

                <RightHiddenDrawer
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

export default GlobalView;
