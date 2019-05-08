import React from "react";
import SearchContainer from "./RightSubComp/SearchContainer";
import ContactContainer from "./RightSubComp/ContactContainer";

class HiddenComponentRightSide extends React.Component {
  constructor(props) {
    super(props);
    this.slideInToggler = this.slideInToggler.bind(this, "545");
  }
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

  /** moving towards 0 <- 1024 ;;; onclick open drawer from right */
  slideInToggler = () => {
    let leftSide = document.getElementById("col-xl-3-5");
    let rightSide = document.getElementById("col-xl-6-5");
    let page = document.getElementById("page").clientWidth;
    let hiddenRightC = document.getElementById("DOMChangedHiddenSide");
    this.setState({ squeezeLayoutBoolean: true }, () => {
      leftSide.classList.add("DOMChangedLeftSide_P-1301", "DOMChangedLeftSide");
      rightSide.classList.add("DOMChangedRightSide_P-1301", "DOMChangedRightSide");
      hiddenRightC.classList.add("DOMChangedHiddenSide");
    });

    if (page > 768 && page < 901 && this.state.squeezeLayoutBoolean === false) {
      this.setState({ squeezeLayoutBoolean: true });
      document.getElementById("col-xl-6-5").style.width = "0%";
      document.getElementById("DOMChangedHiddenSide").style.width = "60%";
    }
    if (page > 901 && page < 1024.9 && this.state.squeezeLayoutBoolean === false) {
      this.setState({ squeezeLayoutBoolean: true });
      document.getElementById("col-xl-6-5").style.width = "0%";
      document.getElementById("DOMChangedHiddenSide").style.width = "65%";
    }

    // window.addEventListener("resize", () => {
    //   if (page > 768 && page < 900 && this.state.squeezeLayoutBoolean === true) {
    //     this.setState({ squeezeLayoutBoolean: true });
    //     document.getElementById("col-xl-6-5").style.width = "0%";
    //     document.getElementById("DOMChangedHiddenSide").style.width = "60%";
    //   }
    // });
  };

  slideOutToggler = () => {
    let rightSide = document.getElementById("col-xl-6-5");
    let leftSide = document.getElementById("col-xl-3-5");
    let hiddenRightC = document.getElementById("DOMChangedHiddenSide");
    let page = document.getElementById("page");
    // this.props.closeDrawer();
    this.setState({ squeezeLayoutBoolean: false }, () => {
      leftSide.classList.remove("DOMChangedLeftSide", "DOMChangedLeftSide_P-1301");
      rightSide.classList.remove("DOMChangedRightSide", "DOMChangedRightSide_P-1301");
      hiddenRightC.classList.remove("DOMChangedHiddenSide");
    });
    // if (page > 768 && page < 900 && this.state.squeezeLayoutBoolean === true) {
    //   this.setState({ squeezeLayoutBoolean: false });
    //   document.getElementById("col-xl-6-5").style.width = "0%";
    //   document.getElementById("DOMChangedHiddenSide").style.width = "60%";
    // }
    // if (page > 901 && page < 1024.9 && this.state.squeezeLayoutBoolean === true) {
    //   this.setState({ squeezeLayoutBoolean: false });
    //   document.getElementById("col-xl-6-5").style.width = "0%";
    //   document.getElementById("DOMChangedHiddenSide").style.width = "65%";
    // }

    // if (page.clientWidth > 768 && page.clientWidth < 1024.9 && this.state.squeezeLayoutBoolean === true) {
    //   this.setState({ squeezeLayoutBoolean: false });
    //   document.getElementById("col-xl-6-5").style.width = "60%";
    //   document.getElementById("DOMChangedHiddenSide").style.width = "0%";
    // }
    // if (page.clientWidth > 1025 && this.state.squeezeLayoutBoolean === false) {
    //   this.setState({ squeezeLayoutBoolean: true }, () => {
    //     document.getElementById("DOMChangedHiddenSide").style.width = "30% !important";
    //   });
    // }
  };

  componentDidMount() {
    this.props.onRef1(this);
    document.getElementById("DOMChangedHiddenSide").style.width = "0%";
    this.setState({ isTextAStatus: false, isChatWithStatusAndAdmin: true, squeezeLayoutBoolean: false }, () => {
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
        closeDrawer={this.props.closeDrawer}
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
      <div
        className={this.props.squeezeLayoutBoolean ? this.props.hiddenClass.join(" ") : null}
        id="DOMChangedHiddenSide"
      >
        {display}
      </div>
    );
  }
}

export default HiddenComponentRightSide;
