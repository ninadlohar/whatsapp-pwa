import React from "react";

class Settings extends React.Component {
  render() {
    return (
      <div className={this.props.classes} id="leftSlider__chatActiveBox">
        <header className="col-12 px-0">
          <div className="newChatActive">
            <div className="row">
              <div className="col-12 d-flex h-59 align-items-center">
                <span className="newChatLeftArrow" onClick={this.props.toggleHandlerOut}>
                  <i className="fas fa-arrow-left" />
                </span>
                <span className="newChatHeader">Settings</span>
              </div>
            </div>
          </div>
        </header>
        <section className="col-12 px-0 leftSide__chat__section">
          <div className="row mx-0">
            <div className="col-12 px-0 leftSide__log__of__chats new-chat-active profile_section">
              <div className="row mx-0">
                <div className="col-12 px-0 settings-section d-flex  w-100">
                  <div className=" settings-section-image-section">
                    <div>
                      <img
                        src={require("../../../assets/images/user-image.jpg")}
                        alt="logged-in-user-img-in-settings-section"
                        className="settings-section-image_img"
                      />
                    </div>
                  </div>
                  <div className="d-flex align-items-center w-100">
                    <div>
                      <div className="settings_section_logged_in_user_name">Niko</div>
                      <div className="settings_section_logged_in_user_status">Coding</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mx-0">
                <div className="col-12 px-0">
                  <div className="settings_options">
                    <div className="d-flex settings_each_logo align-items-center">
                      <div className="settings_logos d-flex justify-content-center">
                        <img src={require("../../../assets/svg/notification.svg")} alt="notification" width="18" height="18" />
                      </div>
                      <div>Notification</div>
                    </div>
                  </div>
                  <div className="settings_options">
                    <div className="d-flex settings_each_logo align-items-center">
                      <div className="settings_logos d-flex justify-content-center">
                        <img src={require("../../../assets/svg/gallery.svg")} alt="gallery" width="18" height="18" />
                      </div>
                      <div>Chat Wallpaper</div>
                    </div>
                  </div>
                  <div className="settings_options">
                    <div className="d-flex settings_each_logo align-items-center">
                      <div className="settings_logos d-flex justify-content-center">
                        <img src={require("../../../assets/svg/blocked.svg")} alt="blocked" width="18" height="18" />
                      </div>
                      <div>Blocked</div>
                    </div>
                  </div>
                  <div className="settings_options">
                    <div className="d-flex settings_each_logo align-items-center">
                      <div className="settings_logos d-flex justify-content-center">
                        <img src={require("../../../assets/svg/help.svg")} alt="notification" width="18" height="18" />
                      </div>
                      <div>Help</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Settings;
