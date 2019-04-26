import React from "react";
import SearchInputBox from "../../../components/SearchInputBox/SearchInputBox";

class Profile extends React.Component {
  state = {
    isEditingName: false,
    isEditingAbout: false
  };
  isEditingNameFn = () => {
    this.setState({ isEditingName: !this.state.isEditingName });
  };
  isEditingAboutFn = () => {
    console.log("isEditingAboutFn() => " + this.state.isEditingAbout);
    this.setState({ isEditingAbout: !this.state.isEditingAbout });
  };
  render() {
    let editName = (
      <div className="d-flex">
        <div className="profile_section_name_with_value w-100">Niko</div>
        <div className="profile_section_name_with_value_edit" onClick={this.isEditingNameFn}>
          <img src={require("../../../assets/svg/pencil-edit.svg")} alt="edit" height="18" width="18" className="pt-3-custom" />
        </div>
      </div>
    );
    let editAbout = (
      <div className="d-flex">
        <div className="profile_section_name_with_value w-100">coding</div>
        <div className="profile_section_name_with_value_edit" onClick={this.isEditingAboutFn}>
          <img src={require("../../../assets/svg/pencil-edit.svg")} alt="edit" height="18" width="18" className="pt-3-custom" />
        </div>
      </div>
    );
    return (
      <div className={this.props.classes} id="newChatActiveBox">
        <header className="col-12 px-0">
          <div className="newChatActive">
            <div className="row mx-0">
              <div className="col-12 px-0 d-flex h-59 align-items-center">
                <span className="newChatLeftArrow" onClick={this.props.toggleHandlerOut}>
                  <i className="fas fa-arrow-left" />
                </span>
                <span className="newChatHeader">Profile</span>
              </div>
            </div>
          </div>
        </header>

        <section className="col-12 px-0 chat-section">
          <div className="row mx-0">
            {/** all chats will append here from API */}
            {/** log-of-chats-new-chat-active will be true when active else log-of-chats toggle*/}
            <div className="col-12 px-0 log-of-chats new-chat-active profile_section">
              <div className="row mx-0">
                <div className="leftDrawer_Profile_ImageSection w-100 d-flex justify-content-center">
                  <img
                    src={require("../../../assets/images/user-image.jpg")}
                    alt="logged_in_user_image"
                    className="leftDrawer_Profile_ImageSection_image justify-content-center"
                  />
                </div>
              </div>
              <div className="row mx-0">
                <div className="profile_section_basic_info w-100">
                  <div className="profile_section_name">Your Name</div>
                  {this.state.isEditingName ? (
                    <div>
                      <SearchInputBox searchBoxType="simpleInputForProfile__Name" isEditingNameFn={this.isEditingNameFn} />
                    </div>
                  ) : (
                    editName
                  )}
                </div>
              </div>
              <div className="row mx-0">
                <div className="static_text">
                  <span>This is not your username or pin. This name will be visible to your WhatsApp contacts.</span>
                </div>
              </div>

              {/* <div className="row mx-0"> */}
              <div className="profile_section_basic_info w-100">
                <div className="profile_section_name">About</div>
                {this.state.isEditingAbout ? (
                  <div>
                    <SearchInputBox searchBoxType="simpleInputForProfile__About" isEditingAboutFn={this.isEditingAboutFn} />
                  </div>
                ) : (
                  editAbout
                )}
              </div>
              {/* </div> */}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Profile;
