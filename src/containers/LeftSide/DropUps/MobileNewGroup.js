import React from "react";
import ContactDataWStatus from "../../../components/TypesOfUserChats/ContactDataWStatus";
import SearchInputBox from "../../../components/SearchInputBox/SearchInputBox";
import { data } from "../../../ReusableUI-Components/data.json";

class MobileNewGroup extends React.Component {
  state = {
    setSearchActive: false,
    selected: false,
    data: ''
  };

  setSearchActiveFn = () => {
    this.setState({ setSearchActive: true }, () => {
      document.getElementById("col-xl-3-5").style.transform = "translate(0, -65px)";
    });
    this.componentWithSearchBar();
  };

  setSearchDeactiveFn = () => {
    let content = document.getElementById("mobile__newGroup__section");
    this.setState({ setSearchActive: false }, () => {
      document.getElementById("col-xl-3-5").style.transform = "translate(0px, 0px)";
    });
    content.style.marginTop = 56 + "px";
    content.style.overflow = "auto";
  };
  componentDidMount() {
    this.setState({ data: data })
    let header = document.getElementById("mobile__newGroup__head");
    let infoSection = document.getElementById("mobile__newGroup__section");
    this.props.componentWithoutSearchBar(header, infoSection);
  }

  componentWithSearchBar = () => {
    let height = document.getElementById("page").clientHeight;
    let input = document.getElementById("search-input-box-new-group");
    let content = document.getElementById("mobile__newGroup__section");
    let availableheight = height - input;
    content.style.marginTop = 0 + "px";
    content.style.height = availableheight + "px";
    content.style.overflow = "auto";
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
            <header className="col-12 fixed-top mobile__view__header px-3" id="mobile__newGroup__head">
              <div className="row mx-0 w-100">
                <div className="col-12 px-0 py-1 d-flex">
                  <div className="row mx-0 w-100">
                    <div
                      className="mobileView__left__arrow d-flex align-items-center justify-content-start"
                      onClick={this.props.closeGroupDrawer}
                    >
                      <img src={require("../../../assets/svg/left.svg")} width="24" height="24" alt="left-arrow" />
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
        <div id="mobile__newGroup__section">
          {data.map((v, i) => (
            <ContactDataWStatus value={v} key={v.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default MobileNewGroup;
