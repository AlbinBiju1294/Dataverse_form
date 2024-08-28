import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const FormThree = ({handleCheckboxChange,formData}:{handleCheckboxChange:any,formData:any}) => {
  return (
    <div className='md:px-[229px] mt-36 mb-[10vh]'>   
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
  )
}

export default FormThree