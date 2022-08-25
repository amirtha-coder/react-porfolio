import * as React from "react";
import Box from "@mui/material/Box";
import { Stack } from "@mui/system";
import { NavBar } from "./NavBar";
import { Link, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const CV = ({ pages }) => {
  const navigate = useNavigate();
  return (
    <Stack>
      <NavBar pages={pages} />
      <Box
        my={3}
        sx={{
          width: "100vw",
          height: "80vh",
          backgroundColor: "primary.light",
          "&:hover": {
            backgroundColor: "secondary.light",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Typography variant="h3" component="h4" align="center">
          <h2>CV</h2>
          <ul>
            <li>
              Skills: HTML, CSS, Vanilla Javascript, Jquery, Web Apis, MongoDb,
              React, GraphQL
            </li>
            <li>
              <Link
                component="button"
                variant="body2"
                onClick={() => {}}
              ></Link>
            </li>
          </ul>
        </Typography>
      </Box>
    </Stack>
  );
};
