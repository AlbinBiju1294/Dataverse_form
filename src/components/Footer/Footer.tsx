// import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button } from "antd";

const Footer = ({
  handleNextClick,
  activeStep,
  isNextButtonLoading,
  isPreviousButtonLoading
}: {
  handleNextClick: any;
  activeStep: any;
  setActiveStep: any;
  completed: any;
  setCompleted: any;
  handleBack: any;
  isCompletelyFilled:any;
  isNextButtonLoading:boolean;
  isPreviousButtonLoading:boolean;
}) => {
  return (
    <footer className="  flex justify-center items-center w-[100%] h-[10vh] z-[998] mt-5 mb-5">
      <div className=" shadow-md rounded-md border-t border-[#1976d2] md:w-[80%] w-[90%] bg-white h-[100%] flex items-center justify-between px-5">
        <Button
          onClick={() => handleNextClick("previous")}
          disabled={activeStep === 0 ? true : false}
          size="middle"
          icon={<ArrowBackIcon style={{fontSize:"1.1em"}}  />}
          iconPosition="start"
          type="primary"
          ghost
          loading={isPreviousButtonLoading}
        >
          Previous
        </Button>
        {activeStep !== 2 ? (
          <Button
            size="middle"
            icon={<ArrowForwardIcon style={{fontSize:"1.1em"}} />}
            iconPosition="end"
            onClick={() => handleNextClick("next")}
            type="primary"
            ghost
            loading={isNextButtonLoading}
          >
            Next
          </Button>
        ) : (
          <Button
            size="middle"
            icon={<ArrowForwardIcon style={{fontSize:"1.1em"}} />}
            iconPosition="end"
            onClick={() => {
              handleNextClick("next");
            }}
            type="primary"
            loading={isNextButtonLoading}
          >
            Finish
          </Button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
