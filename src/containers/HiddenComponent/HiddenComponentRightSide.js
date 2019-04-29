import React from "react";
import SearchContainer from "./RightSubComp/SearchContainer";
import ContactContainer from "./RightSubComp/ContactContainer";

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
    let hiddenRightC = document.getElementById("DOMChangedHiddenSide");

    this.setState({ squeezeLayoutBoolean: false }, () => {
      leftSide.classList.remove("DOMChangedLeftSide", "DOMChangedLeftSide_P-1301");
      rightSide.classList.remove("DOMChangedRightSide", "DOMChangedRightSide_P-1301");
      hiddenRightC.classList.remove("DOMChangedHiddenSide");
    });
    if (document.getElementById("col-xl-6-5").clientWidth <= 0) {
      document.getElementById("DOMChangedHiddenSide").style.width = "0%";
      document.getElementById("col-xl-6-5").style.width = "70%";
    }

    if (
      window.addEventListener("resize", function(e) {
        if (document.getElementById("page").clientWidth > 1024) {
          console.log(e);
          document.getElementById("DOMChangedHiddenSide").style.width = "30%";
        }
      })
    ) {
    }
  };

  slideInToggler = () => {
    let leftSide = document.getElementById("col-xl-3-5");
    let rightSide = document.getElementById("col-xl-6-5");
    let hiddenRightC = document.getElementById("DOMChangedHiddenSide");
    this.setState({ squeezeLayoutBoolean: true }, () => {
      // this.props.squeezeBooleanTrue();
      leftSide.classList.add("DOMChangedLeftSide_P-1301", "DOMChangedLeftSide");
      rightSide.classList.add("DOMChangedRightSide_P-1301", "DOMChangedRightSide");
      hiddenRightC.classList.add("DOMChangedHiddenSide");
    });
    if (document.getElementById("page").clientWidth < 1025) {
      document.getElementById("col-xl-6-5").style.width = "0%";
      document.getElementById("DOMChangedHiddenSide").style.width = "70%";
    }
  };

  componentDidMount() {
    this.props.onRef1(this);
    this.setState({ isTextAStatus: false, isChatWithStatusAndAdmin: true }, () => {
      this.props.isTextAStatusFn();
      this.props.isChatWithStatusAndAdminFn();
    });
  }

  render() {
    let onSearchActiveContainer = (
      <SearchContainer
        squeezeLayoutBoolean={this.props.squeezeLayoutBoolean}
        hiddenClass={this.props.hiddenClass}
        slideOutToggler={this.slideOutToggler}
      />
    );

    let contactInfoContainer = (
      <ContactContainer
        squeezeLayoutBoolean={this.props.squeezeLayoutBoolean}
        hiddenClass={this.props.hiddenClass}
        slideOutToggler={this.slideOutToggler}
      />
    );

    let display = null;

    switch (this.props.currentScreen1) {
      case "SEARCH":
        display = onSearchActiveContainer;
        break;
      case "CONTACT":
        display = contactInfoContainer;
        break;
      default:
        display = onSearchActiveContainer;
        break;
    }
    return (
      <div className={this.props.squeezeLayoutBoolean ? this.props.hiddenClass.join(" ") : null} id="DOMChangedHiddenSide">
        {display}
      </div>
    );
  }
}

export default HiddenComponentRightSide;
