import React from "react";
import SearchInputBox from "../../../Common__UI__Components/SearchInputBox";

class AddAbout extends React.Component {
  state = {
    secondValue: ""
  };
  sendMessageIcon = e => {
    this.setState({ secondValue: e }, () => {
      if (e === "") {
        this.setState({ sendMessageIcon: false });
      }
    });
  };
  render() {
    return (
      <div className="p-4">
        <div className="small__drawer__header">Add About</div>
        <div className="w-100 d-flex">
          <div className="custom__width90">
            <SearchInputBox searchBoxType="smallDrawerInput" onChangeHandler={this.sendMessageIcon} />
          </div>
          <div className="h-100 d-flex align-items-center">
            <i className="far fa-grin-alt smiley icon-color" />
          </div>
        </div>
        <div className="col-12 pt-2 d-flex justify-content-end">
          <div className="privacy" onClick={this.props.closeDrawer}>
            CANCEL
          </div>
          <div className="ml-4 privacy" onClick={this.props.closeDrawer}>
            SAVE
          </div>
        </div>
      </div>
    );
  }
}

export default AddAbout;
