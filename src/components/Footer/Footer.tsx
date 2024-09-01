import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Footer = ({
  handleNextClick,
  activeStep,
  handleBack,
}: {
  handleNextClick: any;
  activeStep: any;
  setActiveStep: any;
  completed: any;
  setCompleted: any;
  handleBack: any;
}) => {
  return (
    <footer className="  flex justify-center items-center w-[100%] h-[10vh] z-[998] mt-5 mb-5">
      <div className=" shadow-md rounded-md border-t border-[#1976d2] w-[80%] bg-white h-[100%] flex items-center justify-between px-5">
        <Button
          onClick={handleBack}
          disabled={activeStep === 0 ? true : false}
          variant="outlined"
          size="small"
          startIcon={<ArrowBackIcon />}
        >
          Previous
        </Button>
        {activeStep !== 2 ? (
          <Button
            variant="outlined"
            size="small"
            endIcon={<ArrowForwardIcon />}
            onClick={() => handleNextClick()}
          >
            Next
          </Button>
        ) : (
          <Button
            variant="contained"
            size="small"
            endIcon={<ArrowForwardIcon />}
            onClick={() => {
              handleNextClick();
            }}
          >
            Finish
          </Button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
