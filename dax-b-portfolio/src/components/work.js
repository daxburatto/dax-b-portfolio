import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Container, makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    content: {
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(3)
      },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
      },
      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
      cardMedia: {
        paddingTop: '56.25%', // 16:9
      },
      cardContent: {
        flexGrow: 1,
      }
}))

const cards = [1];

const Work = () => {
    const classes = useStyles()

    return (
        <div className={classes.content}>
            <Container maxWidth="md">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                My Work
                <br></br>
            </Typography>
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://upload.wikimedia.org/wikipedia/commons/b/b2/Pops-vinyls.png"
                  title="Pops-vinyls"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Pop's Vinyls
                  </Typography>
                  <Typography>
                    This is a react app created by myself and group members in bootcamp, it is an imagening of a record store website.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" href="https://fathomless-garden-67392.herokuapp.com/">
                    View Deploy
                  </Button>
                  <Button size="small" color="primary" href="https://github.com/chris6661/e-commerce">
                    View Github
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" href="/">
                    Return to About Me
                  </Button>
                </Grid>
              </Grid>
            </div>
        </Container>
        </div>
    )
}   

export default Work