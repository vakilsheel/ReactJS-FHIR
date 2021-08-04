import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import reportResult from './reportResult';

const useStyles2 = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


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


  {/* var createReactClass = require('create-react-class');

  var NewComponent = createReactClass({
    render: function() {
      return (
        <div>
          <title>Page title</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="description" content />
          <meta name="author" content />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&subset=latin" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />
          <link rel="stylesheet" href="css/bootstrap/bootstrap.min.css" />
          <link rel="icon" href="favicon.ico" />
          <div className>
            <section className="py-5" style={{backgroundImage: 'url(https://images.all-free-download.com/images/graphicthumb/beautiful_ocean_maldives_516046.jpg)', backgroundSize: 'cover'}}>
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <h1 className="display-4">BioGenetics Clinical Laboratory</h1>
                    <p1 className="lead">One Kensington Way, Seattle, WA 98006<p>Phone: 425-874-9827 Fax: 983-827-9036
                        <a className="btn btn-primary btn-raised mr-2" href="#">Contact BioGenetics</a><a className="btn btn-default" href="#" />
                      </p></p1></div>
                </div>
              </div>
            </section>
            <div>
              :
              <table table className="center">
                <colgroup>
                  <col style={{width: '300px'}} />
                  <col style={{width: '300px'}} />
                  <col style={{width: '400px'}} />
                  <col style={{width: '300px'}} />
                </colgroup>
                <tbody><tr>
                    <th>Patient Name: Kelly Janura</th>
                    <th>Patient ID: 128947831</th>
                    <th>Primary Care Physician: Dr. Wynter Kensington</th>
                    <th>PCP Phone: 801-878-4098</th>
                  </tr>
                  <tr>
                    <td>Date of Birth: 10/05/1979</td>
                    <td>Sex:Female </td>
                    <td>Ordering Physician: Dr. Wynter Kensington</td>
                    <td>Ethnicity: Caucasian</td>
                  </tr>
                  <tr>
                    <td>Sample Type: EDTA Blood </td><td>Collected Date and Time: 06/23/2021 </td>
                    <td>Report Date and Time: 07/03/2021 </td>
                    <td>Status: Final </td>
                  </tr>
                </tbody></table>
            </div>
            <div>
              <div className="my-4" />
              <h2><center><b>Genomics Sequencing Report</b></center></h2>
              <div className="my-2" />
            </div>
            <div>
              <h5><center>This test interrogates the protein-coding and exon-splicing regions of 109 genes as well as 1551 single nucelotide polymorphisms that may impact human health and disease. Clinical interpretation and reporting are provided for pathogenic and likely pathogenic variants for genes and single nucleotide polymorphisms as described in the methodology section.</center></h5>
              <div className="my-5" />
            </div>
            <div>
              <h4><center><b>PATHOGENIC AND/OR LIKELY PATHOGENIC VARIANTS DETECTED</b></center></h4>
            </div>
            <h4><center>BRCA-2 Related Hereditary Breast and/or Ovarian Cancer</center></h4>
            ...
            <div>
              <div>
                <h5>A heterozygous c.9097dupA (aka T3033Nfs*11) pathogenic variant in the BRCA2 (NM_000059.3) gene was detected in this individual, which was confirmed by Sanger sequencing. Defects in BRCA2 mutations are at increased risk of developing breast, ovarian, prostate and pancreatic cancers.</h5>
              </div> 
              <div className="my-3" />
            </div>
            <div>
              <h4><b> Table 1: Details of Pathogenic and Likely Pathogenic Variants </b></h4>
            </div>
            <div>
              <div>
                <table table className="center">
                  <colgroup>
                    <col style={{width: '600px'}} />
                    <col style={{width: '100px'}} />
                    <col style={{width: '200px'}} />
                    <col style={{width: '200px'}} />
                    <col style={{width: '300px'}} />
                    <col style={{width: '300px'}} />
                  </colgroup>
                  <tbody><tr>
                      <th>Disease</th>
                      <th>Inh</th>
                      <th>Gene</th>
                      <th>Position</th>
                      <th>Variant</th>
                      <th>Zyg</th>
                      <th>Interpretation</th>
                    </tr>
                    <tr>
                      <td>NM_00059_3 (BRCA2):c.9097dupA(aka T3033Nfs*11)</td>
                      <td>AD</td>
                      <td>BRCA2</td>
                      <td>chr11</td>
                      <td>c.9097dupA</td>
                      <td>Heterozygous</td>
                      <td>Deleterious</td>
                    </tr>
                  </tbody></table>
              </div>
              <div className="my-3" />
            </div>
            <div>
              <h4><b>Table 2: Details of Copy Number Variants</b></h4>
            </div>
            <div>
              <div>
                <h5>None Detected</h5>
              </div>
              <div className="my-3" />
            </div>
            <h4><b>Table 3: Details of Pharmacogenomic Variants</b></h4>
            <h5>Pharmocogenomics variants are returned for the following genes: CYP2C19, DPYD, INFL3, SLCO1B1, TPMT, CYP2C9/VKORC1. Star alleles are determined based on the variants detected by this assay. Star alleles may not be accurately defined due to the limitations of this assay which include: 1.  The presence of additional variants defining functioal and non-functional alleles in a patient not detected by this assay, and 2. the lack of ability to determine the phase of the variants when a star allele is defined by multiple variants.  Additionally, undetected genetic and/or non-genetic factors such as drug to drug interactions may also impact the phenotype.  This pharmacogenomic report is limited to CPIC level A alleles and drug recommendations. Additional (level B and lower) drugs may be metabolized by these reported enzymes; and additional enzymes, not reported here, may affect the metabolism of a reported drug. Refer to the current recommendation for dosage guidelines.  See methodology for details. 
            </h5>
            <div>
              <table table className="center">
                <colgroup>
                  <col style={{width: '200px'}} />
                  <col style={{width: '200px'}} />
                  <col style={{width: '200px'}} />
                  <col style={{width: '400px'}} />
                  <col style={{width: '700px'}} />
                </colgroup>
                <tbody><tr>
                    <th>Gene</th>
                    <th>Drug</th>
                    <th>Diplotype</th>
                    <th>Pheotype</th>
                    <th>Recommendation</th>
                  </tr>
                  <tr>
                    <td cplspan={1} rowSpan={4}> CYP2C19</td>
                    <td>clopidogrel</td>
                    <td>*2/*2</td>
                    <td>Poor metabolizer</td>
                    <td cplspan={5} rowpspan={4}> https://cpicpgx.org/gidelines-for-clopidogrel-and-cyp2c19/</td>
                  </tr>
                  <tr>
                    <td>amitriptylin</td>
                    <td />
                    <td />
                    <td> https://cpicpgx.org/gidelines-for-tricyclic-antidepressants-and-cyp2d6-and-cyp2c19/</td>
                  </tr>
                  <tr>
                    <td>citalopram</td>
                    <td />
                    <td />
                    <td> https://cpicpgx.org/gidelines-for-selective-serotonin-reuptake-inhibitors-and-cyp2d6-and-cyp2c19</td>
                  </tr>
                  <tr><td>voriconazole</td>
                    <td />
                    <td />
                    <td>https://cpicpgx.org/gidelines-for-voriconazole-and-cyp2c19/</td>
                  </tr><tr>
                    <td>DPYD</td>
                    <td>capecitabine, florouracil, tegafur</td>
                    <td>*1/*1</td>
                    <td>Normal DPD activity and "normal" risk for fluoropyrimidine toxicity</td>
                    <td> https://cpicpgx.org/guidelines-for-fluoropyrimidines-and-dpyd/</td>
                  </tr>
                  <tr>
                    <td>INFL3</td>
                    <td>peginterferon alfa-2a, peginterferon alfa-2b, ribavin</td>
                    <td>rs12979860 C/C</td>
                    <td>Favorable response genotype</td>
                    <td> https://cpicpgx.org/guidelines/guideline-for-peg-interferon-alpha-based-regimens-and-ifnl3/</td>
                  </tr>
                  <tr>
                    <td>SLCO1B1</td>
                    <td>simvastin</td>
                    <td>rs4149056 T/T</td>
                    <td>Normal function, Normal Simvastin induced myopathy risk</td>
                    <td> https://cpicpgx.org/guidelines/guideline-for-simvastin-and-slco1b1/</td>
                  </tr>
                </tbody></table>
              ...
            </div>
            <div>
              <h4><b>Interpretation of Pharmacogenomic Variants</b></h4>
              <div className="my-2" />
            </div>
            <h5>This individual is homozygous for a non-functional allele of the CYP2C19 gene. Based on the genotype results, this patient is predicted to have a CYP2C19 poor metabolizer phenotype. This genotype information can be used by patients and clinicians as part of the shared-decision making process for several drugs metabolized by CYP2C19 including clopidogrel, voriconazole, amitriptyline, citalopram, and escitalopram. </h5>
            <div>
              <div className="my-4" />
              <h4><b>Comments and Recommendations</b></h4>
            </div>
            <h5>Genetic counseling is recommended and testig is appropriate for at risk family members.</h5>
            <div>
              <div className="my-4" />
              <h4><b>Methodology<b b /></b></h4><b><b b>
                </b></b></div><b><b b>
                <h5>Genome DNA is fragmented by sonicating genome DNA and ligating to the illumina multiplexing PE adapters.  The adapter-ligated DNA is then PCR amplified using primers with sequencing barcodes (indexes). For target enrichment capture procedure, the pre-capture library is enriched by hybridizing to biotin labeled in solution probes. For the pharmogenomic variants, the star alleles are determined based on the variants detected by this assay.  Alleles for TPMT are limted to *1, *2, *3A, *3B, and *4. Alleles reported for CYP2C19 are limited to *1, *2, *4A, *5, *6,*7, *8, *17.  If reported, alleles for DPD are limited to *1, *2A, 813 and rs67376798.  Alleles reported for CYP2C9 are limited to *1, *2 and *3; and rs9923231 for VKORC1.  Additional rare alleles have been reported with reduced or no function for TPMT, CYP2C19, and DPD. However, variants defining these star alleles are not detected with this assay.  For SCLCO1B1, this assay only detects rs4149056. The minor C allele at rs4149056 defines SCLC01v1*5 (rs4149056 alone) but also tags the *15 and *17 alleles. Thus, a *5 allele may represent a *15 or *17 allele. </h5>
                <div>
                  <div className="my-5" />
                  <h4><b> References </b></h4>
                </div>
                <h5>Antoniou A et al. Average risks of breast and ovarian cancer associated with BRCA1 or BRCA2 mutations detected in case Series unselected for family history: a combined analysis of 22 studies. Am. J. Hum. Genet. 2003;72:1117-1130.
                </h5>
                <h5>Chen S., et al. Characterization of BRCA1 and BRCA2 mutations in a large United States sample. J. Clin. Oncol. 2006;24(6): 863-871.</h5>
                <h5>Easton D et al., Cancer risks in BRCA2 mutation carriers. J. Natl. Cancer Inst. 1999;91:1310-6</h5>
                <h5>
                  Genetic/Familial High Risk Assessment: Breast and Ovarian Version 2.2016. NCCN Clinical Practice Guidelines in Oncology. Available at http://www.nccn.org
                </h5>
                <h5>King MC et al., Breast and ovarian cancer risks due to inherited mutations in BRCA1 and BRCA2. Science 2003;302:643-646.
                </h5>
              </b></b></div><b><b b>
            </b></b></div>
      );
    }
  }); */}
  
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

        const classes2 = useStyles2();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

        return(
            <div className="">
                <div style={{textAlign: 'center'}}>
                <h1>Lab Results</h1>
              
                </div>
                <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Genomic Results</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <a href="https://space-chief.github.io/LadyonFHIR/public/genomicreport.html" target="_blank" rel="noopener noreferrer"> <Button variant="contained" color="primary" size="Large">Genomic Sequencing Results (07/15/21)</Button>  </a>
            </Typography>
          </AccordionDetails>
        </Accordion>


        <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Diagnostic Results</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <a href="" target="_blank" rel="noopener noreferrer"> <Button variant="contained" color="primary" size="Large">Diagnostic Results (06/19/21)</Button>  </a>
            </Typography>
            
          </AccordionDetails>
        </Accordion>
        <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Pathology Results</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <a href="" target="_blank" rel="noopener noreferrer"> <Button variant="contained" color="primary" size="Large">Patholoogy Results (07/29/21)</Button>  </a>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography>Other Results</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <a href="" target="_blank" rel="noopener noreferrer"> <Button variant="contained" color="primary" size="Large">Other Results (06/14/21)</Button>  </a>
            </Typography>
          </AccordionDetails>
        </Accordion>
           </div>
            
        );
    }

export default LabReports;






