import React from 'react';
import { Link, withRouter } from "react-router-dom"
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './centerA.css';

//import { Button } from 'semantic-ui-react'

const useStyles2 = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const Accordion = withStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiAccordion);
  
  const AccordionSummary = withStyles({
    root: {
      backgroundColor: 'rgba(0, 0, 0, .03)',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(MuiAccordionSummary);
  
  const AccordionDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiAccordionDetails);


function Resources(props){
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const classes2 = useStyles2();
  
    return(
        <div>
            <div style={{textAlign: 'center'}}>
                <h1>Resources</h1>
        </div>
        <p></p>

        <div style={{textAlign: 'center'}}>
        <Card className={classes.root} variant="outlined">
        <CardContent>
        <h2 style={{color: '#8F8F8F'}}>Learn More About Genetic Mutations</h2>
        </CardContent>
      <CardActions>
      <a class='centerIt' href=""> <Button size="Large">Resource 1</Button> </a> 
      <a class='centerIt' href=""> <Button size="Large">Resource 2</Button> </a> 
      <a class='centerIt' href=""> <Button size="Large">Resource 3</Button> </a> 
      <a class='centerIt' href=""> <Button size="Large">Resource 4</Button> </a> 
      </CardActions>
      </Card>
       </div>

    <p> </p>
    
    <div style={{textAlign: 'center'}}>
    <Card className={classes.root} variant="outlined">
        <CardContent>
        <h2 style={{color: '#8F8F8F'}}>Mutation Selection</h2>
        </CardContent>
      <CardActions>
      <div style={{textAlign: 'center'}}> 
        <a href=""> <Button style={{marginRight: 5 + 'em'}} size="Large">MSH2</Button> </a> 
        <a href=""> <Button style={{marginRight: 5 + 'em'}} size="Large">EGFR</Button> </a> 
        <a href=""> <Button style={{marginRight: 5 + 'em'}} size="Large">BRCA 1/2</Button> </a> 
        <a href=""> <Button style={{marginRight: 5 + 'em'}} size="Large">KRAS</Button> </a> 
        </div>
      </CardActions>
      </Card>
    </div>

      </div>
    );
}

export default Resources;