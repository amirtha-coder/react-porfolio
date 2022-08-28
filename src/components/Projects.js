import { Box, Container } from "@mui/system";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button, CardActionArea, CardActions, Link } from "@mui/material";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import buddyUp from "../images/buddy-up.png";
import policeCrimeFighter from "../images/police-crime-fighter.png";
import dayPlanner from "../images/dayplanner.png";
import passwordGenerator from "../images/passwordgenerator.png";
import portfolio from "../images/portfolio.jpeg";
import weatherDashboard from "../images/weatherdashboard.png";
import codeQuiz from "../images/codequiz.png";

export const Projects = ({ pages }) => {
  return (
    <Box>
      <NavBar pages={pages} />
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Card
          sx={{
            width: 345,
            height: 300,
            margin: "2rem",
            padding: "1rem",
          }}
        >
          <CardActionArea>
            <CardMedia component="img" height="140" src={buddyUp} />
            <CardContent>
              <Typography variant="body2" color="text.secondary"></Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Typography gutterBottom variant="h5" component="div">
              <Link
                href="https://limitless-citadel-05906.herokuapp.com/"
                target={"_blank"}
              >
                View BuddyUp
              </Link>
            </Typography>
            <Button size="small" color="primary">
              <Link
                href="https://github.com/roxywasiak/buddy-up"
                target={"_blank"}
              >
                <GitHubIcon fontSize="large" />
              </Link>
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            width: 345,
            height: 300,
            margin: "2rem",
            padding: "1rem",
          }}
        >
          <CardActionArea>
            <CardMedia component="img" height="140" src={policeCrimeFighter} />
            <CardContent>
              <Typography variant="body2" color="text.secondary"></Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Typography gutterBottom variant="h5" component="div">
              <Link
                href="https://skyisnotgreen.github.io/police-crime-fighter/"
                target={"_blank"}
              >
                View Police-Crime-Fighter
              </Link>
            </Typography>
            <Button size="small" color="primary">
              <Link
                href="https://github.com/SkyIsNotGreen/police-crime-fighter"
                target={"_blank"}
              >
                <GitHubIcon fontSize="large" />
              </Link>
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            width: 345,
            height: 300,
            margin: "2rem",
            padding: "1rem",
          }}
        >
          <CardActionArea>
            <CardMedia component="img" height="140" src={codeQuiz} />
            <CardContent>
              <Typography variant="body2" color="text.secondary"></Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Typography gutterBottom variant="h5" component="div">
              <Link
                href="https://amirtha-coder.github.io/timed-code-quiz/"
                target={"_blank"}
              >
                View Code Quiz
              </Link>
            </Typography>
            <Button size="small" color="primary">
              <Link
                href="https://github.com/amirtha-coder/timed-code-quiz"
                target={"_blank"}
              >
                <GitHubIcon fontSize="large" />
              </Link>
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            width: 345,
            height: 300,
            margin: "2rem",
            padding: "1rem",
          }}
        >
          <CardActionArea>
            <CardMedia component="img" height="140" src={weatherDashboard} />
            <CardContent>
              <Typography variant="body2" color="text.secondary"></Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Typography gutterBottom variant="h5" component="div">
              <Link
                href="https://amirtha-coder.github.io/dashboard-with-weather/"
                target={"_blank"}
              >
                View Weather Dashboard
              </Link>
            </Typography>
            <Button size="small" color="primary">
              <Link
                href="https://github.com/amirtha-coder/dashboard-with-weather"
                target={"_blank"}
              >
                <GitHubIcon fontSize="large" />
              </Link>
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            width: 345,
            height: 300,
            margin: "2rem",
            padding: "1rem",
          }}
        >
          <CardActionArea>
            <CardMedia component="img" height="140" src={dayPlanner} />
            <CardContent>
              <Typography variant="body2" color="text.secondary"></Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Typography gutterBottom variant="h5" component="div">
              <Link
                href="https://github.com/amirtha-coder/work-day-planner/tree/dev"
                target={"_blank"}
              >
                View DayPlanner
              </Link>
            </Typography>
            <Button size="small" color="primary">
              <Link
                href="https://github.com/SkyIsNotGreen/police-crime-fighter"
                target={"_blank"}
              >
                <GitHubIcon fontSize="large" />
              </Link>
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            width: 345,
            height: 300,
            margin: "2rem",
            padding: "1rem",
          }}
        >
          <CardActionArea>
            <CardMedia component="img" height="140" src={passwordGenerator} />
            <CardContent>
              <Typography variant="body2" color="text.secondary"></Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Typography gutterBottom variant="h5" component="div">
              <Link
                href="https://amirtha-coder.github.io/random-password-generator/"
                target={"_blank"}
              >
                View Password Generator
              </Link>
            </Typography>
            <Button size="small" color="primary">
              <Link
                href="https://github.com/amirtha-coder/random-password-generator/tree/dev"
                target={"_blank"}
              >
                <GitHubIcon fontSize="large" />
              </Link>
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            width: 345,
            height: 300,
            margin: "2rem",
            padding: "1rem",
          }}
        >
          <CardActionArea>
            <CardMedia component="img" height="140" src={portfolio} />
            <CardContent>
              <Typography variant="body2" color="text.secondary"></Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Typography gutterBottom variant="h5" component="div">
              <Link
                href="https://amirtha-coder.github.io/amirtha-portfolio/"
                target={"_blank"}
              >
                View portfolio
              </Link>
            </Typography>
            <Button size="small" color="primary">
              <Link
                href="https://github.com/amirtha-coder/amirtha-portfolio"
                target={"_blank"}
              >
                <GitHubIcon fontSize="large" />
              </Link>
            </Button>
          </CardActions>
        </Card>
      </Container>
      <Footer />
    </Box>
  );
};
