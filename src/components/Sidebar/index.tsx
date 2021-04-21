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
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Home from "../../pages/Home";
import LogIn from "../../pages/LogIn";
import Machines from "../../pages/Machines";

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: "inherit" },
  link: { textDecoration: "none", color: theme.palette.text.primary },
}));

const Sidebar = () => {
  const classes = useStyles();
  const { push } = useHistory();

  const handleLogOut = () => {
    push("/");
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route>
          <Drawer
            style={{ width: "274px" }}
            variant="persistent"
            anchor="left"
            open={true}
            classes={{ paper: classes.drawerPaper }}
          >
            <List>
              <Link to="/home" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Home"} />
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
              <Link to="" className={classes.link}>
                <ListItem button onClick={handleLogOut}>
                  <ListItemIcon>
                    <ExitToAppOutlined />
                  </ListItemIcon>
                  <ListItemText primary={"LogOut"} />
                </ListItem>
              </Link>
            </List>
          </Drawer>
          <Route exact path="/home" component={Home} />
          <Route exact path="/machines" component={Machines} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Sidebar;
