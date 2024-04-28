import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import { navConfig } from "./Common/Nav_config";
import { ListItem, ListItemButton, Typography } from "@mui/material";
import Logo from "/itbd.svg";
import Navbar from "./Navbar";
const drawerWidth = 280;

function Sidebar(props) {
  // eslint-disable-next-line
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  // eslint-disable-next-line
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const linkStyle = {
    textDecoration: "none",
    fontWeight: 600,
    borderRadius: "4px",
  };
  const { pathname } = useLocation();

  const drawer = (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          p: "16px",
        }}
      >
        <Box sx={{ ml: "32px" }}>
          <img src={Logo} alt="logo" width="48px" height="48px" />
        </Box>
        <List>
          {navConfig({ pathname }).map((item) => (
            <Link to={item.link} style={linkStyle} key={item.id}>
              <ListItem
                key={item.id}
                disablePadding
                sx={{
                  background:
                    pathname === item.link && "rgba(0 ,174, 96, 0.12)",
                  borderRadius: "8px",
                  width: "100%",
                  height: "44px",
                  mb: "4px",
                  display: "flex",
                }}
              >
                <ListItemButton
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    borderRadius: "4px",
                    width: "100%",
                    padding: "8px 16px",
                    height: "44px",
                    color: pathname === item.link ? "#00AE60" : "#918EAF",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: "40px",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <Typography
                    sx={{
                      fontWeight: pathname === item.link ? 600 : 500,
                      fontSize: "14px",
                    }}
                  >
                    {item.title}
                  </Typography>
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", lg: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderRightStyle: "dashed",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Sidebar;
