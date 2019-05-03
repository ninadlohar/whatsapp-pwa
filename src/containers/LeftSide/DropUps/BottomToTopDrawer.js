import React from "react";
import ContactDataWStatus from "../../../components/TypesOfUserChats/ContactDataWStatus";
import DropDown from "../../../ReusableUI-Components/dropDown";
import SearchInputBox from "../../../components/SearchInputBox/SearchInputBox";

class BottomToTopDrawer extends React.Component {
  state = {
    setSearchActive: false
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
    let newGroup = (
      <div
        className="chat-1 w-100 d-flex rightSlider__userInfo__box"
        onMouseEnter={this.onHover}
        onMouseLeave={this.offHover}
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
      <div>
        {this.state.setSearchActive ? (
          <SearchInputBox
            placeholder="Search..."
            searchBoxType="mobileSearchBox"
            setSearchDeactiveFn={this.setSearchDeactiveFn}
          />
        ) : (
          <header className="col-12 mobile__view__header px-3" id="head">
            <div className="row mx-0 w-100">
              <div className="col-12 px-0 py-1 d-flex">
                <div className="row mx-0 w-100">
                  <div
                    className="mobileView__left__arrow d-flex align-items-center justify-content-start"
                    onClick={this.props.closeDrawer}
                  >
                    <img src={require("../../../assets/svg/left.svg")} width="24" height="24" />
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
    );
  }
}

export default BottomToTopDrawer;
