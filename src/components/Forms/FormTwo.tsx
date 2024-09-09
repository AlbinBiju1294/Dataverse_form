import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import AddCircleIcon from '@mui/icons-material/AddCircle';

const FormTwo = ({
  handleInputChange,
  formErrorData,
  formData,
  file,
  handleFileChange,
}: {
  handleInputChange: any;
  handleFileChange: any;
  formErrorData: any;
  formData: any;
  file: AssetFileType;
}) => {
  // const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files) {
  //     const selectedFile = e.target.files[0];
  //     setFileName(selectedFile.name)
  //     setFile(selectedFile);
  //     setFileUrl(URL.createObjectURL(selectedFile));
  //   }
  // };

  return (
    <>
      <div className=" bg-white md:w-[80%] w-[90%] px-5 py-8 relative flex flex-col gap-y-[3vh] rounded-md shadow-md">
        <div className=" absolute top-0 left-0 right-0 h-1 rounded-t-md bg-[#247cd6]"></div>
        <div className=" flex gap-1.5 items-center">
          <AddCircleIcon fontSize="small" style={{color:"#247cd6"}}/>
          <h3 className=" text-md font-normal">Additional Details</h3>
        </div>
        <div className=" w-[100%] flex justify-between">
        <TextField
          name="assetname"
          onChange={(e) => handleInputChange(e)}
          error={formErrorData.cr77d_assetname_error}
          value={formData.cr77d_assetname}
          id="assetname"
          label="Asset name"
          variant="outlined"
          sx={{
            width: "49%",

            "& .MuiInputBase-root": {
              height: "40px",
              fontSize: "14px",
            },
            "& .MuiInputLabel-root": {
              fontSize: "14px",
              lineHeight: "40px",
              transform: "translate(12px, 0px) scale(1)",
            },
            "& .MuiInputLabel-shrink": {
              transform: "translate(14px, -15px) scale(0.75)",
            },
          }}
        />
        <TextField
          name="assetlocation"
          onChange={(e) => handleInputChange(e)}
          error={formErrorData.cr77d_assetlocation_error}
          value={formData.cr77d_assetlocation}
          id="assetlocation"
          label="Asset Location"
          variant="outlined"
          sx={{
            width: "49%",

            "& .MuiInputBase-root": {
              height: "40px",
              fontSize: "14px",
            },
            "& .MuiInputLabel-root": {
              fontSize: "14px",
              lineHeight: "40px",
              transform: "translate(12px, 0px) scale(1)",
            },
            "& .MuiInputLabel-shrink": {
              transform: "translate(14px, -15px) scale(0.75)",
            },
          }}
        />
        </div>
        <TextField
          name="assetdetails"
          onChange={(e) => handleInputChange(e)}
          error={formErrorData.cr77d_assetdetails_error}
          value={formData.cr77d_assetdetails}
          id="assetdetails"
          label="Asset details"
          multiline
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
        <div className=" w-[100%] flex justify-between">
        <TextField
          name="assetvalue"
          onChange={(e) => handleInputChange(e)}
          value={formData.cr77d_assetvalue}
          error={formErrorData.cr77d_assetvalue_error}
          id="assetvalue"
          label="Asset value"
          variant="outlined"
          type="number"
          sx={{
            width: "49%",

            "& .MuiInputBase-root": {
              height: "40px",
              fontSize: "14px",
            },
            "& .MuiInputLabel-root": {
              fontSize: "14px",
              lineHeight: "40px",
              transform: "translate(12px, 0px) scale(1)",
            },
            "& .MuiInputLabel-shrink": {
              transform: "translate(14px, -15px) scale(0.75)",
            },
          }}
        />
        <TextField
          name="assetowner"
          onChange={(e) => handleInputChange(e)}
          error={formErrorData.cr77d_assetowner_error}
          value={formData.cr77d_assetowner}
          id="assetowner"
          label="Asset Owner"
          variant="outlined"
          sx={{
            width: "49%",

            "& .MuiInputBase-root": {
              height: "40px",
              fontSize: "14px",
            },
            "& .MuiInputLabel-root": {
              fontSize: "14px",
              lineHeight: "40px",
              transform: "translate(12px, 0px) scale(1)",
            },
            "& .MuiInputLabel-shrink": {
              transform: "translate(14px, -15px) scale(0.75)",
            },
          }}
        />
        </div>
        <TextField
          name="specialrequest"
          onChange={(e) => handleInputChange(e)}
          value={formData.cr77d_specialrequest}
          error={formErrorData.cr77d_specialrequest_error}
          multiline
          id="specialrequest"
          label="Special request"
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
        <div className="flex items-center justify-between gap-4">
          <TextField
            name="assetfileName"
            id="assetfileName"
            disabled
            label="Upload Asset file"
            value={file.assetphotoname} // Assuming "fileName" is a state variable holding the selected file name
            variant="outlined"
            InputLabelProps={{
              shrink: file.assetphotoname ? true : false, // This forces the label to shrink when there is a value
            }}
            sx={{
              width: "82%",
              "& .MuiInputBase-root": {
                height: "40px",
                fontSize: "14px",
              },
              "& .MuiInputLabel-root": {
                fontSize: "14px",
                lineHeight: "40px",
                transform: "translate(12px, 0px) scale(1)",
              },
              "& .MuiInputLabel-shrink": {
                transform: "translate(14px, -15px) scale(0.75)",
              },
            }}
          />

          {/* {file.assetphotourl && (
            <div>
              {file && file.assetphotofile?.type.startsWith("image/") && (
                <img
                  src={file.assetphotourl}
                  alt="Uploaded file"
                  className=" w-[40px] h-[40px] rounded-full"
                />
              )}
              {file && file.assetphotofile?.type === "application/pdf" && (
                <iframe
                  src={file.assetphotourl}
                  className="w-[40px] h-[40px] rounded-full"
                  title="PDF Preview"
                ></iframe>
              )}
            </div>
          )} */}

          {/* File Input with Button */}
          <Button
            variant="contained"
            component="label"
            sx={{ height: "40px", width: "17%" }}
          >
            <p className=" md:text-sm text-[8px]">Upload File</p>
            <input
              type="file"
              hidden
              name="assetfile"
              onChange={handleFileChange}
            />
          </Button>
        </div>
      </div>
    </>
  );
};

export default FormTwo;
