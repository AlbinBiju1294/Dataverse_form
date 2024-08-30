import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const FormThree = ({ handleCheckboxChange, formData }:{ handleCheckboxChange:any, formData:any }) => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh', 
        backgroundColor: '#f4f6f8', 
        px: { xs: 2, md: 10 } 
      }}
    >
      <Paper 
        elevation={3} 
        sx={{ 
          p: 4, 
          borderRadius: 4, 
          maxWidth: 500, 
          width: '100%' 
        }}
      >
        <Typography 
          variant="h6" 
          align="center" 
          gutterBottom
          sx={{ color: '#1976d2', fontWeight: 'bold' }}
        >
          Verification Checklist
        </Typography>
        <FormGroup>
          <FormControlLabel 
            sx={{ 
              '& .MuiFormControlLabel-label': {
                fontSize: '14px',
                color: '#424242',
                fontWeight: 500,
              },
              mb: 2
            }} 
            control={
              <Checkbox 
                checked={formData.cr77d_personaldetailsverified} 
                size="small" 
                name="personaldetailsverified" 
                onChange={handleCheckboxChange} 
                sx={{
                  '&.Mui-checked': {
                    color: '#1976d2',
                  },
                }}
              />
            } 
            label="Personal details verified" 
          />
          <FormControlLabel 
            sx={{ 
              '& .MuiFormControlLabel-label': {
                fontSize: '14px',
                color: '#424242',
                fontWeight: 500,
              },
              mb: 2
            }} 
            control={
              <Checkbox 
                checked={formData.cr77d_additionaldetailsverified} 
                size="small" 
                name="additionaldetailsverified" 
                onChange={handleCheckboxChange} 
                sx={{
                  '&.Mui-checked': {
                    color: '#1976d2',
                  },
                }}
              />
            } 
            label="Additional details verified" 
          />
          <FormControlLabel 
            sx={{ 
              '& .MuiFormControlLabel-label': {
                fontSize: '14px',
                color: '#424242',
                fontWeight: 500,
              },
              mb: 2
            }} 
            control={
              <Checkbox 
                checked={formData.cr77d_assetvalueverified} 
                size="small" 
                name="assetvalueverified" 
                onChange={handleCheckboxChange} 
                sx={{
                  '&.Mui-checked': {
                    color: '#1976d2',
                  },
                }}
              />
            } 
            label="Asset value verified" 
          />
        </FormGroup>
      </Paper>
    </Box>
  );
}

export default FormThree;
