import React from "react";
import Auxillary from "../../../hoc/Auxillary";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Status from "../../HiddenComponent/LeftSubComp/Status";
import Calls from "../../HiddenComponent/LeftSubComp/Calls";
import SearchInputBox from "../../../components/SearchInputBox/SearchInputBox";
import DropDown from "../../../ReusableUI-Components/dropDown";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import DefaultLoadedChat from "../../../components/TypesOfUserChats/DefaultLoadedChat";
import MainBottomDrawer from "../DropUps/BottomDrawer";
import MobileNewChat from "../DropUps/MobileNewChat";
import MobileNewGroup from "../DropUps/MobileNewGroup";
import MobileNewBroadcast from "../DropUps/MobileNewBroadcast";
import MobileStarredMessages from "../DropUps/MobileStarredMessages";
import MobileSettings from "../DropUps/MobileSettings";
import MobileUserChat from "../DropUps/MobileUserChat";

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir}>
      {children}
    </Typography>
  );
}

const styles = theme => ({
  fullList: {
    width: "auto",
    height: "100vh"
  },
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
    fontWeight: "500",
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
      fontWeight: "500",
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
  },
  list: {
    width: 250
  }
});

class MobileLeftSide extends React.Component {
  state = {
    value: 0,
    mobileViewDropDown: true,
    setSearchActive: false,
    bottom: false,
    screen: null,
    newChat: false,
    newGroup: false,
    newBroadcast: false,
    starredMessages: false,
    settings: false,
    chat: false
  };

  onSearchActive = (height, inputBox, content) => {
    var step1 = height;
    var availableheight = step1 - inputBox;
    content.style.height = availableheight + 20 + "px";
    content.style.overflow = "scroll";
  };
  onResizeSearchActive = (height, inputBox, content) => {
    var step1 = height;
    var availableheight = step1 - inputBox;
    content.style.height = availableheight + 40 + "px";
    content.style.overflow = "scroll";
  };
  setSearchActiveFn = () => {
    this.setState({ setSearchActive: true }, () => {
      document.getElementById("col-xl-3-5").style.transform = "translate(0, -65px)";
      var height = document.getElementById("page").clientHeight;
      var inputBox = document.getElementById("search-input-box").clientHeight;
      var content = document.getElementById("content");
      this.onSearchActive(height, inputBox, content);
      window.addEventListener("resize", () => {
        this.onResizeSearchActive(height, inputBox, content);
      });
    });
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  setSearchDeactiveFn = () => {
    this.setState({ setSearchActive: false }, () => {
      document.getElementById("col-xl-3-5").style.transform = "translate(0px, 0px)";
    });
  };

  openChatTrue = () => {
    this.setState({ chat: true });
  };

  openChatFalse = () => {
    this.setState({ chat: false });
  };

  setNewChatTrue = () => {
    this.setState({ newChat: true });
  };

  setNewChatFalse = () => {
    this.setState({ newChat: false });
  };

  setNewGroupTrue = () => {
    this.setState({ newGroup: true });
  };

  setNewGroupFalse = () => {
    this.setState({ newGroup: false });
  };

  setNewBroadcastTrue = () => {
    this.setState({ newBroadcast: true });
  };

  setNewBroadcastFalse = () => {
    this.setState({ newBroadcast: false });
  };

  setStarredMessagesTrue = () => {
    this.setState({ starredMessages: true });
  };

  setStarredMessagesFalse = () => {
    this.setState({ starredMessages: false });
  };

  setSettingsTrue = () => {
    this.setState({ settings: true });
  };

  setSettingsFalse = () => {
    this.setState({ settings: false });
  };

  componentDidMount() {
    this.props.onRef2(this);
    var height = document.getElementById("page").clientHeight;
    var inputBox = document.getElementById("input-box").clientHeight;
    var headheight = document.getElementById("head").clientHeight;
    var content = document.getElementById("content") || document.getElementById("content1");
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
        content.style.height = availableheight + 67 + "px";
        content.style.overflow = "scroll";
      }
    });
  }

  render() {
    const { classes, theme } = this.props;
    const { value } = this.state;

    let defaultScreen = (
      <Auxillary>
        <div>
          <header className="col-12 mobile__view__header px-0" id="head">
            <div className="row mx-0">
              <div className="col-12 d-flex">
                <h3 className="brand__name py-3 mb-0">Sup</h3>
                <div className="w-100 d-flex align-items-center justify-content-end">
                  <div />
                  <div className="px-3" onClick={() => this.setSearchActiveFn()}>
                    <img
                      src={require("../../../assets/svg/mobile-search.svg")}
                      width="19"
                      height="19"
                      alt="search-svg"
                    />
                  </div>
                  <DropDown
                    classes="fas fa-ellipsis-v"
                    mobile={this.props.mobile}
                    mobileViewDropDown={this.state.mobileViewDropDown}
                    setNewGroupTrue={this.setNewGroupTrue}
                    setNewBroadcastTrue={this.setNewBroadcastTrue}
                    setStarredMessagesTrue={this.setStarredMessagesTrue}
                    setSettingsTrue={this.setSettingsTrue}
                  />
                </div>
              </div>
            </div>

            {this.state.setSearchActive ? (
              <SearchInputBox
                placeholder="Search..."
                searchBoxType="mobileSearchBox"
                setSearchDeactiveFn={this.setSearchDeactiveFn}
              />
            ) : (
              <div className="row mx-0" id="input-box">
                <div className="col-12 pb-1 d-flex camera">
                  <div className="d-flex align-items-center pt-1">
                    <img src={require("../../../assets/svg/camera.svg")} width="20" height="20" alt="camera-svg" />
                  </div>
                  <div className={classes.root}>
                    <AppBar className="demo" position="static" color="inherit">
                      <Tabs
                        variant="fullWidth"
                        value={value}
                        onChange={this.handleChange}
                        classes={{
                          root: classes.tabsRoot,
                          indicator: classes.tabsIndicator
                        }}
                      >
                        <Tab
                          disableRipple
                          classes={{
                            root: classes.tabRoot,
                            selected: classes.tabSelected
                          }}
                          label="CHATS"
                        />
                        <Tab
                          disableRipple
                          classes={{
                            root: classes.tabRoot,
                            selected: classes.tabSelected
                          }}
                          label="STATUS"
                        />
                        <Tab
                          disableRipple
                          classes={{
                            root: classes.tabRoot,
                            selected: classes.tabSelected
                          }}
                          label="CALLS"
                        />
                      </Tabs>
                    </AppBar>
                  </div>
                </div>
              </div>
            )}
          </header>
          <div className="mx-0" id="message-logs">
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
                        <div onClick={this.openChatTrue} style={{ overflow: "hidden" }}>
                          <DefaultLoadedChat />
                        </div>
                        <div onClick={this.openChatTrue} style={{ overflow: "hidden" }}>
                          <DefaultLoadedChat />
                        </div>
                        <div onClick={this.openChatTrue} style={{ overflow: "hidden" }}>
                          <DefaultLoadedChat />
                        </div>
                        <div onClick={this.openChatTrue} style={{ overflow: "hidden" }}>
                          <DefaultLoadedChat />
                        </div>
                        <div onClick={this.openChatTrue} style={{ overflow: "hidden" }}>
                          <DefaultLoadedChat />
                        </div>
                        <div onClick={this.openChatTrue} style={{ overflow: "hidden" }}>
                          <DefaultLoadedChat />
                        </div>
                        <div onClick={this.openChatTrue} style={{ overflow: "hidden" }}>
                          <DefaultLoadedChat />
                        </div>
                        <div onClick={this.openChatTrue} style={{ overflow: "hidden" }}>
                          <DefaultLoadedChat />
                        </div>
                        <div onClick={this.openChatTrue} style={{ overflow: "hidden" }}>
                          <DefaultLoadedChat />
                        </div>
                        <div onClick={this.openChatTrue} style={{ overflow: "hidden" }}>
                          <DefaultLoadedChat />
                        </div>
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
                  <div onClick={this.setNewChatTrue}>
                    <img
                      src={require("../../../assets/svg/new-chat-ballon.svg")}
                      alt="message-ballon"
                      height="18"
                      width="18"
                    />
                  </div>
                ) : null}

                {this.state.value === 1 ? (
                  <div>
                    <img
                      src={require("../../../assets/svg/square-stop-button.svg")}
                      alt="message-ballon"
                      height="16"
                      width="16"
                    />
                  </div>
                ) : null}

                {this.state.value === 2 ? (
                  <div>
                    <img
                      src={require("../../../assets/svg/emergency-call.svg")}
                      alt="message-ballon"
                      height="16"
                      width="16"
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <MainBottomDrawer onOpen={this.setNewChatTrue} open={this.state.newChat}>
          <MobileNewChat closeDrawer={this.setNewChatFalse} />
        </MainBottomDrawer>
        <MainBottomDrawer onOpen={this.setNewGroupTrue} open={this.state.newGroup}>
          <MobileNewGroup closeGroupDrawer={this.setNewGroupFalse} />
        </MainBottomDrawer>
        <MainBottomDrawer onOpen={this.setNewBroadcastTrue} open={this.state.newBroadcast}>
          <MobileNewBroadcast closeBroadcastDrawer={this.setNewBroadcastFalse} />
        </MainBottomDrawer>
        <MainBottomDrawer onOpen={this.setStarredMessagesTrue} open={this.state.starredMessages}>
          <MobileStarredMessages closeStarredMessagesDrawer={this.setStarredMessagesFalse} />
        </MainBottomDrawer>
        <MainBottomDrawer onOpen={this.setSettingsTrue} open={this.state.settings}>
          <MobileSettings closeSettingsDrawer={this.setSettingsFalse} />
        </MainBottomDrawer>
        <MainBottomDrawer onOpen={this.openChatTrue} open={this.state.chat}>
          <MobileUserChat closeDrawer={this.openChatFalse} />
        </MainBottomDrawer>
      </Auxillary>
    );

    return defaultScreen;
  }
}

export default withStyles(styles, { withTheme: true })(MobileLeftSide);
