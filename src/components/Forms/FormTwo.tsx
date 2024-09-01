import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import TokenContext from "../../Contexts/TokenContextProvider";

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
  const { token } = useContext(TokenContext);

  const [fileName, setFileName] = useState("");

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setFileName(file.name);

      // Convert the file to a base64 string
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async () => {
        const base64String = (reader.result as string).split(",")[1]; // Extract base64 part

        const uploadUrl = `https://orgd0c17eab.api.crm8.dynamics.com/api/data/v9.2/cr77d_newtables(b0c5548b-cf63-ef11-a670-000d3a0adf59)`;

        try {
          const response = await axios.patch(
            uploadUrl,
            {
              cr77d_assetfile: base64String,
            },
            {
              headers: {
                "Content-Type": "application/json; charset=utf-8",
                "OData-MaxVersion": "4.0",
                "OData-Version": "4.0",
                "If-Match": "*",
                Authorization: `Bearer ${token}`, // Ensure you have the correct access token
              },
            }
          );
          console.log(response.data, response.status);
        } catch (e) {
          console.log("patch error", e);
        }
      };

      reader.onerror = (error) => {
        console.log("Error reading file:", error);
      };
    }
  };

  // const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const file = e.target.files?.[0];

  //     if (file) {
  //         setFileName(file.name);

  //         const uploadUrl = `https://orgd0c17eab.api.crm8.dynamics.com/api/data/v9.2/cr77d_newtables(b0c5548b-cf63-ef11-a670-000d3a0adf59)/cr77d_name/$value`;

  //         try {
  //             const response = await axios({
  //                 method: 'patch',
  //                 url: uploadUrl,
  //                 data: "exp123",
  //                 headers: {
  //                     'Content-Type': 'application/json',
  //                     Authorization: `Bearer ${token}`, // Ensure you have the correct access token
  //                 },
  //             });

  //             console.log(response.data, response.status);
  //         } catch (e) {
  //             console.log("patch error", e);
  //         }
  //     }
  // };

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

        {/* Display the file name in a TextField */}
      </div>
    </>
  );
};

export default FormTwo;
