import React from "react";
import Search from "./RightHiddenSubDrawers/Search";
import Contact from "./RightHiddenSubDrawers/Contact";

class RightHiddenDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.slideInToggler = this.slideInToggler.bind(this, "545");
  }
  state = {
    squeezeLayoutBoolean: false,
    isEditingName: false,
    isEditingDescription: false,
    isTextAStatus: this.props.isTextAStatus,
    isChatWithStatusAndAdmin: this.props.isChatWithStatusAndAdmin,
    clientWidth: null
  };

  isEditingNameGroupFn = () => {
    this.setState({ isEditingName: !this.state.isEditingName });
  };
  isEditingDescriptionFn = () => {
    this.setState({ isEditingDescription: !this.state.isEditingDescription });
  };

  /** if user is resizing this fn() is executed when squeezeBoolean(the hidden right component is active) */
  resize = page => {
    if (page > 768 && page <= 900 && this.state.squeezeLayoutBoolean === false) {
      document.getElementById("col-xl-6-5").style.width = "0";
      document.getElementById("DOMChangedHiddenSide").style.width = "60%";
    } else if (page >= 901 && page <= 1024 && this.state.squeezeLayoutBoolean === false) {
      document.getElementById("col-xl-6-5").style.width = "0%";
      document.getElementById("DOMChangedHiddenSide").style.width = "65%";
    } else if (page >= 1025 && page <= 1300 && this.state.squeezeLayoutBoolean === false) {
      document.getElementById("col-xl-6-5").style.width = "65%";
      document.getElementById("DOMChangedHiddenSide").style.width = "0%";
    } else if (page >= 1301 && this.state.squeezeLayoutBoolean === false) {
      document.getElementById("col-xl-6-5").style.width = "70%";
      document.getElementById("DOMChangedHiddenSide").style.width = "0%";
    }
  };
  /** if user is not this fn() is executed */
  withoutResize = page => {
    if (page > 768 && page <= 900 && this.state.squeezeLayoutBoolean === false) {
      document.getElementById("col-xl-6-5").style.width = "0%";
      document.getElementById("DOMChangedHiddenSide").style.width = "60%";
    } else if (page >= 901 && page <= 1024 && this.state.squeezeLayoutBoolean === false) {
      document.getElementById("col-xl-6-5").style.width = "0%";
      document.getElementById("DOMChangedHiddenSide").style.width = "65%";
    } else if (page >= 1025 && page <= 1300 && this.state.squeezeLayoutBoolean === false) {
      document.getElementById("col-xl-6-5").style.width = "65%";
      document.getElementById("DOMChangedHiddenSide").style.width = "0%";
    } else if (page >= 1301 && this.state.squeezeLayoutBoolean === false) {
      document.getElementById("col-xl-6-5").style.width = "70%";
      document.getElementById("DOMChangedHiddenSide").style.width = "0%";
    }
  };

  /** closes the right side drawer */
  closeDrawerFn = page => {
    if (page > 768 && page <= 900 && this.state.squeezeLayoutBoolean === true) {
      document.getElementById("col-xl-6-5").style.width = "60%";
      document.getElementById("DOMChangedHiddenSide").style.width = "0%";
    } else if (page >= 901 && page <= 1024 && this.state.squeezeLayoutBoolean === true) {
      document.getElementById("col-xl-6-5").style.width = "65%";
      document.getElementById("DOMChangedHiddenSide").style.width = "0%";
    } else if (page >= 1025 && page <= 1300 && this.state.squeezeLayoutBoolean === true) {
      document.getElementById("col-xl-6-5").style.width = "65%";
      document.getElementById("DOMChangedHiddenSide").style.width = "0%";
    } else if (page >= 1301 && this.state.squeezeLayoutBoolean === true) {
      document.getElementById("col-xl-6-5").style.width = "70%";
      document.getElementById("DOMChangedHiddenSide").style.width = "0%";
    }
  };

  /** here page is the window width */
  slideInToggler = () => {
    let leftSide = document.getElementById("col-xl-3-5");
    let rightSide = document.getElementById("col-xl-6-5");
    let hiddenRightC = document.getElementById("DOMChangedHiddenSide");
    let page = document.getElementById("page").clientWidth;
    this.setState({ squeezeLayoutBoolean: true, clientWidth: page }, () => {
      leftSide.classList.add("DOMChangedLeftSide_P-1301", "DOMChangedLeftSide");
      rightSide.classList.add("DOMChangedRightSide_P-1301", "DOMChangedRightSide");
      hiddenRightC.classList.add("DOMChangedHiddenSide");
      this.withoutResize(this.state.clientWidth);
      this.resize(this.state.clientWidth);
    });
  };

  slideOutToggler = () => {
    let rightSide = document.getElementById("col-xl-6-5");
    let leftSide = document.getElementById("col-xl-3-5");
    let hiddenRightC = document.getElementById("DOMChangedHiddenSide");
    let page = document.getElementById("page");
    this.props.closeDrawer();
    this.setState({ squeezeLayoutBoolean: false, clientWidth: page }, () => {
      leftSide.classList.remove("DOMChangedLeftSide", "DOMChangedLeftSide_P-1301");
      rightSide.classList.remove("DOMChangedRightSide", "DOMChangedRightSide_P-1301");
      hiddenRightC.classList.remove("DOMChangedHiddenSide");
      this.closeDrawerFn(this.state.clientWidth);
    });
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
      <Search
        squeezeLayoutBoolean={this.props.squeezeLayoutBoolean}
        hiddenClass={this.props.hiddenClass}
        slideOutToggler={this.slideOutToggler}
        closeDrawer={this.props.closeDrawer}
      />
    );

    let contactInfoContainer = (
      <Contact
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

export default RightHiddenDrawer;
