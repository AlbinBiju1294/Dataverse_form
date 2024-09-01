import TextField from "@mui/material/TextField";

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
  return (
    <>
      <div className=" bg-white w-[80%] px-5 py-8 relative flex flex-col gap-y-[3vh] rounded-md shadow-md">
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
      </div>
    </>
  );
};

export default FormTwo;
