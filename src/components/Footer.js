import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import GitHubIcon from "@mui/icons-material/GitHub";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Footer = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: "100vw" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          onClick={() => {
            window.open(
              "https://github.com/amirtha-coder",
              "_blank",
              "noopener,noreferrer"
            );
          }}
          label="GitHub"
          icon={<GitHubIcon />}
        />
        <BottomNavigationAction
          onClick={() => {
            window.open(
              "mailto:amirtha.m.muthirulandi@gmail.com",
              "_blank",
              "noopener,noreferrer"
            );
          }}
          label="Email"
          icon={<MarkEmailUnreadIcon />}
        />
        <BottomNavigationAction
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/a-m-9518071ab/",
              "_blank",
              "noopener,noreferrer"
            );
          }}
          label="LinkedIn"
          icon={<LinkedInIcon />}
        />
      </BottomNavigation>
    </Box>
  );
};
