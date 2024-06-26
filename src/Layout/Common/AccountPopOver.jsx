import { Typography, Menu, MenuItem, Box, Divider } from "@mui/material";
import { useState } from "react";

export default function AccountPopOver() {
  //Styling Variables
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Function to handle mouse leave
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const MenuSx = {
    mt: "32px",
    "& .MuiPaper-root": {
      overflow: "visible",
      borderRadius: "12px",
      filter: "drop-shadow(0px 0px 2px rgba(145, 158, 171, 0.24))",
      mt: 1.5,
      boxShadow: "-20px 20px 40px -4px rgba(145, 158, 171, 0.24)",
      padding: "8px 16px",
    },
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
  };
  const UserInfoSx = {
    width: "220px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    mb: "16px",
  };
  const AvatarSx = {
    width: "32px",
    height: "32px",
    borderRadius: "100%",
    overflow: "hidden",
    transition: "transform 0.3s ease", // Adding transition for smooth scaling
    transform: isHovered ? "scale(1.1)" : "scale(1)",
  };
  const [accountPopOver, setAccountPopOver] = useState(false);
  const handleOpenPopOver = (event) => {
    setAccountPopOver(event.currentTarget);
  };
  const handleClosePopOver = () => {
    setAccountPopOver(null);
  };
  return (
    <Box>
      <Box sx={AvatarSx} onClick={handleOpenPopOver} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <img src="avatar.jpg" width="100%" />
      </Box>
      <Menu
        sx={MenuSx}
        id="menu-appbar"
        anchorEl={accountPopOver}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={accountPopOver}
        onClose={handleClosePopOver}
      >
        <Box sx={UserInfoSx}>
          <Typography variant="body2" color="text.primary">
            example@mail.com
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Admin
          </Typography>
        </Box>
        <Divider variant="middle" sx={{ borderStyle: "dashed" }} />
        <MenuItem
          sx={{
            mt: "8px",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 400,
              color: "#FF4842",
            }}
          >
            Log Out
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}
