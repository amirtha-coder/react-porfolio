import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "../App.css";

import { Container, Stack } from "@mui/system";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

export const AboutMe = ({ pages }) => {
  return (
    <Container>
      <NavBar pages={pages} />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: "100vw",
            height: "100%",
            borderRadius: "5%",
          },
        }}
      >
        <Box>
          <Typography
            variant="h3"
            component="h4"
            className="about-me-container"
          >
            <h2> About Me</h2>
            <ul>
              <li>
                I have volunteered in hospital and been part of explaining
                impacts of a new technological system introduction to patients.
                By doing this I have become a strong communuicator- which I know
                could be overlooked when applying in IT.
              </li>
              <li>
                Through duke of edinburgh, I have gained experience working
                collabratively which has enhanced my communication abilities and
                listening skills.
              </li>
              <li>
                I am currently undertaking a coding bootcamp course; prior to
                this, I have done functional skills qualifications level 1 and 2
                in IT and an ict technology GCSE at a grade A.
              </li>
            </ul>
          </Typography>
        </Box>
      </Box>
      <Footer />
    </Container>
  );
};
