import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

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




    function LabReports(props) {
        const [expanded, setExpanded] = React.useState('panel1');

        const handleChange = (panel) => (event, newExpanded) => {
          setExpanded(newExpanded ? panel : false);
        };
    
        const classes = useStyles();
        return(
            <div className="">
                <div style={{textAlign: 'center'}}>
                <h1>Lab Reports</h1>
                </div>
                <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Report 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <a href=""> <Button variant="contained" color="primary"> Report </Button>  </a> 
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Report 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <a href=""> <Button variant="contained" color="primary"> Report </Button>  </a>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Report 3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <a href=""> <Button variant="contained" color="primary"> Report</Button>  </a> 
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography>Report 4</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <a href=""> <Button variant="contained" color="primary"> Report </Button>  </a> 
            </Typography>
          </AccordionDetails>
        </Accordion>
            </div>
        );
    }

export default LabReports;