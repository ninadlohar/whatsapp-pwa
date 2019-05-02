import React from "react";
import SearchInputBox from "../../components/SearchInputBox/SearchInputBox";
import DropDown from "../../ReusableUI-Components/dropDown";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import DefaultLoadedChat from "../../components/TypesOfUserChats/DefaultLoadedChat";
import Aux from "../../hoc/Aux";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Status from "../HiddenComponent/LeftSubComp/Status";
import Calls from "../HiddenComponent/LeftSubComp/Calls";
import { CSSTransition } from "react-transition-group";

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir}>
      {children}
    </Typography>
  );
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#255d53"
  },
  tabsIndicator: {
    backgroundColor: "#FFF",
    opacity: "0.6"
  },
  tabRoot: {
    textTransform: "initial",
    minWidth: 72,
    fontWeight: "900",
    backgroundColor: "#255d53",
    marginRight: theme.spacing.unit * 4,
    fontFamily: ['"Segoe UI"'].join(","),
    "&:hover": {
      color: "#FFF"
    },
    "&$tabSelected": {
      backgroundColor: "#255d53",
      color: "#FFF",
      outline: "none",
      fontWeight: "900",
      opacity: "1"
    },
    "&:focus": {
      color: "#FFF",
      outline: "none",
      opacity: "1"
    }
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3
  }
});

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

  handleChange = (event, value) => {
    this.setState({ value });
  };

  setSearchActiveFn = () => {
    this.setState({ setSearchActive: true }, () => {
      document.getElementById("col-xl-3-5").style.transform = "translate(0, -65px)";
    });
  };

  setSearchDeactiveFn = () => {
    this.setState({ setSearchActive: false }, () => {
      document.getElementById("col-xl-3-5").style.transform = "translate(0px, 0px)";
    });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

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

  render() {
    const { classes, theme } = this.props;
    const { value } = this.state;

    let desktopHeader = (
      <Aux>
        <header className="col-12 leftSide__header px-0" id="head">
          <div className="row mx-0">
            <div className="col-3 px-0">
              <div className="px-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Carl-Benz_coloriert.jpg"
                  alt="karl-benz"
                  className="logged__in__user__image__49px"
                />
              </div>
            </div>
            <div className="col-9">
              <div className="row mx-0 justify-content-end align-items-center h-100">
                <div className="px-3">
                  <img src={require("../../assets/svg/charging-circle.svg")} alt="status-v3" height="24" width="18" />
                </div>
                <div className="px-3" onClick={() => this.props.setLeftSliderScreen("defaultView")}>
                  <img src={require("../../assets/svg/message-ballon.svg")} alt="message-ballon" height="20" width="20" />
                </div>
                <DropDown
                  mobile={this.props.mobile}
                  leftDropdown={this.props.leftDropdown}
                  classes="fas fa-ellipsis-v"
                  handleMenuClick={this.handleMenuClick}
                />
              </div>
            </div>
          </div>
        </header>
        <SearchInputBox placeholder="Search or start new Chat" searchBoxType="withSearchBox" />
      </Aux>
    );
    let mobileHeader = (
      <Aux>
        <header className="col-12 mobile__view__header px-0" id="head">
          <div className="row mx-0">
            <div className="col-12 d-flex">
              <h3 className="brand__name py-3 mb-0">Sup</h3>
              <div className="w-100 d-flex align-items-center justify-content-end">
                <div />
                <div className="px-3" onClick={() => this.setSearchActiveFn()}>
                  <img src={require("../../assets/svg/mobile-search.svg")} width="19" height="19" alt="search-svg" />
                </div>
                <DropDown classes="fas fa-ellipsis-v" mobile={this.props.mobile} mobileViewDropDown={this.state.mobileViewDropDown} />
              </div>
            </div>
          </div>

          {this.state.setSearchActive ? (
            <SearchInputBox
              placeholder="Search or start new Chat"
              searchBoxType="withSearchBox"
              setSearchDeactiveFn={this.setSearchDeactiveFn}
            />
          ) : (
            <div className="row mx-0" id="input-box">
              <div className="col-12 pb-1 d-flex camera">
                <div className="d-flex align-items-center pt-1">
                  <img src={require("../../assets/svg/camera.svg")} width="20" height="20" alt="camera-svg" />
                </div>
                <div className={classes.root}>
                  <AppBar className="demo" position="static" color="inherit">
                    <Tabs
                      variant="fullWidth"
                      value={value}
                      onChange={this.handleChange}
                      classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
                    >
                      <Tab disableRipple classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="CHATS" />
                      <Tab disableRipple classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="STATUS" />
                      <Tab disableRipple classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="CALLS" />
                    </Tabs>
                  </AppBar>
                </div>
              </div>
            </div>
          )}
        </header>
      </Aux>
    );
    let messageLogs = this.props.mobile ? (
      <div className="mx-0" id="message-logs">
        {this.props.mobile ? mobileHeader : desktopHeader}
        <section className="col-12 px-0 leftSide__chat__section">
          <div className="row mx-0" style={{ height: "100vh" }}>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={this.state.value}
              onChangeIndex={this.handleChangeIndex}
              style={{ width: "100vw" }}
            >
              <TabContainer dir={theme.direction}>
                <div className="col-12 px-0 leftSide__log__of__chats" id="content">
                  <div className="row mx-0">
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
              </TabContainer>
              <TabContainer dir={theme.direction}>
                <div className="col-12 px-0 leftSide__log__of__chats" id="content">
                  <div className="row mx-0">
                    <Status />
                    <Status />
                    <Status />
                    <Status />
                    <Status />
                    <Status />
                    <Status />
                    <Status />
                    <Status />
                  </div>
                </div>
              </TabContainer>
              <TabContainer dir={theme.direction}>
                <div className="col-12 px-0 leftSide__log__of__chats" id="content">
                  <div className="row mx-0">
                    <Calls />
                    <Calls />
                    <Calls />
                    <Calls />
                    <Calls />
                    <Calls />
                    <Calls />
                    <Calls />
                    <Calls />
                  </div>
                </div>
              </TabContainer>
            </SwipeableViews>
          </div>
        </section>
        <div className="new__chat__green__logo-main">
          <div className="new__chat__green__logo">
            {this.state.value === 0 ? (
              <img src={require("../../assets/svg/new-chat-ballon.svg")} alt="message-ballon" height="18" width="18" />
            ) : null}
            {this.state.value === 1 ? (
              <img src={require("../../assets/svg/emergency-call.svg")} alt="message-ballon" height="16" width="16" />
            ) : null}
            {this.state.value === 2 ? (
              <img src={require("../../assets/svg/square-stop-button.svg")} alt="message-ballon" height="16" width="16" />
            ) : null}
          </div>
        </div>
      </div>
    ) : (
      <div className="mx-0" id="message-logs">
        <header className="col-12 leftSide__header px-0" id="head">
          <div className="row mx-0">
            <div className="col-3 px-0">
              <div className="px-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Carl-Benz_coloriert.jpg"
                  alt="karl-benz"
                  className="logged__in__user__image__49px"
                />
              </div>
            </div>
            <div className="col-9">
              <div className="row mx-0 justify-content-end align-items-center h-100">
                <div className="px-3">
                  <img src={require("../../assets/svg/charging-circle.svg")} alt="status-v3" height="24" width="18" />
                </div>
                {/* <div className="px-3" onClick={this.toggleHandlerIn}>  */}
                <div className="px-3" onClick={() => this.props.setLeftSliderScreen("defaultView")}>
                  <img src={require("../../assets/svg/message-ballon.svg")} alt="message-ballon" height="20" width="20" />
                </div>
                <DropDown leftDropdown={this.props.leftDropdown} classes="fas fa-ellipsis-v" handleMenuClick={this.handleMenuClick} />
              </div>
            </div>
          </div>
        </header>
        {/** input box  */}
        <SearchInputBox placeholder="Search or start new Chat" searchBoxType="withSearchBox" />
        {/** chat section */}
        <section className="col-12 px-0 leftSide__chat__section">
          <div className="row mx-0">
            {/** all chats will append here from API */}
            <div className="col-12 px-0 leftSide__log__of__chats" id="content">
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
        <div className="leftSide__chat__window__child">{messageLogs}</div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(LeftSide);
