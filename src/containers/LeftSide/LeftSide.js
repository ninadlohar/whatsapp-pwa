import React from "react";
import SearchInputBox from "../../components/SearchInputBox/SearchInputBox";
import DropDown from "../../ReusableUI-Components/dropDown";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import DefaultLoadedChat from "../../components/TypesOfUserChats/DefaultLoadedChat";
import Aux from "../../hoc/Aux";

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgrounColor: "#255d53"
  },
  tabsIndicator: {
    backgroundColor: "#FFF",
    opacity: "1"
  },
  tabRoot: {
    textTransform: "initial",
    minWidth: 72,
    fontWeight: "900",
    marginRight: theme.spacing.unit * 4,
    fontFamily: ['"Segoe UI"'].join(","),
    "&:hover": {
      color: "#FFF"
    },
    "&$tabSelected": {
      color: "#FFF",
      outline: "none",
      fontWeight: "900",
      opacity: "1"
    },
    "&:focus": {
      color: "#FFF",
      outline: "none"
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
      mobileViewDropDown: true
    };

    this.toggleHandlerIn = this.toggleHandlerIn.bind(this);
  }

  handleChange = (event, value) => {
    this.setState({ value });
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
    const { classes } = this.props;
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
      <header className="col-12 mobile__view__header px-0" id="head">
        <div className="row mx-0">
          <div className="col-12 d-flex">
            <h3 className="brand__name py-3 mb-0">Sup</h3>
            <div className="w-100 d-flex align-items-center justify-content-end">
              <div />
              <div className="px-3">
                <img src={require("../../assets/svg/mobile-search.svg")} width="19" height="19" alt="search-svg" />
              </div>
              <DropDown classes="fas fa-ellipsis-v" mobile={this.props.mobile} mobileViewDropDown={this.state.mobileViewDropDown} />
            </div>
          </div>
        </div>
        <div className="row mx-0" id="input-box">
          <div className="col-12 pb-1 d-flex camera">
            <div className="d-flex align-items-center pt-2">
              <img src={require("../../assets/svg/camera.svg")} width="20" height="20" alt="camera-svg" />
            </div>
            {/* <div className="w-100 d-flex align-items-center"> */}
            <div className={classes.root}>
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
            </div>
          </div>
        </div>
      </header>
    );
    let messageLogs = (
      <div className="mx-0" id="message-logs">
        {this.props.mobile ? mobileHeader : desktopHeader}
        {/** input box  */}
        {/* <SearchInputBox placeholder="Search or start new Chat" searchBoxType="withSearchBox" /> */}
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
        <div className="new__chat__green__logo-main">
          <div className="new__chat__green__logo">
            <img src={require("../../assets/svg/new-chat-ballon.svg")} alt="message-ballon" height="20" width="20" />
          </div>
        </div>
      </div>
    );
    /** if hidden componenet toggle then -> pass props to display proper chatType -> then in Hidden<C> switch based on */
    /** message logs is default */
    /** only new chat will be shown on toggle. */
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

export default withStyles(styles)(LeftSide);
