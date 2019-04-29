import React from "react";
import SearchInputBox from "../../../components/SearchInputBox/SearchInputBox";

class SearchContainer extends React.Component {
  render() {
    return (
      <div className="rightSlider__child__open col-12 px-0" id="col-30-child">
        <header className="rightSlider__header d-flex">
          <div style={{ width: "54px" }} onClick={this.props.slideOutToggler}>
            <img src={require("../../../assets/svg/cancel-real.svg")} alt="cancel" height="14" />
          </div>
          <div className="rightSlider__header__text">
            <span>Search Messages</span>
          </div>
        </header>
        {/* <Aux> */}
        <div>
          <SearchInputBox placeholder="Search..." searchBoxType="withSearchBox" />
        </div>
        <div className="custom__padding50 text-center">
          <span className="rightSlider__search__container__content">Search for messages within 9139396939.</span>
        </div>
        {/* </Aux> */}
      </div>
    );
  }
}

export default SearchContainer;
