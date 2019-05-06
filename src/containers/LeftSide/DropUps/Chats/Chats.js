import React from "react";
import Auxilliary from "../../../../hoc/Auxillary";
import MainBottomDrawer from "../BottomDrawer";
import Switch from "@material-ui/core/Switch";

class Chats extends React.Component {
  state = {
    setSearchActive: false,
    checkedA: false
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
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

  render() {
    return (
      <Auxilliary>
        <div>
          <header className="col-12 mobile__view__starred__Messages__Header py-2" id="head">
            <div className="row mx-0 w-100">
              <div className="col-12 px-0 py-1 d-flex">
                <div className="row mx-0 w-100">
                  <div
                    className="mobileView__left__arrow d-flex align-items-center justify-content-start"
                    onClick={this.props.closeDrawer}
                  >
                    <img src={require("../../../../assets/svg/left.svg")} width="24" height="24" alt="left-arrow" />
                  </div>
                  <div className="mobileView__selectContactSection pl-3">
                    <div className="mobile__newChat__selectedContact">Chats</div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="col-12 px-0">
            <div className="row mx-0">
              <div className="col-12 py-3 d-flex">
                <div className="d-flex align-items-center pl-4 pr-4" />
                <div className="d-flex align-items-center w-100 pl-2">
                  <div className="custom__width85">
                    <div className="mobile__settings__header__name">Enter is Send</div>
                    <div className="mobile__settings__header__status">Enter key will send your message</div>
                  </div>
                  <div>
                    <Switch checked={this.state.checkedA} onChange={this.handleChange("checkedA")} value="checkedA" />
                  </div>
                </div>
              </div>

              <div className="col-12 py-3 d-flex">
                <div className="d-flex align-items-center pl-4 pr-4" />
                <div className="d-flex align-items-center w-100 pl-2">
                  <div className="custom__width85">
                    <div className="mobile__settings__header__name">Media Visibility</div>
                    <div className="mobile__settings__header__status">
                      Show newly downloaded media on your phone's gallery
                    </div>
                  </div>
                  <Switch checked={this.state.checkedA} onChange={this.handleChange("checkedA")} value="checkedA" />
                </div>
              </div>
              <div className="col-12 py-3 d-flex">
                <div className="d-flex align-items-center pl-4 pr-4" />
                <div className="d-flex align-items-center w-100 pl-2">
                  <div>
                    <div className="mobile__settings__header__name">Font Size</div>
                    <div className="mobile__settings__header__status">Medium</div>
                  </div>
                </div>
              </div>
              <div className="col-12 py-3 d-flex mobile__settings__basicInfo__section">
                <div className="d-flex align-items-center pl-4 pr-4" />
                <div className="d-flex align-items-center w-100 pl-2">
                  <div>
                    <div className="mobile__settings__header__name">App Language</div>
                    <div className="mobile__settings__header__status">Phone's language(English)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 py-3 d-flex">
            <div className="d-flex align-items-center pl-3 pr-4">
              <img src={require("../../../../assets/svg/gallery.svg")} alt="gallery" height="18" width="18" />
            </div>
            <div className="d-flex align-items-center w-100">
              <div>
                <div className="mobile__settings__header__name">Wallpaper</div>
              </div>
            </div>
          </div>
          <div className="col-12 py-3 d-flex">
            <div className="d-flex align-items-center pl-3 pr-4">
              <img
                src={require("../../../../assets/svg/cloud-storage-uploading-option.svg")}
                alt="message-ballon"
                height="18"
                width="18"
              />
            </div>
            <div className="d-flex align-items-center w-100">
              <div>
                <div className="mobile__settings__header__name">Chat Backup</div>
              </div>
            </div>
          </div>
          <div className="col-12 py-3 d-flex">
            <div className="d-flex align-items-center pl-3 pr-4">
              <img src={require("../../../../assets/svg/history.svg")} alt="message-ballon" height="18" width="18" />
            </div>
            <div className="d-flex align-items-center w-100">
              <div>
                <div className="mobile__settings__header__name">Chat History</div>
              </div>
            </div>
          </div>
        </div>
        {/* <MainBottomDrawer onOpen={this.setAccountTrue} open={this.state.account}>
          <Account setAccountFalse={this.setAccountFalse} />
        </MainBottomDrawer>
        <MainBottomDrawer onOpen={this.setHelpTrue} open={this.state.Help}>
          <Help setHelpFalse={this.setHelpFalse} />
        </MainBottomDrawer> */}
      </Auxilliary>
    );
  }
}

export default Chats;
