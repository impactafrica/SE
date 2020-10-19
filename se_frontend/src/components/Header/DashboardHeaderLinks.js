/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";
import { useHistory } from "react-router-dom";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const history = useHistory();
  const to_modules = () => history.push('/modules_list');
  const to_home = () => history.push('/landing_page');
  const to_signin = () => history.push('/signin-page');

  return (
    <List className={classes.list} style={{fontFamily:"Montserrat"}}>

      
      <ListItem className={classes.listItem}>
        <Button
          onClick={to_modules}
          style={{fontFamily:"Montserrat"}}
          to="/modules"
          target="_blank"
          color="transparent"
          className={classes.navLink}
        >
          <b>Your Project</b>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          onClick={to_modules}
          style={{fontFamily:"Montserrat"}}
          to="/modules"
          target="_blank"
          color="transparent"
          className={classes.navLink}
        >
          <b>Profile</b>
        </Button>
      </ListItem>
      
      <ListItem className={classes.listItem}>
        <Button
          onClick={to_signin}
          style={{fontFamily:"Montserrat"}}
          target="_blank"
          color="primary"
          className={classes.navLink}
        >
          <b>Sign Out</b>
        </Button>
      </ListItem>

      {/* <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="twitter-tooltip"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem> */}
    </List>
  );
}
