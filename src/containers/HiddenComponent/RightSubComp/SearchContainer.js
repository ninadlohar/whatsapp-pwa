import React from "react";
import SearchInputBox from "../../../components/SearchInputBox/SearchInputBox";

class SearchContainer extends React.Component {
  state = {
    squeezeLayoutBoolean: this.props.squeezeLayoutBoolean
  };

  // resizeFn = page => {
  //   window.addEventListener("resize", () => {
  //     if (page > 768 && page < 900) {
  //       document.getElementById("col-xl-6-5").style.width = "60%";
  //       document.getElementById("DOMChangedHiddenSide").style.width = "0%";
  //     } else if (page > 901 && page < 1024) {
  //       document.getElementById("col-xl-6-5").style.width = "65%";
  //       document.getElementById("DOMChangedHiddenSide").style.width = "0%";
  //     } else if (page > 1025 && page < 1300.9) {
  //       document.getElementById("col-xl-6-5").style.width = "65%";
  //       document.getElementById("DOMChangedHiddenSide").style.width = "0%";
  //     } else if (page > 1301) {
  //       document.getElementById("col-xl-6-5").style.width = "70%";
  //       document.getElementById("DOMChangedHiddenSide").style.width = "0%";
  //     }
  //   });
  // };

  // withoutResize = page => {
  //   if (page > 768 && page < 900) {
  //     document.getElementById("col-xl-6-5").style.width = "60%";
  //     document.getElementById("DOMChangedHiddenSide").style.width = "0%";
  //   } else if (page > 901 && page < 1024) {
  //     document.getElementById("col-xl-6-5").style.width = "65%";
  //     document.getElementById("DOMChangedHiddenSide").style.width = "0%";
  //   } else if (page > 1025 && page < 1300.9) {
  //     document.getElementById("col-xl-6-5").style.width = "65%";
  //     document.getElementById("DOMChangedHiddenSide").style.width = "0%";
  //   } else if (page > 1301) {
  //     document.getElementById("col-xl-6-5").style.width = "70%";
  //     document.getElementById("DOMChangedHiddenSide").style.width = "0%";
  //   }
  // };

  slideOutToggler = () => {
    this.props.slideOutToggler();
    this.props.closeDrawer();
    document.getElementById("col-xl-6-5").style.width = "70%";
    document.getElementById("DOMChangedHiddenSide").style.width = "0%";
  };

  render() {
    return (
      <div className="rightSlider__child__open col-12 px-0" id="col-30-child">
        <header className="rightSlider__header d-flex">
          <div style={{ width: "54px" }} onClick={this.slideOutToggler}>
            <img src={require("../../../assets/svg/cancel-real.svg")} alt="cancel" height="14" />
          </div>
          <div className="rightSlider__header__text">
            <span>Search Messages</span>
          </div>
        </header>
        {/* <Auxillary> */}
        <div>
          <SearchInputBox placeholder="Search..." searchBoxType="withSearchBox" />
        </div>
        <div className="custom__padding50 text-center">
          <span className="rightSlider__search__container__content">Search for messages within 9139396939.</span>
        </div>
        {/* </Auxillary> */}
      </div>
    );
  }
}

export default SearchContainer;
