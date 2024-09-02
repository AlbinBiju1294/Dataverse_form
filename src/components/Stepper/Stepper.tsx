import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";

export default function HorizontalNonLinearStepper({
  activeStep,
  setActiveStep,
  completed,
  steps,
}: {
  activeStep: any;
  setActiveStep: any;
  completed: any;
  setCompleted: any;
  steps: string[];
}) {
  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  return (
    <div className=" bg-[#f3f3f3] py-10 mt-16 flex justify-center items-center w-[100%] z-[999]">
      <div className=" md:w-[80%] w-[90%]">
      <Box sx={{ width: "100%", margin: "auto" }}>
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
    </div>
  );
}
