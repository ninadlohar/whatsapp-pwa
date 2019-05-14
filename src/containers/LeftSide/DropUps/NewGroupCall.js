import React from "react";
import DropDown from "../../../ReusableUI-Components/dropDown";
import SearchInputBox from "../../../components/SearchInputBox/SearchInputBox";
import Auxilliary from "../../../hoc/Auxillary";
import { data } from "../../../ReusableUI-Components/data.json";
import ContactDataChatWStataus from "../../../components/TypesOfUserChats/ContactDataWStatus";

class NewGroupCall extends React.Component {
  state = {
    setSearchActive: false,
    newGroup: false,
    newChatDropdown: true
  };
  setSearchActiveFn = () => {
    this.setState({ setSearchActive: true }, () => {
      document.getElementById("col-xl-3-5").style.transform = "translate(0, -65px)";
    });
  };

  setSearchDeactiveFn = () => {
    let content = document.getElementById("newGroupCall__section");
    this.setState({ setSearchActive: false }, () => {
      document.getElementById("col-xl-3-5").style.transform = "translate(0px, 0px)";
    });
    content.style.marginTop = 56 + "px";
    content.style.overflow = "auto";
  };

  setNewGroupTrue = () => {
    this.setState({ newGroup: true });
  };

  setNewGroupFalse = () => {
    this.setState({ newGroup: false });
  };

  componentDidMount() {
    let header = document.getElementById("newGroupCall__header");
    let content = document.getElementById("newGroupCall__section");
    this.props.componentWithoutSearchBar(header, content);
  }

  render() {
    return (
      <Auxilliary>
        {this.state.setSearchActive ? (
          <SearchInputBox
            placeholder="Search..."
            searchBoxType="mobileSearchBox"
            setSearchDeactiveFn={this.setSearchDeactiveFn}
          />
        ) : (
          <header className="col-12 mobile__view__header fixed-top px-3" id="newGroupCall__header">
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
                    <div
                      className="single-icons d-flex justify-content-center align-items-center"
                      onClick={() => this.setSearchActiveFn()}
                    >
                      <img
                        src={require("../../../assets/svg/mobile-search.svg")}
                        width="19"
                        height="19"
                        alt="search-svg"
                      />
                    </div>
                    <DropDown
                      classes="fas fa-ellipsis-v"
                      componentWithoutSearchBar={this.props.componentWithoutSearchBar}
                      mobile={this.props.mobile}
                      newChatDropdown={this.state.newChatDropdown}
                      mobileViewDropDown={this.state.mobileViewDropDown}
                    />
                  </div>
                </div>
              </div>
            </div>
          </header>
        )}
        <div id="newGroupCall__section">
          {data.map((v, i) => (
            <ContactDataChatWStataus value={v} key={i} />
          ))}
        </div>
      </Auxilliary>
    );
  }
}

export default NewGroupCall;
