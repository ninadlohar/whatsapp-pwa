import React from "react";
import DropDown from "../../../../../Common__UI__Components/DropDown/DropDown";
import SearchInputBox from "../../../../../Common__UI__Components/Utils/SearchInputBox/SearchInputBox";

class StarredMessages extends React.Component {
  state = {
    setSearchActive: false
  };
  setSearchActiveFn = () => {
    this.setState({ setSearchActive: true }, () => {
      document.getElementById("col-xl-3-5").style.transform = "translate(0, -65px)";
    });
    this.componentWithSearchBar();
  };

  componentWithSearchBar = () => {
    let height = document.getElementById("page").clientHeight;
    let input = document.getElementById("search__input__box");
    let content = document.getElementById("mobile__starred__messages__section");
    let availableheight = height - input;
    content.style.marginTop = 0 + "px";
    content.style.height = availableheight + "px";
    content.style.overflow = "auto";
  };

  setSearchDeactiveFn = () => {
    let content = document.getElementById("mobile__starred__messages__section");
    this.setState({ setSearchActive: false }, () => {
      document.getElementById("col-xl-3-5").style.transform = "translate(0px, 0px)";
    });
    content.style.marginTop = 56 + "px";
    content.style.overflow = "auto";
  };

  componentDidMount() {
    let header = document.getElementById("mobile__starred__messages__head");
    let content = document.getElementById("mobile__starred__messages__section");
    this.props.componentWithoutSearchBar(header, content);
  }

  render() {
    return (
      <div>
        {this.state.setSearchActive ? (
          <SearchInputBox placeholder="Search..." searchBoxType="mobileSearchBox" setSearchDeactiveFn={this.setSearchDeactiveFn} />
        ) : (
          <header className="col-12 fixed-top call__info__header py-1" id="mobile__starred__messages__head">
            <div className="row mx-0 w-100">
              <div className="col-12 px-0 py-1 d-flex">
                <div className="row mx-0 w-100">
                  <div
                    className="mobileView__left__arrow d-flex align-items-center justify-content-start"
                    onClick={this.props.closeStarredMessagesDrawer}
                  >
                    <img src={require("../../../../../../assets/svg/left.svg")} width="24" height="24" alt="left-arrow" />
                  </div>
                  <div className="d-flex align-items-center mobileView__selectContactSection pl-3">
                    <div className="mobile__newChat__selectedContact">Starred Messages</div>
                  </div>
                  <div className="mobile__newChat__options d-flex justify-content-end align-items-center">
                    <div className="single-icons d-flex justify-content-center align-items-center" onClick={() => this.setSearchActiveFn()}>
                      <img src={require("../../../../../../assets/svg/mobile-search.svg")} width="19" height="19" alt="search-svg" />
                    </div>
                    <DropDown classes="fas fa-ellipsis-v" mobile={this.props.mobile} mobileViewDropDown={this.state.mobileViewDropDown} />
                  </div>
                </div>
              </div>
            </div>
          </header>
        )}
        <section className="col-12 px-0 leftSide__chat__section" id="mobile__starred__messages__section">
          <div className="row mx-0 h-100">
            <div className="col-12 px-0  starred-messages-container">
              <div className="row mx-0">
                <div className="col-12 starred-messages-section w-100 ">
                  <div className="row mx-0 w-100 d-flex">
                    <div className="col-9 d-flex px-0">
                      <div className="starred-messages-sender-image-main">
                        <img
                          alt="sender-img-in-starred-message"
                          src={require("../../../../../../assets/images/user-image.jpg")}
                          className="starred-messages-sender-image"
                        />
                      </div>
                      <div className="custom_pr-3">Dad</div>
                      <div>
                        <img src={require("../../../../../../assets/svg/right.svg")} height="7" width="7" alt="right" />
                      </div>
                      <div className="custom_pl-3">You</div>
                    </div>
                    <div className="col-3 px-0 starred-messages-date-sent text-right">
                      Sunday
                      <img
                        src={require("../../../../../../assets/svg/right-arrow.svg")}
                        alt="right-arrow-angle-1"
                        style={{ marginLeft: "8px" }}
                        height="12"
                        width="12"
                      />
                    </div>
                  </div>
                  <div className="rox mx-0 w-100">
                    <div className="starred-messages-main">
                      <div className="starred-messages">
                        <div className="col-12 px-0 w-100 starred-messages-date-sent font-italic">
                          <div className="row mx-0 w-100">
                            <div className="col-11 px-0">
                              <img
                                src={require("../../../../../../assets/svg/forward-arrow.svg")}
                                alt="forward-arrow"
                                width="12"
                                height="12"
                                className="mr-1"
                              />
                              Forwarded
                            </div>
                            <div className="col-1 px-0 d-flex justify-content-end">
                              <img
                                src={require("../../../../../../assets/svg/chevron-arrow-down.svg")}
                                alt="chevron-down"
                                width="12"
                                height="12"
                                className="mr-1"
                              />
                            </div>
                          </div>
                        </div>
                        <span>
                          सुंदर. "आई ही अशी बँक आहे जिच्या मध्ये दु:खे जमा करू शकता " " पिता असे क्रेडीट कार्ड आहे जे बॅलन्स नसतांना सुद्धा
                          खूशी देत असते " आई वडीलांचे प्रेम फूकट मिळत असते, बाकी सगळी नाती जपण्यासाठी कांही ना काहितरी किंमत अदा कराविच
                          लागते. तूमचे आई वडिल जर तूमच्यासाठी एटीएम कार्ड बनू शकतात तर, तूम्ही त्यांचे आधार कार्ड का बनू शकत नाही ?
                        </span>
                        <div className="starred-messages-date-sent text-right">
                          <img
                            src={require("../../../../../../assets/svg/rate-star-button.svg")}
                            alt="rate-star"
                            width="10"
                            height="10"
                            className="mr-1"
                          />
                          10:16 PM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default StarredMessages;
