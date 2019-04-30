import React from "react";
import SearchContainer from "./RightSubComp/SearchContainer";
import ContactContainer from "./RightSubComp/ContactContainer";

class HiddenComponentRightSide extends React.Component {
  constructor(props) {
    super(props)
    this.slideInToggler = this.slideInToggler.bind(this)
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

  /** moving towards 0 <- 1024 */
  slideInToggler = () => {
    let leftSide = document.getElementById("col-xl-3-5");
    let rightSide = document.getElementById("col-xl-6-5");
    let hiddenRightC = document.getElementById("DOMChangedHiddenSide");
    this.setState({ squeezeLayoutBoolean: true }, () => {
      leftSide.classList.add("DOMChangedLeftSide_P-1301", "DOMChangedLeftSide");
      rightSide.classList.add("DOMChangedRightSide_P-1301", "DOMChangedRightSide");
      hiddenRightC.classList.add("DOMChangedHiddenSide");
    });
    if (document.getElementById("page").clientWidth < 1024.9 && this.state.squeezeLayoutBoolean === false) {
      this.setState({ squeezeLayoutBoolean: true })
      document.getElementById("col-xl-6-5").style.width = "0%";
      document.getElementById("DOMChangedHiddenSide").style.width = "70%";
    }
    /** screwing UI */
    window.addEventListener("resize", () => {
      if (document.getElementById("page").clientWidth < 1025 && this.state.squeezeLayoutBoolean === true) {
        document.getElementById("col-xl-6-5").style.width = "0%";
        document.getElementById("DOMChangedHiddenSide").style.width = "70%";
      }
    })
  };

  slideOutToggler = () => {
    let rightSide = document.getElementById("col-xl-6-5");
    let leftSide = document.getElementById("col-xl-3-5");
    let hiddenRightC = document.getElementById("DOMChangedHiddenSide");
    let page = document.getElementById("page");
    this.props.closeDrawer()
    this.setState({ squeezeLayoutBoolean: false }, () => {
      leftSide.classList.remove("DOMChangedLeftSide", "DOMChangedLeftSide_P-1301");
      rightSide.classList.remove("DOMChangedRightSide", "DOMChangedRightSide_P-1301");
      hiddenRightC.classList.remove("DOMChangedHiddenSide");
    });
    if ((page.clientWidth > 768 && page.clientWidth < 1024.9) && this.state.squeezeLayoutBoolean === true) {
      this.setState({ squeezeLayoutBoolean: false })
      document.getElementById("col-xl-6-5").style.width = "70%";
      document.getElementById("DOMChangedHiddenSide").style.width = "0%";
    }
    if (page.clientWidth > 1025 && this.state.squeezeLayoutBoolean === false) {
      this.setState({ squeezeLayoutBoolean: true }, () => {
        document.getElementById("DOMChangedHiddenSide").style.width = "30% !important";
      })
    }
    /** screwing UI */
    // window.addEventListener("resize", function () {
    //   if (this.state.squeezeLayoutBoolean === true && document.getElementById("page").clientWidth > 1024.9) {
    //     this.setState({ squeezeLayoutBoolean: true })
    //     document.getElementById("col-xl-6-5").style.width = "70%";
    //     document.getElementById("DOMChangedHiddenSide").style.width = "0%";
    //   }
    // })
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
