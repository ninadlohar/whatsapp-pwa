import React from "react";
import ContactDataWStatus from "../../../components/TypesOfUserChats/ContactDataWStatus";
import DropDown from "../../../ReusableUI-Components/dropDown";
import SearchInputBox from "../../../components/SearchInputBox/SearchInputBox";
import Auxilliary from "../../../hoc/Auxillary";
import MobileNewGroup from "../DropUps/MobileNewGroup";
import MainBottomDrawer from "../DropUps/BottomDrawer";

class MobileNewChat extends React.Component {
  state = {
    setSearchActive: false,
    newGroup: false
  };
  setSearchActiveFn = () => {
    this.setState({ setSearchActive: true }, () => {
      document.getElementById("col-xl-3-5").style.transform = "translate(0, -65px)";
    });
  };

  setSearchDeactiveFn = () => {
    // let header = document.getElementById("mobileNewChat__header");
    // let content = document.getElementById("mobileNewChat__section");
    // // let input = document.getElementById("search-input-box-new-group");
    // this.props.componentWithoutSearchBar(header, content);
    this.setState({ setSearchActive: false }, () => {
      document.getElementById("col-xl-3-5").style.transform = "translate(0px, 0px)";
    });
  };

  setNewGroupTrue = () => {
    this.setState({ newGroup: true });
  };

  setNewGroupFalse = () => {
    this.setState({ newGroup: false });
  };

  componentDidMount() {
    let header = document.getElementById("mobileNewChat__header");
    let content = document.getElementById("mobileNewChat__section");
    let input = document.getElementById("search-input-box-new-group");
    this.state.setSearchActive
      ? this.props.componentWithoutSearchBar(input, content)
      : this.props.componentWithoutSearchBar(header, content);
  }

  render() {
    let newGroup = (
      <div
        className="chat-1 w-100 d-flex rightSlider__userInfo__box "
        onMouseEnter={this.onHover}
        onMouseLeave={this.offHover}
        onClick={this.setNewGroupTrue}
      >
        <div className="leftChat__user__image">
          <img
            src={require("../../../assets/svg/team.svg")}
            alt="karl-benz"
            className="logged__in__user__image__49px"
          />
        </div>
        <div className="leftChat__user__details">
          <strong>New Group</strong>
        </div>
      </div>
    );
    let newContact = (
      <div
        className="chat-1 w-100 d-flex rightSlider__userInfo__box"
        onMouseEnter={this.onHover}
        onMouseLeave={this.offHover}
      >
        <div className="leftChat__user__image">
          <img
            src={require("../../../assets/svg/user.svg")}
            alt="karl-benz"
            className="logged__in__user__image__49px"
          />
        </div>
        <div className="leftChat__user__details">
          <strong>New Contact</strong>
        </div>
      </div>
    );
    return (
      <Auxilliary>
        {this.state.setSearchActive ? (
          <SearchInputBox
            placeholder="Search..."
            searchBoxType="mobileSearchBox"
            setSearchDeactiveFn={this.setSearchDeactiveFn}
          />
        ) : (
          <header className="col-12 mobile__view__header fixed-top px-3" id="mobileNewChat__header">
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
                    <div className="mobile__newChat__selectedContact">Selected Contact</div>
                    <div className="mobile__newChat__contactLength">385 Contacts</div>
                  </div>
                  <div className="mobile__newChat__options d-flex justify-content-end align-items-center">
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
                    />
                  </div>
                </div>
              </div>
            </div>
          </header>
        )}
        <div id="mobileNewChat__section">
          {newGroup}
          {newContact}
          <ContactDataWStatus />
          <ContactDataWStatus />
          <ContactDataWStatus />
          <ContactDataWStatus />
          <ContactDataWStatus />
          <ContactDataWStatus />
          <ContactDataWStatus />
          <ContactDataWStatus />
          <ContactDataWStatus />
          <ContactDataWStatus />
        </div>

        <MainBottomDrawer onOpen={this.setNewGroupTrue} open={this.state.newGroup}>
          <MobileNewGroup closeGroupDrawer={this.setNewGroupFalse} />
        </MainBottomDrawer>
      </Auxilliary>
    );
  }
}

export default MobileNewChat;
