import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CastConnectedOutlinedIcon from "@material-ui/icons/CastConnectedOutlined";
import ExitToAppOutlined from "@material-ui/icons/ExitToAppOutlined";
import HomeIcon from "@material-ui/icons/Home";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/Auth";

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: "inherit" },
  link: { textDecoration: "none", color: theme.palette.text.primary },
}));

const Sidebar: React.FC = ({ children }) => {
  const classes = useStyles();
  const { signOut } = useAuth();

  return (
    <div style={{ display: "flex" }}>
      <Drawer
        style={{ width: "224px" }}
        variant="persistent"
        anchor="left"
        open={true}
        classes={{ paper: classes.drawerPaper }}
      >
        <List>
          <Link to="/dashboard" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Dashboard"} />
            </ListItem>
          </Link>
          <Link to="/machines" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <CastConnectedOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={"Machines"} />
            </ListItem>
          </Link>
          <Link to="#" className={classes.link}>
            <ListItem button onClick={() => signOut()}>
              <ListItemIcon>
                <ExitToAppOutlined />
              </ListItemIcon>
              <ListItemText primary={"LogOut"} />
            </ListItem>
          </Link>
        </List>
      </Drawer>
      {children}
    </div>
  );
};

export default Sidebar;
