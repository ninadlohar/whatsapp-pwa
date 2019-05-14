import React from "react";
import SmallDrawer from "../../../ReusableUI-Components/SmallDrawer";
import NameEdit from "./SmallDrawers/NameEdit";
import BottomDrawer from "./BottomDrawer";
import About from "./About";

class MobileProfile extends React.Component {
  state = {
    nameEdit: false,
    about: false
  };
  openNameEdit = () => {
    this.setState({ nameEdit: true });
  };
  closeNameEdit = () => {
    this.setState({ nameEdit: false });
  };
  openAbout = () => {
    this.setState({ about: true });
  };
  closeAbout = () => {
    this.setState({ about: false });
  };
  componentDidMount() {
    let header = document.getElementById("mobile__profile__header");
    let content = document.getElementById("mobile__profile__section");
    this.props.componentWithoutSearchBar(header, content);
  }
  render() {
    return (
      <div>
        <header className="col-12 fixed-top mobile__view__starred__Messages__Header py-2" id="mobile__profile__header">
          <div className="row mx-0 w-100">
            <div className="col-12 px-0 py-1 d-flex">
              <div className="row mx-0 w-100">
                <div
                  className="mobileView__left__arrow d-flex align-items-center justify-content-start"
                  onClick={this.props.closeDrawer}
                >
                  <img src={require("../../../assets/svg/left.svg")} width="24" height="24" alt="left-arrow" />
                </div>
                <div className="mobileView__selectContactSection pl-3 d-flex align-items-center">
                  <div className="mobile__newChat__selectedContact">Profile</div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="mobile__profile__section" id="mobile__profile__section">
          <div className="col-12 px-0">
            <div className="row mx-0">
              <div className="col-12 py-4 d-flex justify-content-center align-items-center">
                <div className="image-upload">
                  <label for="file-input" name="file-input">
                    <img
                      src={require("../../../assets/images/user-image.jpg")}
                      alt="user-pic"
                      className="mobile__profile__image"
                    />
                  </label>
                  <div className="d-flex justify-content-end">
                    <div className="edit__photo d-flex justify-content-center align-items-center">
                      <img src={require("../../../assets/svg/camera.svg")} alt="camera" height="18" width="18" />
                    </div>
                  </div>
                  <input id="file-input" type="file" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 px-0" onClick={this.openNameEdit}>
            <div className="row mx-0">
              <div className="col-12 py-2 d-flex">
                <div className="pl-3 pr-4 pt-2">
                  <img
                    src={require("../../../assets/svg/user-male-black-shape.svg")}
                    alt="sender-images"
                    height="18"
                    width="18"
                  />
                </div>
                <div className="d-flex align-items-center custom__width90 pb-1 deleteAccount__head__section">
                  <div>
                    <div className="font__14__px">Name</div>
                    <div className="mobile__settings__header__name">NiKO</div>
                    <div className="font__14__px">
                      This is not your username or pin. This name will be visible to your WhatsApp contacts.
                    </div>
                  </div>
                </div>
                <div className="h-100 pt-2">
                  <img
                    src={require("../../../assets/svg/create-new-pencil-button.svg")}
                    alt="create-new-pencil-button"
                    height="18"
                    width="18"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 px-0" onClick={this.openAbout}>
            <div className="row mx-0">
              <div className="col-12 py-2 d-flex">
                <div className="pl-3 pr-4 pt-2">
                  <img
                    src={require("../../../assets/svg/information-circular-button-symbol.svg")}
                    alt="sender-images"
                    height="18"
                    width="18"
                  />
                </div>
                <div className="d-flex align-items-center custom__width90 pb-1 deleteAccount__head__section">
                  <div>
                    <div className="font__14__px">About</div>
                    <div className="mobile__settings__header__name">Coding</div>
                  </div>
                </div>
                <div className="h-100 pt-2">
                  <img
                    src={require("../../../assets/svg/create-new-pencil-button.svg")}
                    alt="create-new-pencil-button"
                    height="18"
                    width="18"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 px-0">
            <div className="row mx-0">
              <div className="col-12 py-2 d-flex">
                <div className="pl-3 pr-4 pt-2">
                  <img src={require("../../../assets/svg/call.svg")} alt="sender-images" height="18" width="18" />
                </div>
                <div className="d-flex align-items-center custom__width90 pb-1 deleteAccount__head__section">
                  <div>
                    <div className="font__14__px">Phone</div>
                    <div className="mobile__settings__header__name">+91 9139396939</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SmallDrawer opOpen={this.openNameEdit} open={this.state.nameEdit}>
          <NameEdit closeDrawer={this.closeNameEdit} />
        </SmallDrawer>
        <BottomDrawer opOpen={this.openAbout} open={this.state.about}>
          <About componentWithoutSearchBar={this.props.componentWithoutSearchBar} closeDrawer={this.closeAbout} />
        </BottomDrawer>
      </div>
    );
  }
}

export default MobileProfile;
