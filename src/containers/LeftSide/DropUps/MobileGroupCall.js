import React from "react";
import DropDown from "../../../ReusableUI-Components/dropDown";
import SearchInputBox from "../../../components/SearchInputBox/SearchInputBox";
import Auxilliary from "../../../hoc/Auxillary";
import MainBottomDrawer from "../DropUps/BottomDrawer";
import { data } from "../../../ReusableUI-Components/data.json";
import GroupCall from "../../HiddenComponent/LeftSubComp/GroupCall";
import NewGroupCall from "./NewGroupCall";

class MobileGroupCall extends React.Component {
  state = {
    setSearchActive: false,
    newGroup: false,
    newChatDropdown: true
  };
  setSearchActiveFn = () => {
    this.setState({ setSearchActive: true }, () => {
      document.getElementById("col-xl-3-5").style.transform = "translate(0, -65px)";
    });
    this.componentWithSearchBar();
  };

  setSearchDeactiveFn = () => {
    let content = document.getElementById("mobileGroupCall__section");
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

  componentWithSearchBar = () => {
    let height = document.getElementById("page").clientHeight;
    let input = document.getElementById("search-input-box-new-group");
    let content = document.getElementById("mobileGroupCall__section");
    let availableheight = height - input;
    content.style.marginTop = 0 + "px";
    content.style.height = availableheight + "px";
    content.style.overflow = "auto";
  };

  componentDidMount() {
    let header = document.getElementById("mobileGroupCall__header");
    let content = document.getElementById("mobileGroupCall__section");
    this.props.componentWithoutSearchBar(header, content);
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
          <strong>New Group call</strong>
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
          <header className="col-12 mobile__view__header fixed-top px-3" id="mobileGroupCall__header">
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
        <div id="mobileGroupCall__section">
          {newGroup}
          {newContact}
          {data.map((v, i) => (
            <GroupCall value={v} key={i} />
          ))}
        </div>
        <MainBottomDrawer onOpen={this.setNewGroupTrue} open={this.state.newGroup}>
          <NewGroupCall
            componentWithoutSearchBar={this.props.componentWithoutSearchBar}
            closeDrawer={this.setNewGroupFalse}
          />
        </MainBottomDrawer>
      </Auxilliary>
    );
  }
}

export default MobileGroupCall;
