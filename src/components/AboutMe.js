import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "../App.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import { Container, Stack } from "@mui/system";
import { NavBar } from "./NavBar";

import { Footer } from "./Footer";

export const AboutMe = ({ pages }) => {
  const style = {
    width: "100vw",
    maxWidth: 1000,
  };

  return (
    <Stack>
      <NavBar pages={pages} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: "100vw",
            height: "100%",
            margin: "4rem",
            padding: "2rem",
            borderRadius: "4%",
            textAlign: "center",
            backgroundImage:
              "linear-gradient(to bottom, #a900ff, #7937ef, #4d44d8, #2348bd, #00469f)",
            color: "#ffffff",
          },
        }}
      >
        <Box>
          <Typography variant="h3" component="h4">
            About Me
            <List
              sx={style}
              component="nav"
              aria-label="mailbox folders"
              textAlign="center"
            >
              <ListItem button>
                <ListItemText>
                  I have volunteered in hospital and been part of explaining
                  impacts of a new technological system introduction to
                  patients. By doing this I have become a strong communuicator-
                  which I know could be overlooked when applying in IT.
                </ListItemText>
              </ListItem>
              <Divider />
              <ListItem button divider>
                <ListItemText>
                  Through duke of edinburgh, I have gained experience working
                  collabratively which has enhanced my communication abilities
                  and listening skills.
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText>
                  I am currently undertaking a coding bootcamp course; prior to
                  this, I have done functional skills qualifications level 1 and
                  2 in IT and an ict technology GCSE at a grade A.
                </ListItemText>
              </ListItem>
              <Divider light />
            </List>
          </Typography>
        </Box>
      </Box>
      <Footer />
    </Stack>
  );
};
