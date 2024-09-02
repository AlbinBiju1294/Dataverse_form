import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { ChangeEvent, useState } from "react";

const FormTwo = ({
  handleInputChange,
  formErrorData,
  formData,
}: {
  handleInputChange: any;
  handleFileChange: any;
  formErrorData: any;
  formData: any;
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>()
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0];
      setFileName(selectedFile.name)
      setFile(selectedFile);
      setFileUrl(URL.createObjectURL(selectedFile));
    }
  };

  return (
    <>
      <div className=" bg-white md:w-[80%] w-[90%] px-5 py-8 relative flex flex-col gap-y-[3vh] rounded-md shadow-md">
        <div className=" absolute top-0 left-0 right-0 h-1 rounded-t-md bg-[#247cd6]"></div>
        <TextField
          name="assetname"
          onChange={(e) => handleInputChange(e)}
          error={formErrorData.cr77d_assetname_error}
          value={formData.cr77d_assetname}
          id="assetname"
          label="Asset name"
          variant="outlined"
          sx={{
            width: "100%",

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
          name="assetdetails"
          onChange={(e) => handleInputChange(e)}
          error={formErrorData.cr77d_assetdetails_error}
          value={formData.cr77d_assetdetails}
          id="assetdetails"
          label="Asset details"
          variant="outlined"
          sx={{
            width: "100%",

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
          name="assetvalue"
          onChange={(e) => handleInputChange(e)}
          value={formData.cr77d_assetvalue}
          error={formErrorData.cr77d_assetvalue_error}
          id="assetvalue"
          label="Asset value"
          variant="outlined"
          type="number"
          sx={{
            width: "100%",

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
        <div className='flex items-center justify-between gap-4'>
  <TextField
    name="assetfileName"
    id="assetfileName"
    disabled
    label="Upload Asset picture"
    value={fileName} // Assuming "fileName" is a state variable holding the selected file name
    variant="outlined"
    InputLabelProps={{
      shrink: fileName?true:false, // This forces the label to shrink when there is a value
    }}
    sx={{
      width: "82%",
      '& .MuiInputBase-root': {
        height: '40px',
        fontSize: '14px',
      },
      '& .MuiInputLabel-root': {
        fontSize: '14px',
        lineHeight: '40px',
        transform: 'translate(12px, 0px) scale(1)',
      },
      '& .MuiInputLabel-shrink': {
        transform: 'translate(14px, -15px) scale(0.75)',
      },
    }}
  />

  {fileUrl && (
            <div>
              {file && file.type.startsWith("image/") && (
                <img
                  src={fileUrl}
                  alt="Uploaded file"
                  className=" w-[40px] h-[40px] rounded-full"
                />
              )}
              {file && file.type === "application/pdf" && (
                <iframe
                  src={fileUrl}
                  className="h-60 w-[85%]"
                  title="PDF Preview"
                ></iframe>
              )}
            </div>
          )}

  {/* File Input with Button */}
  <Button variant="contained" component="label" sx={{ height: "40px", width: "17%" }}>
    Upload File
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
