import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Footer = ({
  handleNextClick,
  activeStep,
  handleBack,
  isCompletelyFilled
}: {
  handleNextClick: any;
  activeStep: any;
  setActiveStep: any;
  completed: any;
  setCompleted: any;
  handleBack: any;
  isCompletelyFilled:any;
}) => {
  return (
    <footer className="  flex justify-center items-center w-[100%] h-[10vh] z-[998] mt-5 mb-5">
      <div className=" shadow-md rounded-md border-t border-[#1976d2] md:w-[80%] w-[90%] bg-white h-[100%] flex items-center justify-between px-5">
        <Button
          onClick={() => handleNextClick("previous")}
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
            onClick={() => handleNextClick("next")}
          >
            Next
          </Button>
        ) : (
          <Button
            variant="outlined"
            size="small"
            color="success"
            endIcon={<ArrowForwardIcon />}
            onClick={() => {
              handleNextClick("next");
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
