import React from "react";
import FooterAndMessageLogs from "../../components/FooterAndMessageArea/Footer/FooterAndMessageLogs";
import DropDown from "../../ReusableUI-Components/dropDown";
import Aux from "../../hoc/Aux";

class RightSide extends React.Component {
  state = {
    attachment: true,
    baseClasses: ["col-xl-6-5", "rightSide__chat__window__parent", "px-0"],
    squeezeLayoutBoolean: this.props.squeezeLayoutBoolean
  };

  // slideInToggler = () => {
  //   let leftSide = document.getElementById("col-xl-3-5");
  //   let rightSide = document.getElementById("col-xl-6-5");

  //   this.setState({ squeezeLayoutBoolean: true }, () => {
  //     // this.props.squeezeBooleanTrue();
  //     leftSide.classList.add("DOMChangedLeftSide_P-1301", "DOMChangedLeftSide");
  //     rightSide.classList.add("DOMChangedRightSide_P-1301", "DOMChangedRightSide");
  //   });
  //   if (document.getElementById("page").clientWidth < 1025) {
  //     document.getElementById("col-xl-6-5").style.width = "0%";
  //     document.getElementById("DOMChangedHiddenSide").style.width = "70%";
  //   }
  // };

  handleMenuClick1 = screen1 => {
    this.props.setRightSliderScreen(screen1);
    console.log(screen1 + " was clicked");
  };

  componentDidMount() {
    window.addEventListener("resize", function(e) {
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
      <Aux>
        <div className={appendClasses} id="col-xl-6-5">
          {/* <div id="col-xl-6-5"> */}
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
                            className="logged__in__user__image__49px"
                          />
                        </div>
                      </div>
                      <div className="rightSide__header__details py-1 px-1">
                        <div className="rightSide___chat__sender__or__group__name">Coders Hub</div>
                        <div className="rightSide___chat__phone__number">
                          <span>
                            +1(201) 443 - 4380, +1(470) 343 - 9700, +1(703) 307 - 8272, +1(716) 333 - 5233, +1(716) 501 - 8285, +1(732) 983
                            - 61
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rightSide__header__with__icons">
                    <div className="row justify-content-center align-items-center h-100 mx-0">
                      {/** F: [F] -> T */}
                      <i className="fas fa-search icon-color px-3" onClick={() => this.props.setRightSliderScreen("SEARCH")} />
                      <DropDown attachment={this.state.attachment} classes="fas fa-paperclip icon-color" />
                      <DropDown
                        rightDropdown={this.props.rightDropdown}
                        classes="fas fa-ellipsis-v"
                        handleMenuClick1={this.handleMenuClick1}
                        squeezeLayoutBoolean={this.state.squeezeLayoutBoolean}
                        // setTrue={this.props.squeezeBooleanTrue}
                        // setSearchComponentFalseFn={this.props.setSearchComponentFalseFn}
                      />
                    </div>
                  </div>
                </div>
              </header>
            </div>
            <FooterAndMessageLogs /> {/** it includes message logs area */}
          </div>
        </div>
      </Aux>
    );
  }
}

export default RightSide;
