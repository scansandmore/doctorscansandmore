import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import BasicDatePicker from './datepicker';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'


const radiologyscans = [
  { title: 'MRI Scan' },
  { title: 'CT SCAN' },
  { title: 'ECG' },
  { title: 'EEG' },
  { title: 'ECHO' },
  { title: 'EMG/NCV' },
  { title: 'ULTRASOUND' },
  { title: 'PFT' },
];

function Form() {
    const [Salvation, setsalvation] = React.useState('');
    const [Gender, setgender] = React.useState('');

    const handleChange = (event) => {
      setsalvation(event.target.value);
      setgender(event.target.value);
    };
    
      
   
  return (
    
    <div className='form-data'>
        <Box className="box-form">
        <div className='formline1'>
      <FormControl>
        <InputLabel id="demo-simple-select-label">*</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Salvation}
          label="Salvation"
          onChange={handleChange}
        >
          <MenuItem value={"Mr"}>Mr</MenuItem>
          <MenuItem value={"Ms"}>Ms</MenuItem>
          <MenuItem value={"Mrs"}>Mrs</MenuItem>
        </Select>
      </FormControl>
    
        <TextField className='textfield-patient_name'
          required
          id="outlined-required"
          label="Patient Name"
        />
        </div>
        <div className='formline2'>
      <TextField className='agefield' id="outlined-basic" label="Age" variant="outlined" />
      <BasicDatePicker />
      <FormControl>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select className='gender'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Gender}
          label="Gender"
          onChange={handleChange}
        >
          <MenuItem value={"Male"}>Male</MenuItem>
          <MenuItem value={"Female"}>Female</MenuItem>
          <MenuItem value={"Others"}>Others</MenuItem>
        </Select>
      </FormControl>
      </div>
      <div className='formline3'>
      <TextField fullWidth className='textfield-email'
          required
          id="outlined-required"
          label="Patient Email Id"
        />
      </div>
      <div className='formline4'>
      <TextField fullWidth className='textfield-number'
          required
          id="outlined-required"
          label="Patient Mobile Number"
        />
      </div>
      <div className='formline5'>
      <Autocomplete className='scandropdown'
        multiple
        // size="medium"
        id="tags-outlined"
        options={radiologyscans}
        getOptionLabel={(option) => option.title}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select Scans from Dropdown"
            placeholder="Select Scans"
          />
        )}
      />
      <Button variant="contained" className='submitbutton'>
          Submit & Proceed
        </Button>
      </div>
      </Box>
    </div>
  )
}

export default Form