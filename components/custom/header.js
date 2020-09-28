import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AppBarCollapse from "./AppBarCollapse";
import { Avatar, Link } from "@material-ui/core";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  navigation: {},
  toggleDrawer: {},
  appTitle: {}
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <AppBar position="fixed" color="default" className={classes.navigation}>
      <Toolbar>
        <Link as href='/' variant='inherit' underline="none">
          <Avatar aria-label="author" variant="square" style={{ margin: "0rem 1rem" }} src="/favicon/android-icon-192x192.png"  />
          </Link>
          <Typography
            variant="h6"
            className={classes.appTitle}
          >
            <Link variant='h6' href='/' underline="none">
              Basic Biotech
           </Link>
          </Typography>
          <AppBarCollapse />
      </Toolbar>
    </AppBar>
  );
}

ButtonAppBar.propTypes = {
        classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
