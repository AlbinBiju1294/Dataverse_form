import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';

export default function HorizontalNonLinearStepper({activeStep,setActiveStep,completed,setCompleted,steps}:{activeStep:any,setActiveStep:any,completed:any,setCompleted:any,steps:string[]}) {

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  return (
    <div className=' fixed top-16 h-20 flex items-center w-[100%] z-[999]' >
      <Box sx={{ width: '65%', margin: 'auto' }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </Box>
    </div>
  );
}
