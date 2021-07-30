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
//import './centerA.css';

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
      <a href="https://clinicalgenome.org/" target="_blank" rel="noopener noreferrer"> <Button size="Large">ClinGen: Clinical Genome Resource</Button> </a> 
      <a href="https://www.cancer.gov/publications" target="_blank" rel="noopener noreferrer"> <Button size="Large">Cancer.gov publications </Button> </a> 
      <a href="https://www.ncbi.nlm.nih.gov/books/NBK22183/" target="_blank" rel="noopener noreferrer"> <Button size="Large">Genes and Diseases</Button> </a> 
      <a href="https://ncithesaurus.nci.nih.gov/ncitbrowser/" target="_blank" rel="noopener noreferrer"> <Button size="Large">NCI Thesauras</Button> </a> 
      </CardActions>
      </Card>
       </div>

    <p> </p>
    
  <div style={{textAlign: 'center'}}>
    <Card className={classes.root} variant="outlined">
        <CardContent>
        <h2 style={{color: '#8F8F8F'}}>Mutation Selection</h2>
        </CardContent>
      {/* <CardActions>
      <div style={{textAlign: 'center'}}> 
        <a href=""> <Button style={{marginRight: 5 + 'em'}} size="Large">MSH2</Button> </a> 
        <a href=""> <Button style={{marginRight: 5 + 'em'}} size="Large">EGFR</Button> </a> 
        <a href=""> <Button style={{marginRight: 5 + 'em'}} size="Large">BRCA 1/2</Button> </a> 
        <a href=""> <Button style={{marginRight: 5 + 'em'}} size="Large">KRAS</Button> </a> 
    </div> 
      </CardActions> */}
      </Card>
    </div> 

    <div className="">
                <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>MSH2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <a href="https://medlineplus.gov/genetics/gene/msh2/" target="_blank" rel="noopener noreferrer"> <Button variant="contained" color="primary" size="Large"> Medline Plus </Button>  </a> 
            <a href="https://www.mayocliniclabs.com/test-catalog/Clinical+and+Interpretive/35510" target="_blank" rel="noopener noreferrer"> <Button variant="contained" color="primary" size="Large"> Mayo Clinic </Button>  </a> 
            <a href="https://search.clinicalgenome.org/kb/genes/HGNC:7325" target="_blank" rel="noopener noreferrer"> <Button variant="contained" color="primary" size="Large"> ClinGen MSH2 </Button>  </a> 
            <a href="https://www.mycancergenome.org/content/alteration/msh2-mutation/" target="_blank" rel="noopener noreferrer"> <Button variant="contained" color="primary" size="Large"> My Cancer Genome </Button>  </a> 
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>EGFR</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <a href="https://search.clinicalgenome.org/kb/genes/HGNC:3236" target="_blank" rel="noopener noreferrer"> <Button variant="contained" color="primary" size="Large"> ClinGen </Button>  </a> 
            <a href="https://medlineplus.gov/genetics/gene/egfr/" target="_blank" rel="noopener noreferrer"> <Button variant="contained" color="primary" size="Large"> Medline Plus </Button>  </a> 
            <a href="https://www.mayocliniclabs.com/test-catalog/Clinical+and+Interpretive/35404" target="_blank" rel="noopener noreferrer"> <Button variant="contained" color="primary" size="Large"> Mayo Clinic 1</Button>  </a> 
            <a href="https://www.mayocliniclabs.com/test-catalog/Clinical+and+Interpretive/113402" target="_blank" rel="noopener noreferrer"> <Button variant="contained" color="primary" size="Large"> Mayo Clinic 2</Button>  </a> 
            <a href="https://clevelandcliniclabs.com/wp-content/assets/pdfs/technical-briefs/egfr-88871.pdf" target="_blank" rel="noopener noreferrer"> <Button variant="contained" color="primary" size="Large">  Cleveland Clinic </Button>  </a> 
            <a href="https://www.mycancergenome.org/content/alteration/egfr-mutation/" target="_blank" rel="noopener noreferrer"> <Button variant="contained" color="primary" size="Large"> My Cancer Genome </Button>  </a> 
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>BRCA 1/2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <a href="https://medlineplus.gov/genetics/gene/brca1/" target="_blank" rel="noopener noreferrer"> <Button variant="contained" color="primary" size="Large">Medline Plus BRCA 1</Button>  </a> 
            <a href="https://medlineplus.gov/genetics/gene/brca2/" target="_blank" rel="noopener noreferrer"> <Button variant="contained" color="primary" size="Large">Medline Plus BRCA 2</Button>  </a> 
            <a href="https://search.clinicalgenome.org/kb/genes/HGNC:1100" target="_blank" rel="noopener noreferrer"> <Button variant="contained" color="primary" size="Large">ClinGen BRCA 1</Button>  </a> 
            <a href="https://search.clinicalgenome.org/kb/genes/HGNC:1101" target="_blank" rel="noopener noreferrer"> <Button variant="contained" color="primary" size="Large">ClinGen BRCA 2</Button>  </a> 
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography>KRAS</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <a href="https://medlineplus.gov/genetics/gene/kras/" target="_blank" rel="noopener noreferrer"> <Button variant="contained" color="primary" size="Large">Medline Plus</Button>  </a> 
            <a href="https://search.clinicalgenome.org/kb/genes/HGNC:6407/" target="_blank" rel="noopener noreferrer"> <Button variant="contained" color="primary" size="Large">ClinGen</Button>  </a> 
            <a href="https://www.cancer.gov/research/key-initiatives/ras/ras-central/blog/2021/update-kras-cancer-comutations" target="_blank" rel="noopener noreferrer" size="Large"> <Button variant="contained" color="primary">NIH</Button>  </a> 
            <a href="https://link.springer.com/article/10.1007/s10555-020-09903-9" target="_blank" rel="noopener noreferrer"> <Button variant="contained" color="primary" size="Large">Springer Link</Button>  </a> 
            </Typography>
          </AccordionDetails>
        </Accordion>
            </div>
      </div>
    );
}

export default Resources;