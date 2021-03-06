import React from "react";
import Footer from "../../DesktopView/RightSide/components/Footer/Footer";
import DropDown from "../../Common__UI__Components/DropDown/DropDown";
import Auxillary from "../../../hoc/Auxillary";

class RightSide extends React.Component {
  state = {
    attachment: true,
    baseClasses: ["col-xl-6-5", "rightSide__chat__window__parent", "px-0"],
    squeezeLayoutBoolean: this.props.squeezeLayoutBoolean
  };

  handleMenuClick1 = screen1 => {
    this.props.setRightSliderScreen(screen1);
  };

  componentDidMount() {
    var height = document.getElementById("page").clientHeight;
    var headerheight = document.getElementById("right__header").clientHeight;
    var footer = document.getElementById("footer").clientHeight;
    var content = document.getElementById("message1List");
    var step1 = height - headerheight;
    var availableheight = step1 - footer;
    content.style.height = availableheight - 40 + "px";
    content.style.overflow = "scroll";

    window.addEventListener("resize", function() {
      var height = document.getElementById("page").clientHeight;
      var headerheight = document.getElementById("right__header").clientHeight;
      var footer = document.getElementById("footer").clientHeight;
      var content = document.getElementById("message1List");
      var step1 = height - headerheight;
      var availableheight = step1 - footer;
      content.style.height = availableheight - 40 + "px";
      content.style.overflow = "scroll";
    });
  }

  render() {
    let appendClasses = this.state.squeezeLayoutBoolean
      ? this.state.baseClasses.concat(this.props.addClassesRightSide).join(" ")
      : this.state.baseClasses.join(" ");

    return (
      <Auxillary>
        <div className={appendClasses} id="col-xl-6-5">
          <div className="rightSide__chat__window__child">
            <div className="row mx-0">
              <header className="col-12 rightSide__header px-0" id="right__header">
                <div className="row mx-0">
                  <div className="rightSide__header__without__icons">
                    <div className="row mx-0">
                      <div className="rightSide__header__sender__image d-flex justify-content-center">
                        <div className="py-2">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Carl-Benz_coloriert.jpg"
                            alt="karl-benz"
                            className="header__image"
                          />
                        </div>
                      </div>
                      <div className="rightSide__header__details py-1 px-1">
                        <div className="rightSide___chat__sender__or__group__name">Coders Hub</div>
                        <div className="rightSide___chat__phone__number">
                          <span className="group__phone__numbers">
                            +1(201) 443 - 4380, +1(470) 343 - 9700, +1(703) 307 - 8272, +1(716) 333 - 5233, +1(716) 501 - 8285, +1(732) 983
                            - 61
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rightSide__header__with__icons">
                    <div className="row justify-content-center align-items-center h-100 mx-0">
                      <i className="fas fa-search icon-color px-3" onClick={() => this.props.setRightSliderScreen("SEARCH")} />
                      <DropDown attachment={this.state.attachment} classes="fas fa-paperclip icon-color" />
                      <DropDown
                        rightDropdown={this.props.rightDropdown}
                        classes="fas fa-ellipsis-v"
                        handleMenuClick1={this.handleMenuClick1}
                        squeezeLayoutBoolean={this.state.squeezeLayoutBoolean}
                      />
                    </div>
                  </div>
                </div>
              </header>
            </div>
            <Footer />
          </div>
        </div>
      </Auxillary>
    );
  }
}

export default RightSide;
