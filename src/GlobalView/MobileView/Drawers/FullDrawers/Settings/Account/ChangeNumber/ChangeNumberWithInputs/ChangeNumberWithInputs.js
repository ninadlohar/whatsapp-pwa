import React from "react";
import SearchInputBox from "../../../../../../../Common__UI__Components/Utils/SearchInputBox/SearchInputBox";

class ChangeNumberWithInputs extends React.Component {
  componentDidMount() {
    let header = document.getElementById("mobile__changeNumberWithInputs__head");
    let infoSection = document.getElementById("mobile__changeNumberWithInputs__section");
    this.props.componentWithoutSearchBar(header, infoSection);
  }
  render() {
    return (
      <div>
        <header className="col-12 fixed-top mobile__view__starred__Messages__Header py-2" id="mobile__changeNumberWithInputs__head">
          <div className="row mx-0 w-100">
            <div className="col-12 px-0 py-1 d-flex">
              <div className="row mx-0 w-100">
                <div className="mobileView__left__arrow d-flex align-items-center justify-content-start" onClick={this.props.closeDrawer}>
                  <img src={require("../../../../../../../../assets/svg/left.svg")} width="24" height="24" alt="left-arrow" />
                </div>
                <div className="mobileView__selectContactSection pl-3">
                  <div className="mobile__newChat__selectedContact">Change Number</div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div id="mobile__changeNumberWithInputs__section">
          <section className="col-12 leftSide__chat__section">
            <div className="row">
              <div className="col-12 leftSide__log__of__chats leftSlider__profile__section">
                <div className="row">
                  <div className="col-12">
                    <div className="py-3">
                      <div>Enter your old phone number with country code</div>
                      <div className="d-flex">
                        <div className="col-2 px-0 d-flex">
                          <span className="pt-2 prefix__plus">+</span>
                          <SearchInputBox searchBoxType="mobileChangeNumberInputs" p91="91" />
                        </div>
                        <div className="col-10">
                          <SearchInputBox searchBoxType="mobileChangeNumberInputs" placeholder="Old phone number" />
                        </div>
                      </div>
                    </div>
                    <div className="py-1">
                      <div>Enter your new phone number with country code</div>
                      <div className="d-flex">
                        <div className="col-2 px-0 d-flex">
                          <span className="pt-2 prefix__plus">+</span>
                          <SearchInputBox searchBoxType="mobileChangeNumberInputs" p91="91" />
                        </div>
                        <div className="col-10">
                          <SearchInputBox searchBoxType="mobileChangeNumberInputs" placeholder="Old phone number" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="enable-button-parent w-100 d-flex justify-content-center" onClick={this.setStep1True}>
            <div className="enable-button">
              <div className="d-flex justify-content-center">NEXT</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChangeNumberWithInputs;
