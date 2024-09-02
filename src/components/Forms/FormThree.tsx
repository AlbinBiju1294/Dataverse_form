import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from "@mui/material/TextField";

const FormThree = ({ handleCheckboxChange,handleInputChange, formData,formErrorData }:{ handleCheckboxChange:any,handleInputChange:any, formData:any,formErrorData:any }) => {
  return (
    <div className=" bg-white md:w-[80%] w-[90%] px-5 py-8 relative flex flex-col gap-y-[3vh] rounded-md shadow-md">
        <div className=" absolute top-0 left-0 right-0 h-1 rounded-t-md bg-[#247cd6]"></div>  
        <TextField
          name="comments"
          onChange={(e) => handleInputChange(e)}
          value={formData.cr77d_comments}
          error={formErrorData.cr77d_comments_error}
          multiline
          id="comments"
          label="Comments"
          variant="outlined"
          sx={{
            width: "100%",

            "& .MuiInputBase-root": {
              minHeight: "80px", // Maintain the desired height of the input container
              fontSize: "14px",
              alignItems: "flex-start", // Align text at the top
            },
            "& .MuiInputLabel-root": {
              fontSize: "14px",
              lineHeight: "80px", // Ensure this matches the container height
              transform: "translate(12px, 23px) scale(1)", // Adjust translation to center the label vertically
            },
            "& .MuiInputLabel-shrink": {
              transform: "translate(14px, -29px) scale(0.75)", // Adjust the position when the label shrinks
            },
            "& .MuiInputBase-inputMultiline": {
              minHeight: "80px", // Ensure the minimum height matches the container
              paddingTop: "10px", // Adjust padding to align text properly
            },
          }}
        />
    <FormGroup>
      <FormControlLabel sx={{ 
    '& .MuiFormControlLabel-label': {
      fontSize: '14px'  // Adjust the font size as needed
    }
  }} control={<Checkbox checked={formData.cr77d_personaldetailsverified} size='small' name='personaldetailsverified' onChange={handleCheckboxChange} />} label="Personal details verified" />
      <FormControlLabel sx={{ 
    '& .MuiFormControlLabel-label': {
      fontSize: '14px'  // Adjust the font size as needed
    }
  }}  control={<Checkbox checked={formData.cr77d_additionaldetailsverified} size='small' name='additionaldetailsverified' onChange={handleCheckboxChange} />} label="Additional details verified" />
      <FormControlLabel sx={{ 
    '& .MuiFormControlLabel-label': {
      fontSize: '14px'  // Adjust the font size as needed
    }
  }}  control={<Checkbox checked={formData.cr77d_assetvalueverified} size='small' name='assetvalueverified' onChange={handleCheckboxChange}  />} label="Asset value verified" />
    </FormGroup>
    </div>
  );
}

export default FormThree;
