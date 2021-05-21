import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AssessmentOutlinedIcon from "@material-ui/icons/AssessmentOutlined";
import CastConnectedOutlinedIcon from "@material-ui/icons/CastConnectedOutlined";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import ExitToAppOutlined from "@material-ui/icons/ExitToAppOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import TrendingUpOutlinedIcon from "@material-ui/icons/TrendingUpOutlined";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/Auth";
import LogoBox from "../LogoBox";
import UserBox from "../UserBox";
import { LogoContainer, UserContainer } from "./styles";

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: "inherit" },
  link: { textDecoration: "none", color: theme.palette.primary.main },
}));

const Sidebar: React.FC = ({ children }) => {
  const classes = useStyles();
  const { signOut } = useAuth();

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Drawer
        style={{
          width: "224px",
        }}
        variant="persistent"
        anchor="left"
        open={true}
        classes={{ paper: classes.drawerPaper }}
      >
        <LogoContainer>
          <LogoBox />
        </LogoContainer>

        <List>
          <Link to="/dashboard" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <DashboardOutlinedIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={"Dashboard"} />
            </ListItem>
          </Link>
          <Link to="#" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <CastConnectedOutlinedIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={"Monitoramento"} />
            </ListItem>
          </Link>
          <Link to="#" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <AssessmentOutlinedIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={"Relatórios"} />
            </ListItem>
          </Link>
          <Link to="#" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <SettingsOutlinedIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={"Maquinas"} />
            </ListItem>
          </Link>
          <Link to="#" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <TrendingUpOutlinedIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={"Métricas"} />
            </ListItem>
          </Link>
          <Link to="#" className={classes.link}>
            <ListItem button onClick={() => signOut()}>
              <ListItemIcon>
                <ExitToAppOutlined color="primary" />
              </ListItemIcon>
              <ListItemText primary={"LogOut"} />
            </ListItem>
          </Link>
        </List>

        <UserContainer>
          <UserBox />
        </UserContainer>
      </Drawer>
      {children}
    </div>
  );
};

export default Sidebar;
