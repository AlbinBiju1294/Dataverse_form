import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { FormControl } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const FormOne = ({
  handleInputChange,
  formErrorData,
  formData,
  handleDateChange
}: {
  handleInputChange: any;
  formErrorData: any;
  formData: any;
  handleDateChange: any;
}) => {
  
  return (
    <>
      <div className=" bg-white w-[80%] px-5 py-8 relative flex flex-col gap-y-[3vh] rounded-md shadow-md">
        <div className=" absolute top-0 left-0 right-0 h-1 rounded-t-md bg-[#247cd6]"></div>
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
        <div className=" w-[100%] flex justify-between">
          <TextField
            name="age"
            type="number"
            onChange={(e) => handleInputChange(e)}
            error={formErrorData.cr77d_age_error}
            value={formData.cr77d_age}
            id="age"
            label="Age"
            variant="outlined"
            sx={{
              width: "49%",

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
          <FormControl
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
                transform: "translate(14px, -13px) scale(0.75)",
              },
            }}
          >
            <InputLabel id="gender_label">Gender</InputLabel>
            <Select
              labelId="gender_label"
              id="gender"
              name="gender"
              label="Gender"
              onChange={handleInputChange}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 200, // Adjust the max height of the dropdown
                  },
                },
                disableScrollLock: true, // Prevents the scrollbar from disappearing
              }}
            >
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
            </Select>
          </FormControl>
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
            name="pincode"
            value={formData.cr77d_pincode}
            onChange={(e) => handleInputChange(e)}
            error={formErrorData.cr77d_pincode_error}
            id="pincode"
            type="number"
            label="Pincode"
            variant="outlined"
            sx={{
              width: "49%",

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
              width: "49%",

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
        <div className=" w-[100%] flex justify-between">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
              name="dob"
              onChange={(dobvalue) => handleDateChange("dob",dobvalue)}
                label="Date of Birth"
                sx={{
                  width: "49%",

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
          </LocalizationProvider>

          <TextField
            name="email"
            value={formData.cr77d_email}
            onChange={(e) => handleInputChange(e)}
            error={formErrorData.cr77d_email_error}
            id="email"
            label="Email"
            variant="outlined"
            sx={{
              width: "49%",

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
      </div>
    </>
  );
};

export default FormOne;
