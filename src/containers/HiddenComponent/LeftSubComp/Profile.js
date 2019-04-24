import React from "react";
import SearchInputBox from "../../../components/SearchInputBox/SearchInputBox";

class Profile extends React.Component {
  state = {
    isEditing: false
  };
  isEditing = () => {
    this.setState({ isEditing: true });
  };
  render() {
    let withoutEdit = (
      <div className="d-flex">
        <div className="profile_section_name_with_value w-100">Niko</div>
        <div className="profile_section_name_with_value_edit" onClick={this.isEditing}>
          <img src={require("../../../assets/svg/pencil-edit.svg")} alt="edit" height="18" width="18" className="pt-3-custom" />
        </div>
      </div>
    );
    return (
      <div className={this.props.classes} id="newChatActiveBox">
        <header className="col-12 px-0">
          <div className="newChatActive">
            <div className="row">
              <div className="col-12 d-flex h-59 align-items-center">
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
            <div className="col-12 px-0 log-of-chats-new-chat-active profile_section">
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
                  {this.state.isEditing ? (
                    <div>
                      <SearchInputBox casualSearchBox="profileInput" />
                    </div>
                  ) : (
                    withoutEdit
                  )}
                </div>
              </div>
              <div className="row mx-0">
                <div className="static_text">
                  <span>This is not your username or pin. This name will be visible to your WhatsApp contacts.</span>
                </div>
              </div>
              <div className="row mx-0">
                <div className="profile_section_basic_info w-100">
                  <div className="profile_section_name">About</div>
                  {/* {this.props.editing ? 'X' : 'Y'} */}
                  <div className="d-flex">
                    <div className="profile_section_name_with_value w-100">coding</div>
                    <div className="profile_section_name_with_value_edit">
                      <img src={require("../../../assets/svg/pencil-edit.svg")} alt="edit" height="18" width="18" className="pt-3-custom" />
                    </div>
                  </div>

                  {/* <div>
                    <SearchInputBox casualSearchBox="profileInput"  />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Profile;
