import React from "react";
import SearchInputBox from "../../../../components/SearchInputBox/SearchInputBox";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

const currencies = [
  {
    value: "Austraila",
    label: "Austrailia"
  },
  {
    value: "Canada",
    label: "Canada"
  },
  {
    value: "Belgium",
    label: "Belgium"
  },
  {
    value: "Japan",
    label: "Japan"
  }
];

class DeleteMyAccount extends React.Component {
  state = {
    currency: "EUR"
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <header className="col-12 mobile__view__starred__Messages__Header py-2" id="head">
          <div className="row mx-0 w-100">
            <div className="col-12 px-0 py-1 d-flex">
              <div className="row mx-0 w-100">
                <div
                  className="mobileView__left__arrow d-flex align-items-center justify-content-start"
                  onClick={this.props.closeDrawer}
                >
                  <img src={require("../../../../assets/svg/left.svg")} width="24" height="24" alt="left-arrow" />
                </div>
                <div className="mobileView__selectContactSection pl-3">
                  <div className="mobile__newChat__selectedContact">Delete Account</div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="col-12 px-0 leftSide__chat__section">
          <div className="row mx-0">
            <div className="col-12 px-0 leftSide__log__of__chats leftSlider__profile__section">
              <div className="row mx-0">
                <div className="col-12 py-3 d-flex">
                  <div className="d-flex pt-1 pl-3 pr-4">
                    <img
                      src={require("../../../../assets/svg/danger.svg")}
                      alt="sender-images"
                      height="18"
                      width="18"
                    />
                  </div>
                  <div className="w-100 deleteAccount__head__section">
                    <div className="deleteAccount__1st__header pb-1">Deleting your account will</div>
                    <div>
                      <ul className="delelteAccount__ul">
                        <li>Delete your account from WhatsApp</li>
                        <li>Erase your message history</li>
                        <li>Delete you from all of your WhatsApp groups</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-12 py-3 d-flex deleteAccount__head__section">
                  <div className="d-flex pt-1 pl-3 pr-4">
                    <img
                      src={require("../../../../assets/svg/smartphone.svg")}
                      alt="sender-images"
                      height="18"
                      width="18"
                    />
                  </div>
                  <div className="w-100 deleteAccount__head__section">
                    <div className=" pb-1">Change number instead</div>
                    <div className="w-100 d-flex">
                      <div className="change_number">
                        <div className="d-flex justify-content-center">CHANGE NUMBER</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 py-3 d-flex deleteAccount__head__section">
                  <div className="d-flex pt-1 pl-3 pr-4" />
                  <div className="w-100 deleteAccount__head__section pl-3">
                    <div className="pb-3">
                      To delete your account, confirm your country code and enter your phone number.
                    </div>

                    <TextField
                      id="standard-select-currency"
                      select
                      label="Country"
                      className={classes.textField}
                      value={this.state.currency}
                      onChange={this.handleChange("currency")}
                      SelectProps={{
                        MenuProps: {
                          className: classes.menu
                        }
                      }}
                      margin="none"
                    >
                      {currencies.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>

                    <div className="py-1">
                      <div>Phone</div>
                      <div className="d-flex">
                        <div className="col-2 px-0 d-flex">
                          <span className="prefix__plus">+</span>
                          <SearchInputBox searchBoxType="mobileChangeNumberInputs" p91="91" />
                        </div>
                        <div className="col-10">
                          <SearchInputBox searchBoxType="mobileChangeNumberInputs" placeholder="Old phone number" />
                        </div>
                      </div>
                    </div>
                    <div className="w-100 d-flex pt-3">
                      <div className="delete_account">
                        <div className="d-flex justify-content-center">DELETE MY ACCOUNT</div>
                      </div>
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

export default withStyles(styles)(DeleteMyAccount);
