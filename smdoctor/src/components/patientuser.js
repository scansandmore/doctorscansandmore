import React from 'react'
import Button from '@mui/material/Button'

function Patientuser() {
  return (
    <div className='register-patient'>
        <Button variant="contained" className='registerpatient'>
          Register Patient
        </Button>
        <Button variant="contained" className='viewreports'>
          View Reports
        </Button>
    </div>
  )
}

export default Patientuser