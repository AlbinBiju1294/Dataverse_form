import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";

const Footer = ({handleNextClick,activeStep,handleBack}:{handleNextClick:any,activeStep:any,setActiveStep:any,completed:any,setCompleted:any,handleBack:any}) => {
  const navigate = useNavigate()
  return (
    <footer className=" fixed flex justify-center items-center w-[100%] h-[10vh] bg-white z-[998] bottom-0">
      <div className=" border-t border-[#1976d2] w-[65%] h-[100%] flex items-center justify-between">
        <Button onClick={handleBack} disabled={activeStep===0?true:false} variant="outlined" size="small" startIcon={<ArrowBackIcon />}>
          Previous
        </Button>
        {activeStep !== 2?<Button variant="outlined" size="small" endIcon={<ArrowForwardIcon />} onClick={() => handleNextClick()}>
          Next
        </Button>:<Button variant="contained" size="small" endIcon={<ArrowForwardIcon />} onClick={() => {handleNextClick();
          navigate('/')
        }}>
          Finish
        </Button>}
      </div>
    </footer>
  );
};

export default Footer;
