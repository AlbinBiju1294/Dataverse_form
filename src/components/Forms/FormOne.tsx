import TextField from "@mui/material/TextField";

const FormOne = ({
  handleInputChange,
  formErrorData,
  formData,
}: {
  handleInputChange: any;
  formErrorData: any;
  formData: any;
}) => {
  return (
    <>
      <div className=" md:px-[229px] mt-40 mb-[10vh] ">
        <TextField
          name="name"
          onChange={(e) => handleInputChange(e)}
          error={formErrorData.cr77d_name_error}
          value={formData.cr77d_name}
          id="fullname"
          label="Full name"
          variant="outlined"
          sx={{
            width: "100%",
            marginBottom: "3vh",
            "& .MuiInputBase-root": {
              height: "40px", // Adjust the height of the input field
              fontSize: "14px",
            },
            "& .MuiInputLabel-root": {
              fontSize: "14px",
              lineHeight: "40px", // Ensure the label's line height matches the input's height
              transform: "translate(12px, 0px) scale(1)", // Center the label text
            },
            "& .MuiInputLabel-shrink": {
              transform: "translate(14px, -15px) scale(0.75)", // Adjust the position when the label shrinks
            },
          }}
        />
        <div className=" w-[100%] flex justify-between">
          <TextField
            name="firstname"
            onChange={(e) => handleInputChange(e)}
            error={formErrorData.cr77d_firstname_error}
            value={formData.cr77d_firstname}
            id="firstname"
            label="First name"
            variant="outlined"
            sx={{
              width: "49%",
              marginBottom: "3vh",
              "& .MuiInputBase-root": {
                height: "40px",
                fontSize: "14px",
              },
              "& .MuiInputLabel-root": {
                fontSize: "14px",
                lineHeight: "40px", // Ensure the label's line height matches the input's height
                transform: "translate(12px, 0px) scale(1)", // Center the label text
              },
              "& .MuiInputLabel-shrink": {
                transform: "translate(14px, -15px) scale(0.75)", // Adjust the position when the label shrinks
              },
            }}
          />
          <TextField
            name="lastname"
            onChange={(e) => handleInputChange(e)}
            value={formData.cr77d_lastname}
            error={formErrorData.cr77d_lastname_error}
            id="lastname"
            label="Last name"
            variant="outlined"
            sx={{
              width: "49%",
              marginBottom: "3vh",
              "& .MuiInputBase-root": {
                height: "40px",
                fontSize: "14px",
              },
              "& .MuiInputLabel-root": {
                fontSize: "14px",
                lineHeight: "40px", // Ensure the label's line height matches the input's height
                transform: "translate(12px, 0px) scale(1)", // Center the label text
              },
              "& .MuiInputLabel-shrink": {
                transform: "translate(14px, -15px) scale(0.75)", // Adjust the position when the label shrinks
              },
            }}
          />
        </div>
        <TextField
  name="address"
  onChange={(e) => handleInputChange(e)}
  value={formData.cr77d_address}
  error={formErrorData.cr77d_address_error}
  multiline
  id="address"
  label="Address"
  variant="outlined"
  sx={{
    width: "100%",
    marginBottom: "3vh",
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


        <TextField
          name="pincode"
          value={formData.cr77d_pincode}
          onChange={(e) => handleInputChange(e)}
          error={formErrorData.cr77d_pincode_error}
          id="pincode"
          type="number"
          label="Pincode"
          variant="outlined"
          sx={{
            width: "100%",
            marginBottom: "3vh",
            "& .MuiInputBase-root": {
              height: "40px",
              fontSize: "14px",
            },
            "& .MuiInputLabel-root": {
              fontSize: "14px",
              lineHeight: "40px", // Ensure the label's line height matches the input's height
              transform: "translate(12px, 0px) scale(1)", // Center the label text
            },
            "& .MuiInputLabel-shrink": {
              transform: "translate(14px, -15px) scale(0.75)", // Adjust the position when the label shrinks
            },
          }}
        />
        <TextField
          name="phonenumber"
          value={formData.cr77d_phonenumber}
          onChange={(e) => handleInputChange(e)}
          error={formErrorData.cr77d_phonenumber_error}
          id="phonenumber"
          type="number"
          label="Phone Number"
          variant="outlined"
          sx={{
            width: "100%",
            marginBottom: "3vh",
            "& .MuiInputBase-root": {
              height: "40px",
              fontSize: "14px",
            },
            "& .MuiInputLabel-root": {
              fontSize: "14px",
              lineHeight: "40px", // Ensure the label's line height matches the input's height
              transform: "translate(12px, 0px) scale(1)", // Center the label text
            },
            "& .MuiInputLabel-shrink": {
              transform: "translate(14px, -15px) scale(0.75)", // Adjust the position when the label shrinks
            },
          }}
        />
      </div>
    </>
  );
};

export default FormOne;
