import { AiFillDashboard, AiFillSetting, AiFillFolder } from "react-icons/ai";
import { TiSpanner } from "react-icons/ti";
import { FaTable, FaChartArea } from "react-icons/fa";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { FaGrinWink, FaUserCircle, FaList } from "react-icons/fa";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  ListItemButton,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../App";

export function SidemenuBar() {
  const { userName, userId } = useContext(authContext);
  const basedonuser = { display: userName === "admin" ? "block" : "none" };
  const userBased = { display: userName !== "admin" ? "block" : "none" };
  return (
    <nav className="sidemenu">
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        <ListItem>
          <div className="logo-heading">
            <FaGrinWink />
            <h3>SB ADMIN</h3>
          </div>
        </ListItem>

        <div className="menu-page">
          <AiFillDashboard className="menu-icons" />

          <Link style={{ color: "white" }} to="/">
            Dashboard
          </Link>
        </div>

        <Divider variant="fullWidth" component="li" />
        <ListItemText className="menu-heading" primary="INTERFACE" />

        <Accordion className="pages" elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMore className="accordian-button" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="heading">
              <AiFillSetting className="menu-icons" />
              <span>Components</span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List className="accordian-list">
              <ListItemButton>Buttons</ListItemButton>
              <ListItemButton>Cards</ListItemButton>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion className="pages" elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="heading">
              <TiSpanner className="menu-icons" />
              <span>Utilites</span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List className="accordian-list">
              <ListItemButton>Colors</ListItemButton>
              <ListItemButton>Borders</ListItemButton>
              <ListItemButton>Animation</ListItemButton>
            </List>
          </AccordionDetails>
        </Accordion>

        <Divider variant="fullWidth" component="li" />
        <ListItemText className="menu-heading" primary="ADDONS" />

        {/* Login pages */}

        <Accordion className="pages" elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="heading">
              <AiFillFolder className="menu-icons" />
              <span>LogIn</span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List className="accordian-list">
              <ListItemButton>
                <Link to="/login">Login</Link>
              </ListItemButton>
              <ListItemButton>
                <Link to="/login">Register</Link>
              </ListItemButton>
              <ListItemButton>
                <Link to="/login">Forgot Password</Link>
              </ListItemButton>
            </List>
          </AccordionDetails>
        </Accordion>

        {/* profile pages */}

        <Accordion className="pages" elevation={0} style={userBased}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="heading">
              <FaUserCircle className="menu-icons" />
              <span>My Profile</span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List className="accordian-list">
              <ListItemButton>
                <Link to={`/profile/${userId}`}>View Profile</Link>
              </ListItemButton>
              <ListItemButton>
                <Link to={`/edit-profile/${userId}`}>Edit Profile</Link>
              </ListItemButton>
            </List>
          </AccordionDetails>
        </Accordion>

        {/* user pages */}
        <Accordion className="pages" elevation={0} style={basedonuser}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="heading">
              <FaList className="menu-icons" />
              <span>Users</span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List className="accordian-list">
              <ListItemButton>
                <Link to="/users">View Users</Link>
              </ListItemButton>
              <ListItemButton>
                <Link to="/create-user">Create User</Link>
              </ListItemButton>
            </List>
          </AccordionDetails>
        </Accordion>

        <div className="menu-page">
          <FaChartArea className="menu-icons" />
          <Link style={{ color: "white" }} to="/charts">
            Charts
          </Link>
        </div>

        <div className="menu-page">
          <FaTable className="menu-icons" />
          <Link style={{ color: "white" }} to="/tables">
            Tables
          </Link>
        </div>
      </List>
    </nav>
  );
}
