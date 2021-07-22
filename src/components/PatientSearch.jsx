import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  
    function PatientSearch(props) {
        const [selectedDate, setSelectedDate] = React.useState(new Date());
        const handleDateChange = (date) => {
            setSelectedDate(date);
        };
        const classes = useStyles();
        return(
            <div className="">
                
                <div style={{textAlign: 'center'}}>
                <h1>Patient Search</h1>
                </div>
    
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="First Name" variant="outlined" />
                    <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                    <TextField id="outlined-number" label="Patient ID" type="number" variant="outlined" />
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date of Birth"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{'aria-label': 'change date'}} />
                    </MuiPickersUtilsProvider>
                    <Button variant="contained" color="primary"> Search </Button>
                </form>
                <p></p>
                <p> <a href=""> <Button variant="contained" color="primary"> See All Patients </Button> </a> </p>

            </div>
        );
    }

export default PatientSearch;