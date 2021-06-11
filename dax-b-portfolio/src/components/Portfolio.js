import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/Lyrically.jpg";
import project2 from "../images/Pops-vinyls.png";
import project3 from "../images/Pup-2-pup.jpg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Lyrically",
    description: `A fun project and the first project with my group members,\
     this app allows you to search and song by an artists and it will pull up the lyrics for you to read.\
     All wrapped in a retro look to throw you back in time.`,
    image: project1,
    deploy: "https://chris6661.github.io/Lyrically/",
    github: "https://github.com/chris6661/Lyrically"
  },
  {
    name: "Pop's Vinyls",
    description: `The same group and I came together to make an app with a spin similar to Lyrially. Search for records to buy or list whatever you want.
    There's even a sneaky link in the description of the albums that takes you to Lyrically so you can see the lyrics before buying.`,
    image: project2,
    deploy: "https://fathomless-garden-67392.herokuapp.com/",
    github: "https://github.com/chris6661/e-commerce",
  },
  {
    name: "Pup-2-Pup",
    description: `An idea my group and I had to allow dog owners to meet other dog owners for a puppy date, currentlt might or might not be working.`,
    image: project3,
    deploy: "https://agile-retreat-56267.herokuapp.com/",
    github: "https://github.com/daxburatto/pup-2-pup"
  }
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href={project.deploy}>
                  Live Demo
                </Button>
                <Button size="small" color="primary" href={project.github}>
                  Github
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
