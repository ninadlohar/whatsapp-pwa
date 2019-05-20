import React from "react";
import SearchInputBox from "../../Common__UI__Components/Utils/SearchInputBox/SearchInputBox";
import DropDown from "../../Common__UI__Components/DropDown/DropDown";
import DefaultLoadedChat from "../../Common__UI__Components/ChatTypes/DefaultLoadedChat/DefaultLoadedChat";
import MobileView from "../../MobileView/MobileView";

class LeftSide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseClasses: ["col-xl-3-5", "leftSide__chat__window__parent", "px-0"],
      squeezeLayoutBoolean: this.props.squeezeLayoutBoolean,
      isChatARegularMessage: this.props.isChatARegularMessage,
      value: 0,
      mobileViewDropDown: true,
      enableAnimationOnButton: false,
      setSearchActive: false
    };
    this.toggleHandlerIn = this.toggleHandlerIn.bind(this);
  }

  componentDidMount() {
    this.setState({ isChatARegularMessage: true });
    this.props.isChatARegularMessageFn();

    var height = document.getElementById("page").clientHeight;
    var inputBox = document.getElementById("input-box").clientHeight;
    var headheight = document.getElementById("head").clientHeight;
    var content = document.getElementById("content");
    var step1 = height - headheight;
    var availableheight = step1 - inputBox;
    content.style.height = availableheight + "px";
    content.style.overflow = "scroll";

    window.addEventListener("resize", function() {
      var height = document.getElementById("page").clientHeight;
      var inputBox = document.getElementById("input-box").clientHeight;
      var headheight = document.getElementById("head").clientHeight;
      var content = document.getElementById("content");
      var step1 = height - headheight;
      var availableheight = step1 - inputBox;
      content.style.height = availableheight + 15 + "px";
      content.style.overflow = "scroll";

      if (document.getElementById("page").clientWidth < 768) {
        step1 = height - headheight;
        availableheight = step1 - inputBox;
        content.style.height = availableheight + 65 + "px";
        content.style.overflow = "scroll";
      }
    });

    if (document.getElementById("page").clientWidth < 768) {
      step1 = height - headheight;
      availableheight = step1 - inputBox;
      content.style.height = availableheight + 65 + "px";
      content.style.overflow = "scroll";
    }
    if (document.getElementById("page").clientWidth > 768) {
      availableheight = step1 - inputBox;
      content.style.height = availableheight + 15 + "px";
      content.style.overflow = "scroll";
    }
  }

  toggleHandlerIn() {
    document.getElementById("leftSlider__chatActiveBox").style.transform = "translate(0%, 0)";
  }

  handleMenuClick = screen => {
    this.props.setLeftSliderScreen(screen);
  };

  setDrawer = screen2 => {
    this.setState({ currentScreen2: screen2 }, () => {
      this.setDrawerFn.toggleDrawer();
    });
  };

  render() {
    let mobileLeftSide = (
      <MobileView
        squeezeLayoutBoolean={this.props.squeezeLayoutBoolean}
        setDrawer={this.setDrawer}
        onRef2={ref2 => (this.setDrawerFn = ref2)}
        currentScreen2={this.state.currentScreen2}
      />
    );
    let desktopLeftSide = (
      <div className="mx-0" id="message-logs">
        <header className="col-12 leftSide__header px-0" id="head">
          <div className="row mx-0">
            <div className="col-3 px-0">
              <div className="px-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Carl-Benz_coloriert.jpg"
                  alt="karl-benz"
                  className="header__image"
                />
              </div>
            </div>
            <div className="col-9">
              <div className="row mx-0 justify-content-end align-items-center h-100">
                <div className="px-3">
                  <img src={require("../../../assets/svg/charging-circle.svg")} alt="status-v3" height="24" width="18" />
                </div>
                <div className="px-3" onClick={() => this.props.setLeftSliderScreen("defaultView")}>
                  <img src={require("../../../assets/svg/message-ballon.svg")} alt="message-ballon" height="20" width="20" />
                </div>
                <DropDown leftDropdown={this.props.leftDropdown} classes="fas fa-ellipsis-v" handleMenuClick={this.handleMenuClick} />
              </div>
            </div>
          </div>
        </header>
        <SearchInputBox placeholder="Search or start new Chat" searchBoxType="withSearchBox" />
        <section className="col-12 px-0 leftSide__chat__section">
          <div className="row mx-0">
            <div className="col-12 px-0" id="content">
              <div className="row mx-0">
                <DefaultLoadedChat />
                <DefaultLoadedChat />
                <DefaultLoadedChat />
                <DefaultLoadedChat />
                <DefaultLoadedChat />
                <DefaultLoadedChat />
                <DefaultLoadedChat />
                <DefaultLoadedChat />
                <DefaultLoadedChat />
                <DefaultLoadedChat />
              </div>
            </div>
          </div>
        </section>
      </div>
    );

    let appendClasses = this.state.squeezeLayoutBoolean
      ? this.state.baseClasses.concat(this.props.addClassesLeftSide).join(" ")
      : this.state.baseClasses.join(" ");

    return (
      <div className={appendClasses} id="col-xl-3-5">
        <div className="leftSide__chat__window__child">{this.props.mobile ? mobileLeftSide : desktopLeftSide}</div>
      </div>
    );
  }
}

export default LeftSide;
