import React from "react";
import ContactDataWStatus from "../../../../../Common__UI__Components/ChatTypes/ContactDataWStatus";
import DropDown from "../../../../../Common__UI__Components/DropDown";
import SearchInputBox from "../../../../../Common__UI__Components/SearchInputBox";
import Auxilliary from "../../../../../../hoc/Auxillary";
import { data } from "../../../../../../DummyAPI/data.json";

class NewBroadcast extends React.Component {
  state = {
    setSearchActive: false,
    newBroadcast: false
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
    let bcMessage = (
      <div className="col-12 py-3 text-center mobile__newChat__contactLength">
        Only contacts with +91 9139396939 in their address book will receive your broadcast messages.
      </div>
    );
    return (
      <Auxilliary>
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
                      onClick={this.props.closeBroadcastDrawer}
                    >
                      <img
                        src={require("../../../../../../assets/svg/left.svg")}
                        width="24"
                        height="24"
                        alt="left-arrow"
                      />
                    </div>
                    <div className="mobileView__selectContactSection pl-3">
                      <div className="mobile__newChat__selectedContact">New Broadcast</div>
                      <div className="mobile__newChat__contactLength">0 of 256 selected</div>
                    </div>
                    <div className="mobile__newChat__options d-flex justify-content-end align-items-center">
                      <div className="px-3" onClick={() => this.setSearchActiveFn()}>
                        <img
                          src={require("../../../../../../assets/svg/mobile-search.svg")}
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
          {bcMessage}
          {data.map((v, i) => (
            <ContactDataWStatus id={i} value={v} key={i} />
          ))}
        </div>
      </Auxilliary>
    );
  }
}

export default NewBroadcast;
