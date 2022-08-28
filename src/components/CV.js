import * as React from "react";
import Box from "@mui/material/Box";
import { Container, Stack } from "@mui/system";
import { NavBar } from "./NavBar";
import Chip from "@mui/material/Chip";
import { Link, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DescriptionIcon from "@mui/icons-material/Description";
export const CV = ({ pages }) => {
  const navigate = useNavigate();
  return (
    <Stack>
      <NavBar pages={pages} />
      <Box
        my={5}
        sx={{
          width: "100vw",
          height: "80vh",
          backgroundColor: "#B39CD0",
          opacity: [0.9, 0.8, 0.7],
        }}
      >
        <Container>
          <Typography variant="h3" component="h4" align="center">
            <h2>CV</h2>
            <h3>Skills</h3>
            <Stack
              direction="row"
              spacing={1}
              justifyContent="center"
              alignItems="center"
            >
              <Chip label="HTML" />
              <Chip label="CSS" />
              <Chip label="Vanilla JS" />
              <Chip label="MongoDB" />
              <Chip label="Web APIs" />
              <Chip label="JQuery" />
              <Chip label="React" />
              <Chip label="HandleBars" />
              <Chip label="Object Orientated Programming" />
              <Chip label="mysql" />
            </Stack>
            <Typography variant="h7" component="h5" mt={4}>
              Download CV
            </Typography>
            <Link
              variant="body2"
              target={"_blank"}
              href="https://docs.google.com/document/d/1b03P8B8C01SAlmeD8aH9-tSNUZ_JHtQYNGdwsV-Hb2k/edit"
            >
              <DescriptionIcon sx={{ fontSize: 100 }} />
            </Link>
          </Typography>
        </Container>
      </Box>
    </Stack>
  );
};
