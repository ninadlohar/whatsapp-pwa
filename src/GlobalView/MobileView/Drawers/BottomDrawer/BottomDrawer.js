import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

class BottomDrawer extends React.Component {
  render() {
    return (
      <Drawer anchor="bottom" open={this.props.open} className="bottomDrawerParent">
        <div tabIndex={0} onClick={this.props.toggleDrawer} className="bottomDrawer">
          {this.props.children}
        </div>
      </Drawer>
    );
  }
}

export default withStyles(styles)(BottomDrawer);
