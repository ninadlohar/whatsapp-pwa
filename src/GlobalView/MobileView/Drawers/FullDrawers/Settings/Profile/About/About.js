import React from "react";
import DropDown from "../../../../../../Common__UI__Components/DropDown/DropDown";
import SmallDrawer from "../../../../SmallDrawer";
import AddAbout from "../../../../HalfDrawers/AddAbout";

class About extends React.Component {
  state = {
    addAbout: false
  };
  openAddAbout = () => {
    this.setState({ addAbout: true });
  };
  closeAddAbout = () => {
    this.setState({ addAbout: false });
  };
  componentDidMount() {
    let header = document.getElementById("about__header");
    let content = document.getElementById("about__section");
    this.props.componentWithoutSearchBar(header, content);
  }
  render() {
    return (
      <div>
        <header className="fixed-top col-12 mobile__view__chat__Messages__Header" id="about__header">
          <div className="row mx-0 w-100">
            <div className="col-12 px-0 py-1 d-flex">
              <div className="row mx-0 w-100">
                <div className="mobileView__left__arrow d-flex align-items-center justify-content-start" onClick={this.props.closeDrawer}>
                  <img src={require("../../../../../../../assets/svg/left.svg")} width="20" height="20" alt="left-arrow" />
                </div>
                <div className="mobileView__selectContactSection d-flex align-items-center">
                  <div className="mobile__newChat__selectedContact">
                    <span className="pl-3">About</span>
                  </div>
                </div>
                <div className="mobile__sender__user__options justify-content-end">
                  <DropDown classes="fas fa-ellipsis-v" />
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="col-12 px-0" id="about__section">
          <div className="row mx-0">
            <div className="col-12 my-2 privacy">Currently set to</div>
            <div className="col-12 px-0 deleteAccount__head__section">
              <div className="row mx-0">
                <div className="col-12 py-2 d-flex">
                  <div className="d-flex align-items-center custom__width90 pb-1 deleteAccount__head__section" onClick={this.openAddAbout}>
                    <div>
                      <div className="mobile__settings__header__name">Coding</div>
                    </div>
                  </div>
                  <div className="h-100">
                    <img
                      src={require("../../../../../../../assets/svg/create-new-pencil-button.svg")}
                      alt="create-new-pencil-button"
                      height="18"
                      width="18"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 my-2 privacy">Select about</div>
            <div className="col-12">
              <div className="row">
                <div className="col-12 py-3 mobile__settings__header__name">Available</div>
                <div className="col-12 py-3 mobile__settings__header__name">Busy</div>
                <div className="col-12 py-3 mobile__settings__header__name">At School</div>
                <div className="col-12 py-3 mobile__settings__header__name">At Movies</div>
                <div className="col-12 py-3 mobile__settings__header__name">At work</div>
                <div className="col-12 py-3 mobile__settings__header__name">Battery about to die</div>
              </div>
            </div>
          </div>
        </div>
        <SmallDrawer opOpen={this.openAddAbout} open={this.state.addAbout}>
          <AddAbout closeDrawer={this.closeAddAbout} />
        </SmallDrawer>
      </div>
    );
  }
}

export default About;
