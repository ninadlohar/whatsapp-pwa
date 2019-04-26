import React from "react";
import SearchInputBox from "../../components/SearchInputBox/SearchInputBox";
import ContactDataChatWithStataus from "../../components/TypesOfUserChats/ContactDataChatWithStatus";

class HiddenComponentRightSide extends React.Component {
  state = {
    squeezeLayoutBoolean: false,
    isEditingName: false,
    isEditingDescription: false,
    isTextAStatus: this.props.isTextAStatus,
    isChatWithStatusAndAdmin: this.props.isChatWithStatusAndAdmin
  };

  isEditingNameGroupFn = () => {
    this.setState({ isEditingName: !this.state.isEditingName });
  };
  isEditingDescriptionFn = () => {
    this.setState({ isEditingDescription: !this.state.isEditingDescription });
  };

  slideOutToggler = () => {
    let rightSide = document.getElementById("col-xl-6-5");
    let leftSide = document.getElementById("col-xl-3-5");
    this.setState({ squeezeLayoutBoolean: false }, () => {
      this.props.setHiddenComponentFalse();
      leftSide.classList.remove("DOMChangedLeftSide", "DOMChangedLeftSide_P-1301");
      rightSide.classList.remove("DOMChangedRightSide", "DOMChangedRightSide_P-1301");
    });
  };

  componentDidMount() {
    this.setState({ isTextAStatus: false, isChatWithStatusAndAdmin: true }, () => {
      this.props.isTextAStatusFn();
      this.props.isChatWithStatusAndAdminFn();
    });
  }

  render() {
    /** search box container */
    let onSearchActiveContainer = (
      <div>
        <div>
          <SearchInputBox placeholder="Search..." searchBoxType="withSearchBox" />
        </div>
        <div className="custom__padding50 text-center">
          <span className="rightSlider__search__container__content">Search for messages within 9139396939.</span>
        </div>
      </div>
    );
    /** extra chat type of box for showing more people in your group ...29 more */
    let morePeople = (
      <div className="chat-1 w-100 py-2 d-flex rightSlider__userInfo__box pr-3">
        <div className="rightSlider__userInfo__padding">
          <div className="rightSlider__userInfo__image__padding py-3">
            <img src={require("../../assets/svg/down-arrow.svg")} alt="down-arrow" height="16" width="14" />
          </div>
        </div>
        <div className="d-flex align-items-center rightSlider__more__group__people__count w-100 ">29 More</div>
      </div>
    );

    /** exit group box next to more people [highlighted in alert red color] */
    let exitGroup = (
      <div className="rightSlider__exit__group d-flex">
        <div className="exit-logo-svg">
          <img src={require("../../assets/svg/exit.svg")} height="20" width="20" alt="exit-svg" />
        </div>
        <div className="rightSlider__exit__group__text d-flex align-items-center">Exit Group</div>
      </div>
    );
    let reportGroup = (
      <div className="report-group-section d-flex">
        <div className="exit-logo-svg">
          <img src={require("../../assets/svg/thumb-down.svg")} height="20" width="20" alt="report-svg" />
        </div>
        <div className="rightSlider__exit__group__text d-flex align-items-center">Report Group</div>
      </div>
    );

    /** edit name toggles to input when state changes true */
    let editName = (
      <div className="d-flex">
        <div className="rightSlider__profile__edit__name w-100">German Shepherd</div>
        <div className="pt-8_custom" onClick={this.isEditingNameGroupFn}>
          <img src={require("../../assets/svg/create-new-pencil-button.svg")} alt="edit" height="18" width="18" />
        </div>
      </div>
    );

    let editDescription = (
      <div className="d-flex">
        <div className="rightSlider__profile__edit__description w-100">Add Group Description</div>
        <div onClick={this.isEditingDescriptionFn}>
          <img src={require("../../assets/svg/create-new-pencil-button.svg")} alt="pencil-edit" height="18" width="18" />
        </div>
      </div>
    );

    /** this container is popped out when the right side dropdown -> contact info button is clicked */
    let contactInfoContainer = (
      <div className="rightSlider__contactInfo__parent">
        <div className="rightSlider__contactInfo__child">
          {/** start sub components -> boxes */}
          <div className="contact-info-basic-details">
            <div className="d-flex justify-content-center">
              <img src={require("../../assets/images/user-image.jpg")} alt="sender-images" className="contact-info-basic-details-image" />
            </div>
            <div>
              {this.state.isEditingName ? (
                <div>
                  <SearchInputBox searchBoxType="simpleInputForGroupInfo__Name" isEditingNameGroupFn={this.isEditingNameGroupFn} />
                </div>
              ) : (
                  editName
                )}
              <div className="contact-info-basic-details-sender-date">last seen today at 12:36pm</div>
            </div>
          </div>
          <div className="group-description-details">
            <div className="description">Description</div>

            {this.state.isEditingDescription ? (
              <div>
                <SearchInputBox searchBoxType="simpleInputForGroupInfo__Description" isEditingDescriptionFn={this.isEditingDescriptionFn} />
              </div>
            ) : (
                editDescription
              )}
          </div>
          <div className="media-links-docs">
            <div className="d-flex">
              <div className="media-links-docs-title w-100">Media Links and Docs</div>
              <div>
                <img src={require("../../assets/svg/right-arrow.svg")} alt="right-arrow-angle" height="13" width="13" />
              </div>
            </div>
            <div className="media-links-docs-immage-section d-flex justify-content-center">
              <img src="https://via.placeholder.com/150" alt="" height="107" width1="104" className="media-links-docs-image" />
              <img src="https://via.placeholder.com/150" alt="" height="107" width1="104" className="media-links-docs-image" />
              <img src="https://via.placeholder.com/150" alt="" height="107" width1="104" className="media-links-docs-image" />
            </div>
          </div>
          <div className="mute-and-starred-messages">
            <div className="d-flex">
              <div className="mute w-100">Mute</div>
              <div style={{ marginTop: "16px" }}>
                <img src={require("../../assets/svg/square.svg")} alt="pencil-edit" height="18" width="18" />
              </div>
            </div>
            <div className="d-flex">
              <div className="starred-messages w-100">Starred Messages</div>
              <div style={{ marginTop: "15px" }}>
                <img src={require("../../assets/svg/right-arrow.svg")} alt="right-arrow-angle" height="13" width="13" />
              </div>
            </div>
          </div>
          <div className="participants-section">
            <div className="d-flex">
              <div className="participants-section-header w-90">Media Links and Docs</div>
              <div style={{ marginTop: "13px" }}>
                <img src={require("../../assets/svg/search.svg")} alt="search" height="15" width="15" />
              </div>
            </div>
            <div>
              <div className="participant">
                <ContactDataChatWithStataus />
              </div>
              <div className="participant">
                <ContactDataChatWithStataus />
              </div>
              <div className="participant">
                <ContactDataChatWithStataus />
              </div>
              <div className="participant">
                <ContactDataChatWithStataus />
              </div>
              <div className="participant">
                <ContactDataChatWithStataus />
              </div>
              <div className="participant">
                <ContactDataChatWithStataus />
              </div>
              <div className="participant">
                <ContactDataChatWithStataus />
              </div>
              <div className="participant more-people-section">{morePeople}</div>
            </div>
          </div>
          {exitGroup}
          {reportGroup}
          <div style={{ marginBottom: "30px" }} />
          {/** end sub components -> boxes */}
        </div>
      </div>
    );

    return (
      <div className={this.props.squeezeLayoutBoolean ? this.props.hiddenClass.join(" ") : null} id="DOMChangedHiddenSide">
        <div className="col-30-child col-12 px-0" id="col-30-child">
          <header className="hidden_header py-3 d-flex">
            <div style={{ width: "54px" }} onClick={this.slideOutToggler}>
              <img src={require("../../assets/svg/cancel-real.svg")} alt="cancel" height="14" />
            </div>
            <div className="hidden_header_text">
              <span>{this.props.searchComponent ? "Search Messages" : "Group Info"}</span>
            </div>
          </header>
          {this.props.searchComponent ? onSearchActiveContainer : contactInfoContainer}
        </div>
      </div>
    );
  }
}

export default HiddenComponentRightSide;
