import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import TokenContext from "../../Contexts/TokenContextProvider";
import Navbar from "../Navbar/Navbar";
import FormOne from "../Forms/FormOne";
import HorizontalNonLinearStepper from "../Stepper/Stepper";
import Footer from "../Footer/Footer";
import axios from "axios";
import FormTwo from "../Forms/FormTwo";
import FormThree from "../Forms/FormThree";
import UserContext from "../../Contexts/UserContextProvider";
import { message } from "antd";
import Summary from "../Summary/Summary";
import dayjs from "dayjs";
import {v4 as uuidv4} from 'uuid';

const HomePage = () => {
  //contexts
  const { token } = useContext(TokenContext);
  const { user } = useContext(UserContext);
  const [messageApi, contextHolder] = message.useMessage();

  const [formData, setFormData] = useState<FormDataType>({
    cr77d_usermailid: user?.usermail || null,
    cr77d_name: null,
    cr77d_firstname: null,
    cr77d_lastname: null,
    cr77d_address: null,
    cr77d_pincode: null,
    cr77d_phonenumber: null,
    cr77d_assetname: null,
    cr77d_assetdetails: null,
    cr77d_assetvalue: null,
    cr77d_specialrequest: null,
    cr77d_personaldetailsverified: false,
    cr77d_additionaldetailsverified: false,
    cr77d_assetvalueverified: false,
    cr77d_dob: null,
    cr77d_age: null,
    cr77d_gender: null,
    cr77d_email: null,
    cr77d_assetowner:null,
    cr77d_assetlocation:null,
    cr77d_comments:null
  });

  const [formErrorData, setFormErrorData] = useState<FormErrorDataType>({
    cr77d_id_error: false,
    cr77d_name_error: false,
    cr77d_firstname_error: false,
    cr77d_lastname_error: false,
    cr77d_address_error: false,
    cr77d_pincode_error: false,
    cr77d_phonenumber_error: false,
    cr77d_assetname_error: false,
    cr77d_assetdetails_error: false,
    cr77d_assetvalue_error: false,
    cr77d_specialrequest_error: false,
    cr77d_personaldetailsverified_error: false,
    cr77d_additionaldetailsverified_error: false,
    cr77d_assetvalueverified_error: false,
    cr77d_dob_error: false,
    cr77d_age_error: false,
    cr77d_gender_error: false,
    cr77d_email_error: false,
    cr77d_assetowner_error:false,
    cr77d_assetlocation_error:false,
    cr77d_comments_error:false
  });

  const [file, setFile] = useState<AssetFileType>({
    assetphotofile: null,
    assetphotoname: null,
    assetphotourl: null,
  });

  const [isNextButtonLoading,setIsNextButtonLoading] = useState<boolean>(false)
  const [isPreviousButtonLoading,setIsPreviousButtonLoading] = useState<boolean>(false)

  const [activeStep, setActiveStep] = React.useState<number>(0);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

  const [recordId, setRecordId] = useState<string | null>(null);

  const steps: string[] = [
    "Personal details",
    "Additional details",
    "Verification details",
  ];

  const totalSteps = (): number => {
    return steps.length;
  };

  const completedSteps = (): number => {
    return Object.keys(completed).length;
  };

  const isLastStep = (): boolean => {
    return activeStep === totalSteps();
  };

  const allStepsCompleted = (): boolean => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((_, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    if (activeStep - 1 >= 0) {
      setActiveStep((prevActiveStep: number) => {
        return prevActiveStep - 1;
      });
    } else {
    }
  };

  const handleComplete = (type:string) => {
    const newCompleted = { ...completed };
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    if(type === "previous"){
      handleBack()
    }
    else if(type === "next"){
      handleNext();
    }
  };

  const isCompletelyFilled = () => {
    if(formData.cr77d_additionaldetailsverified && formData.cr77d_assetvalueverified && formData.cr77d_personaldetailsverified){
      return true;
    }
    else{
      return false;
    }
  }

  // const handleReset = () => {
  //   setActiveStep(0);
  //   setCompleted({});
  //   setFormData({cr77d_id:user?.usermail,cr77d_name:"",cr77d_firstname:"",cr77d_lastname:"",cr77d_address:"",cr77d_pincode:"",cr77d_phonenumber:"",cr77d_assetname:"",cr77d_assetdetails:"",cr77d_assetvalue:"",cr77d_specialrequest:"",cr77d_personaldetailsverified:false,cr77d_additionaldetailsverified:false,cr77d_assetvalueverified:false});
  // };

  useEffect(() => {
    console.log("formData", formData);
  }, [formData]);

  function validateFormOneData() {
    const emptyFields: string[] = [];

    const stepFields: { [step: number]: Array<keyof FormDataType> } = {
      0: [
        "cr77d_name",
        "cr77d_firstname",
        "cr77d_lastname",
        "cr77d_address",
        "cr77d_pincode",
        "cr77d_phonenumber",
        "cr77d_age",
        "cr77d_gender",
        "cr77d_dob",
        "cr77d_email",
      ],
      1: [
        "cr77d_assetname",
        "cr77d_assetdetails",
        "cr77d_assetvalue",
        "cr77d_specialrequest",
        "cr77d_assetlocation",
        "cr77d_assetowner"
      ],
      2: [
        "cr77d_comments"
      ]
    };

    const fieldsToCheck = stepFields[activeStep] || [];

    for (const key of fieldsToCheck) {
      const value = formData[key];
      if (
        value === null ||
        value === undefined ||
        (typeof value === "string" && value.trim() === "") ||
        (Array.isArray(value) && value.length === 0) ||
        (typeof value === "object" && Object.keys(value).length === 0)
      ) {
        emptyFields.push(key);
      }
    }

    return emptyFields;
  }

  const handleNextClick = async (type:string) => {
    type==="next"?setIsNextButtonLoading(true):setIsPreviousButtonLoading(true);
    const errorFields = validateFormOneData(); // Pass formOneData to validateFormOneData function
    if (errorFields.length === 0) {
      if(activeStep === 1){
        if(file.assetphotofile){
          const response = await addNewItem(); // Await the asynchronous call to addNewItem
          console.log("response1",response);
          const fileUploadResponse = await uploadAssetPhoto();
          console.log("response2",fileUploadResponse);
          if (response.status === 204 && fileUploadResponse.status === 204) {
            messageApi.success("Data and file successfully saved");
            handleComplete(type);
            type==="next"?setIsNextButtonLoading(false):setIsPreviousButtonLoading(false);
          }
        }else{
          type==="next"?setIsNextButtonLoading(false):setIsPreviousButtonLoading(false);
          messageApi.error("Upload asset file")
        }
      }
      else{
        const response = await addNewItem(); // Await the asynchronous call to addNewItem
        console.log("response",response);
        if (response.status === 204) {
          type==="next"?setIsNextButtonLoading(false):setIsPreviousButtonLoading(false);
          messageApi.success("Data successfully saved");
          handleComplete(type);
        }
      }
      
    } else {
        setFormErrorData((prev: any) => {
        type==="next"?setIsNextButtonLoading(false):setIsPreviousButtonLoading(false);
        messageApi.error("Fill all the required fields");
        const updatedErrorData = { ...prev }; // Clone the previous state
        errorFields.forEach((item) => {
          updatedErrorData[`${item}_error`] = true; // Dynamically update the error key
        });
        return updatedErrorData;
      });
    }
  };

  const uploadAssetPhoto = async () => {
    try {
      let response: any = {};
      if (token) {
        if (recordId) {
          console.log(recordId);
          console.log("entered with record ID");
          response = await axios.patch(
            `https://orgd0c17eab.api.crm8.dynamics.com/api/data/v9.2/cr77d_newtables(${recordId})/cr77d_assetphoto`,
            file.assetphotofile,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/octet-stream",
              },
            }
          );
        } else {
          response = await axios.post(
            "https://orgd0c17eab.api.crm8.dynamics.com/api/data/v9.2/cr77d_newtables/cr77d_assetphoto",
            file.assetphotofile, // formOneData is the payload
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/octet-stream",
              },
            }
          );
          const recordIdReceived = response.headers["odata-entityid"]
            .split("(")[1]
            .split(")")[0];
          console.log("recordIdReceived", recordIdReceived);
          setRecordId(recordIdReceived);
        }
        const data = response.data;

        console.log("API Response", data);
        return response;
      }
    } catch (e) {
      messageApi.error("Please try again");
    }
  }

  const addNewItem = async () => {
    try {
      let response: any = {};
      if (token) {
        if (recordId) {
          console.log(recordId);
          console.log("entered with record ID");
          response = await axios.patch(
            `https://orgd0c17eab.api.crm8.dynamics.com/api/data/v9.2/cr77d_newtables(${recordId})`,
            formData, // formOneData is the payload
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );
        } else {
          const unique_id = uuidv4();
          response = await axios.post(
            "https://orgd0c17eab.api.crm8.dynamics.com/api/data/v9.2/cr77d_newtables",
            {...formData,cr77d_id:unique_id}, // formOneData is the payload
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );
          const recordIdReceived = response.headers["odata-entityid"]
            .split("(")[1]
            .split(")")[0];
          console.log("recordIdReceived", recordIdReceived);
          setRecordId(recordIdReceived);
        }
        const data = response.data;

        console.log("API Response", data);
        return response;
      }
    } catch (e) {
      messageApi.error("Please try again");
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      ["cr77d_" + name]: value,
    });
    setFormErrorData((prev: any) => {
      const updatedErrorData = { ...prev }; // Clone the previous state
      updatedErrorData[`cr77d_${name}_error`] = false; // Dynamically update the error key
      return updatedErrorData;
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0];
      setFile({
        ...file,
        assetphotofile: selectedFile,
        assetphotoname: selectedFile.name,
        assetphotourl: URL.createObjectURL(selectedFile),
      });
    }
  };

  const handleDateChange = (name: string, date: any) => {
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    setFormData({
      ...formData,
      ["cr77d_" + name]: formattedDate,
    });
    setFormErrorData((prev: any) => {
      const updatedErrorData = { ...prev }; // Clone the previous state
      updatedErrorData[`cr77d_${name}_error`] = false; // Dynamically update the error key
      return updatedErrorData;
    });
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("called");
    const { name, checked } = event.target;
    console.log(name, checked);
    setFormData({
      ...formData,
      ["cr77d_" + name]: checked,
    });
    setFormErrorData((prev: any) => {
      const updatedErrorData = { ...prev }; // Clone the previous state
      updatedErrorData[`cr77d_${name}_error`] = false; // Dynamically update the error key
      return updatedErrorData;
    });
  };

  return (
    <>
      {contextHolder}
      <Navbar />
      {activeStep !== 3 && (
        <HorizontalNonLinearStepper
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          completed={completed}
          setCompleted={setCompleted}
          steps={steps}
        />
      )}
      <div className=" w-[100%] flex flex-col items-center">
        {activeStep === 0 ? (
          <FormOne
            handleDateChange={handleDateChange}
            handleInputChange={handleInputChange}
            formErrorData={formErrorData}
            formData={formData}
          />
        ) : activeStep === 1 ? (
          <FormTwo
            handleFileChange={handleFileChange}
            handleInputChange={handleInputChange}
            formErrorData={formErrorData}
            formData={formData}
            file={file}
          />
        ) : activeStep === 2 ? (
          <FormThree
            handleCheckboxChange={handleCheckboxChange}
            formData={formData}
            handleInputChange={handleInputChange}
            formErrorData={formErrorData}
          />
        ) : (
          <Summary formData={formData} setActiveStep={setActiveStep} />
        )}
        {activeStep !== 3 && (
          <Footer
            handleNextClick={handleNextClick}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            completed={completed}
            setCompleted={setCompleted}
            handleBack={handleBack}
            isCompletelyFilled={isCompletelyFilled}
            isNextButtonLoading={isNextButtonLoading}
            isPreviousButtonLoading={isPreviousButtonLoading}
          />
        )}
      </div>
    </>
  );
};

export default HomePage;
