import React from 'react';
import Auxillary from '../../../hoc/Auxillary';
import DropDown from '../../../ReusableUI-Components/dropDown';
import Switch from "@material-ui/core/Switch";
import BottomDrawer from './BottomDrawer';
import NotificationDrawer from './Notifications/NotificationDrawer';

class ViewContact extends React.Component {
  state = {
    checkedA: false,
    viewProfileDropdown: true,
    openNotification: false
  }

  componentWithoutSearchBar = (header, leftHeight) => {
    var height = document.getElementById("page").clientHeight;
    var headheight = header.clientHeight;
    var content = leftHeight;
    var step1 = height - headheight;
    var availableheight = step1;
    content.style.marginTop = headheight + "px";
    content.style.height = availableheight + "px";
    content.style.overflow = "auto";
  };

  openNotification = () => {
    this.setState({ openNotification: true })
  }

  closeNotification = () => {
    this.setState({ openNotification: false })
  }

  componentDidMount() {
    let header = document.getElementById("viewProfile__header");
    let content = document.getElementById("viewContact__section")
    this.componentWithoutSearchBar(header, content)
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  render() {
    let exitGroup = (
      <div className="rightSlider__exit__group d-flex">
        <div className="exit-logo-svg">
          <img src={require("../../../assets/svg/stop.svg")} height="20" width="20" alt="exit-svg" />
        </div>
        <div className="rightSlider__exit__group__text d-flex align-items-center">Block</div>
      </div>
    );
    let reportGroup = (
      <div className="report-group-section d-flex">
        <div className="exit-logo-svg">
          <img src={require("../../../assets/svg/thumb-down.svg")} height="20" width="20" alt="report-svg" />
        </div>
        <div className="rightSlider__exit__group__text d-flex align-items-center">Report Contact</div>
      </div>
    );
    return (
      <Auxillary>
        <header className="fixed-top col-12 mobile__view__chat__Messages__Header" id="viewProfile__header">
          <div className="row mx-0 w-100">
            <div className="col-12 px-0 py-1 d-flex">
              <div className="row mx-0 w-100">
                <div
                  className="mobileView__left__arrow d-flex align-items-center justify-content-start"
                  onClick={this.props.closeDrawer}
                >
                  <img src={require("../../../assets/svg/left.svg")} width="20" height="20" alt="left-arrow" />
                </div>
                <div className="mobileView__selectContactSection d-flex align-items-center">
                  <div className="mobile__newChat__selectedContact">
                    <span className="pl-3">Nikolay</span>
                  </div>
                </div>
                <div className="mobile__sender__user__options justify-content-end">
                  <DropDown
                    viewProfileDropdown={this.state.viewProfileDropdown}
                    classes="fas fa-ellipsis-v"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>
        <div id="viewContact__section">
          <div className="col-12 px-0 viewProfile__image__parent px-0">
            <img src="https://upload.wikimedia.org/wikipedia/en/3/3c/Chris_Hemsworth_as_Thor.jpg" alt="thor" className="viewProfile__image" />
          </div>

          <div>
            <div className="media-section px-0 col-12 mt-2">
              <div className="row mx-0">
                <div className="col-6">
                  Media
            </div>
                <div className="col-6 text-right">
                  82 >
            </div>
              </div>
            </div>
            <div className="media-section px-0 col-12">
              <div className="row mx-0">
                <div className="col-12 d-flex justify-content-between">
                  <div className="p-1">
                    <img src="https://via.placeholder.com/150" className="img-responsive" alt="placeholder" height="64" width="64" />
                  </div>
                  <div className="p-1">
                    <img src="https://via.placeholder.com/150" className="img-responsive" alt="placeholder" height="64" width="64" />
                  </div>
                  <div className="p-1">
                    <img src="https://via.placeholder.com/150" className="img-responsive" alt="placeholder" height="64" width="64" />
                  </div>
                  <div className="p-1">
                    <img src="https://via.placeholder.com/150" className="img-responsive" alt="placeholder" height="64" width="64" />
                  </div>
                </div>
              </div>
            </div>
            <div className="media-section mobile__settings__basicInfo__section col-12 mt-3 px-0">
              <div className="row mx-0">
                <div className="col-12 d-flex align-items-center">
                  <div className="w-100 privacy__header">
                    <div className="mobile__settings__header__name">Mute Notifications</div>
                  </div>
                  <div className="switch">
                    <Switch checked={this.state.checkedA} onChange={this.handleChange("checkedA")} value="checkedA" />
                  </div>
                </div>
              </div>
            </div>
            <div className="media-section mobile__settings__basicInfo__section col-12  px-0">
              <div className="row mx-0">
                <div className="col-12 d-flex">
                  <div className="w-100 privacy__header py-2" onClick={this.openNotification}>
                    <div className="mobile__settings__header__name py-1">Custom Notifications</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="media-section col-12 mobile__settings__basicInfo__section px-0">
              <div className="row mx-0">
                <div className="col-12 d-flex">
                  <div className="w-100 privacy__header py-2">
                    <div className="mobile__settings__header__name py-1">Media Visbility</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="media-section col-12 py-1 mobile__settings__basicInfo__section d-flex">
              <div>
                <div className="w-100 privacy__header d-flex">
                  <div className="mobile__settings__header__name">Encryption</div>
                </div>
                <div className="w-100 ">
                  <div className="privacy__child__text">
                    Messages to this chat and calls are secured with end to end Encryption. Tap to verify
                </div>
                </div>
              </div>
              <div className="switch">
              </div>
            </div>
            <div className="media-section col-12 px-0 mt-3">
              <div className="row mx-0 py-1">
                <div className="col-12 viewProfile__section__header">
                  About and Phone Number
              </div>
                <div className="col-12">
                  Can't talk WhatsApp only
              </div>
                <div className="col-12 privacy__child__text">
                  April 9, 2016
              </div>
              </div>
              <div className="row mx-0 d-flex py-1">
                <div className="viewProfile__contact__details">
                  <div className="col-12">
                    +1(203) 671-2162
                  </div>
                  <div className="col-12 privacy__child__text">
                    Mobile
                   </div>
                </div>
                <div className="mobile__sender__user__options">
                  <span className="d-flex justify-content-start pt-1 single-icons user__chat__phone__icon">
                    <img src={require("../../../assets/svg/message-ballon2.svg")} height="18" width="18" alt="video camera" />
                  </span>
                  <span className="single-icons d-flex align-items-center">
                    <img
                      src={require("../../../assets/svg/video-camera.svg")}
                      height="24"
                      width="24"
                      alt="video camera"
                    />
                  </span>
                  <span className="single-icons user__chat__phone__icon">
                    <img src={require("../../../assets/svg/call1.svg")} height="18" width="18" alt="video camera" />
                  </span>
                </div>
              </div>
            </div>
            <div className="media-section col-12 px-0 mt-3">
              {exitGroup}
            </div>
            <div className="media-section  col-12 px-0 mt-3">
              {reportGroup}
            </div>
          </div>
        </div>
        <BottomDrawer onOpen={this.openNotification} open={this.state.openNotification}>
          <NotificationDrawer componentWithoutSearchBar={this.componentWithoutSearchBar} closeDrawer={this.closeNotification} />
        </BottomDrawer>
      </Auxillary>
    )
  }
}

export default ViewContact