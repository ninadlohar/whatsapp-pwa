import React from 'react';
import Auxillary from '../../../hoc/Auxillary';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";

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

class MobileMedia extends React.Component {
  state = {
    value: 0,

  }
  handleChangeIndex = index => {
    this.setState({ value: index });
    console.log(index);
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  componentWithoutSearchBar = (header, leftHeight) => {
    var height = document.getElementById("page").clientHeight;
    var headheight = header.clientHeight;
    var content = leftHeight;
    var step1 = height - headheight;
    var availableheight = step1;
    content.style.marginTop = headheight + "px";
    content.style.height = availableheight + "px";
    content.style.overflow = "auto";
  };
  componentDidMount() {
    let header = document.getElementById("mobile__media__head")
    let content = document.getElementById("mobile__media__section")
    this.componentWithoutSearchBar(header, content)
  }
  render() {
    const { classes, theme } = this.props;
    const { value } = this.state;
    return (
      <Auxillary>
        <header
          className="col-12 fixed-top mobile__view__starred__Messages__Header py-2"
          id="mobile__media__head"
        >
          <div className="row mx-0 w-100">
            <div className="col-12 px-0 py-1 d-flex">
              <div className="row mx-0 w-100">
                <div
                  className="mobileView__left__arrow d-flex align-items-center justify-content-start"
                  onClick={this.props.closeDrawer}
                >
                  <img src={require("../../../assets/svg/left.svg")} width="24" height="24" alt="left-arrow" />
                </div>
                <div className="mobileView__selectContactSection pl-3">
                  <div className="mobile__newChat__selectedContact">9139396939</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mx-0" id="input-box">
            <div className="col-12 pb-1 d-flex camera">
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
                      label="MEDIA"
                    />
                    <Tab
                      disableRipple
                      classes={{
                        root: classes.tabRoot,
                        selected: classes.tabSelected
                      }}
                      label="DOCUMENTS"
                    />
                    <Tab
                      disableRipple
                      classes={{
                        root: classes.tabRoot,
                        selected: classes.tabSelected
                      }}
                      label="LINKS"
                    />
                  </Tabs>
                </AppBar>
              </div>
            </div>
          </div>
        </header>
        <div className="mx-0" id="mobile__media__section">
          <section className="col-12 px-0 leftSide__chat__section">
            <div className="row mx-0" style={{ height: "100vh" }}>
              <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={this.state.value}
                onChangeIndex={this.handleChangeIndex}
                style={{ width: "100vw" }}
              >
                <TabContainer dir={theme.direction}>
                  <div className="col-12 px-0 d-flex leftSide__log__of__chats" id="content">
                    <div className="row mx-0">
                      No Media Found
                    </div>
                  </div>
                </TabContainer>
                <TabContainer dir={theme.direction}>
                  <div className="col-12 px-0  leftSide__log__of__chats" id="content8" name="swipe">
                    <div className="row mx-0">
                      No Doucments found
                    </div>
                  </div>
                </TabContainer>
                <TabContainer dir={theme.direction}>
                  <div className="col-12 px-0  leftSide__log__of__chats" id="content9" name="swipe">
                    <div className="row mx-0">
                      No Links Found
                    </div>
                  </div>
                </TabContainer>
              </SwipeableViews>
            </div>
          </section>
        </div>

      </Auxillary>
    )
  }
}

export default withStyles(styles, { withTheme: true })(MobileMedia);
