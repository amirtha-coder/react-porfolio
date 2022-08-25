import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

export const ContactMe = ({ pages }) => {
  const [clearMessage, setClearMessage] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const form = useRef();

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const sendEmail = (e) => {
    e.preventDefault();
    if (name.length !== 0 && email.length !== 0 && message.length !== 0) {
      emailjs
        .sendForm(
          "service_0duywto",
          "template_qjchusf",
          form.current,
          "nIVIFJXoZ1MufHwIz"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      console.log("error");
    }
  };

  const handleChange = (event) => {
    setOpen(false);
    if (event.target.name === "user_name") {
      setName(event.target.value);
    }
    if (event.target.name === "user_email") {
      setEmail(event.target.value);
    }
    if (event.target.name === "message") {
      setMessage(event.target.value);
    }
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Container>
      <NavBar pages={pages} />
      <Box
        component="form"
        ref={form}
        onSubmit={sendEmail}
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          background:
            "radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%)",
          margin: "1rem",
          padding: "1rem",
          borderRadius: "5%",
        }}
        noValidate
      >
        <Typography component="h3" variant="h2" align="center">
          Contact Me
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            id="filled-multiline-flexible"
            label="Name"
            name="user_name"
            multiline
            maxRows={6}
            value={name}
            onChange={handleChange}
            variant="filled"
          />
          <TextField
            id="filled-textarea"
            name="user_email"
            type="text"
            value={email}
            onChange={handleChange}
            label="Email"
            placeholder="someone@email.com"
            multiline
            variant="filled"
          />
          <TextField
            id="filled-multiline-static"
            name="message"
            value={message}
            onChange={handleChange}
            label="Message"
            placeholder="Type here..."
            multiline
            rows={4}
            variant="filled"
          />
        </Box>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          <Button
            variant="contained"
            onClick={handleClick}
            type="submit"
            value="Send"
            endIcon={<SendIcon />}
          >
            Send
          </Button>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            {name.length !== 0 && email.length !== 0 && message.length !== 0 ? (
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                This has been successfully sent to creater
              </Alert>
            ) : (
              <Alert
                onClose={handleClose}
                severity="error"
                sx={{ width: "100%" }}
              >
                Fill all fields
              </Alert>
            )}
          </Snackbar>
        </Stack>
      </Box>
      <Footer />
    </Container>
  );
};
