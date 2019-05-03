import React from "react";
import ContactDataWStatus from "../../../components/TypesOfUserChats/ContactDataWStatus";
import DropDown from "../../../ReusableUI-Components/dropDown";
import SearchInputBox from "../../../components/SearchInputBox/SearchInputBox";

class MobileNewGroup extends React.Component {
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
                    <div className="mobile__newChat__selectedContact">New Group</div>
                    <div className="mobile__newChat__contactLength">Add Participants</div>
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
                  </div>
                </div>
              </div>
            </div>
          </header>
        )}
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

export default MobileNewGroup;
