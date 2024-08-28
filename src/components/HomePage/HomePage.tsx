import React, { useContext, useEffect, useState } from 'react'
import TokenContext from '../../Contexts/TokenContextProvider'
import Navbar from '../Navbar/Navbar'
import FormOne from '../Forms/FormOne'
import HorizontalNonLinearStepper from "../Stepper/Stepper";
import Footer from '../Footer/Footer'
import axios from 'axios'
import FormTwo from '../Forms/FormTwo'
import FormThree from '../Forms/FormThree'
import UserContext from '../../Contexts/UserContextProvider';



const HomePage = () => {

    const {token} = useContext(TokenContext)

    const {user} = useContext(UserContext)
    const [formData, setFormData] = useState<any>({cr77d_id:user?.usermail,cr77d_name:null,cr77d_firstname:null,cr77d_lastname:null,cr77d_address:null,cr77d_pincode:null,cr77d_phonenumber:null,cr77d_assetname:null,cr77d_assetdetails:null,cr77d_assetvalue:null,cr77d_specialrequest:null,cr77d_personaldetailsverified:false,cr77d_additionaldetailsverified:false,cr77d_assetvalueverified:false});
    const [formErrorData,setFormErrorData] =useState<any>({cr77d_id_error:false,cr77d_name_error:false,cr77d_firstname_error:false,cr77d_lastname_error:false,cr77d_address_error:false,cr77d_pincode_error:false,cr77d_phonenumber_error:false,cr77d_assetname_error:false,cr77d_assetdetails_error:false,cr77d_assetvalue_error:false,cr77d_specialrequest_error:false,cr77d_personaldetailsverified_error:false,cr77d_additionaldetailsverified_error:false,cr77d_assetvalueverified_error:false})

    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState<{
        [k: number]: boolean;
    }>({});

    const [recordId,setRecordId] = useState<string | null>(null)

    const steps: string[] = ['Personal details', 'Additional details', 'Verification details'];

    const totalSteps = (): number => {
        return steps.length;
      };
    
      const completedSteps = (): number => {
        return Object.keys(completed).length;
      };
    
      const isLastStep = (): boolean => {
        return activeStep === totalSteps() - 1;
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
        if(activeStep-1 >= 0){
          setActiveStep((prevActiveStep:number) => {
            return(prevActiveStep - 1)
          });
        }else{
          
        }
        
      };
    
    
      const handleComplete = () => {
        const newCompleted = { ...completed };
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
      };
    
      // const handleReset = () => {
      //   setActiveStep(0);
      //   setCompleted({});
      //   setFormData({cr77d_id:user?.usermail,cr77d_name:"",cr77d_firstname:"",cr77d_lastname:"",cr77d_address:"",cr77d_pincode:"",cr77d_phonenumber:"",cr77d_assetname:"",cr77d_assetdetails:"",cr77d_assetvalue:"",cr77d_specialrequest:"",cr77d_personaldetailsverified:false,cr77d_additionaldetailsverified:false,cr77d_assetvalueverified:false});
      // };


    useEffect(() => {
        console.log("formData",formData)
    },[formData])

    function validateFormOneData() {
      const emptyFields: string[] = [];
      
      const stepFields: { [key: number]: string[] } = {
          0: ["cr77d_name", "cr77d_firstname", "cr77d_lastname", "cr77d_address", "cr77d_pincode", "cr77d_phonenumber"],
          1: ["cr77d_assetname", "cr77d_assetdetails", "cr77d_lastname", "cr77d_assetvalue", "cr77d_specialrequest"]
      };
  
      const fieldsToCheck = stepFields[activeStep] || [];
  
      for (const key of fieldsToCheck) {
          const value = formData[key];
          if (
              value === null ||
              value === undefined ||
              (typeof value === 'string' && value.trim() === '') ||
              (Array.isArray(value) && value.length === 0) ||
              (typeof value === 'object' && Object.keys(value).length === 0)
          ) {
              emptyFields.push(key);
          }
      }
  
      return emptyFields;
  }
  
  

  const handleNextClick = async () => {
    const errorFields = validateFormOneData(); // Pass formOneData to validateFormOneData function
    if (errorFields.length === 0) {
        const response = await addNewItem(); // Await the asynchronous call to addNewItem
        console.log(response);
    } else {
        setFormErrorData((prev:any) => {
            const updatedErrorData = { ...prev }; // Clone the previous state
            errorFields.forEach((item) => {
                updatedErrorData[`${item}_error`] = true; // Dynamically update the error key
            });
            return updatedErrorData;
        });
    }
};



    const addNewItem  = async () => {
        try {
          let response:any = {}
            if (token) {
              if(recordId){
                  console.log(recordId)
                 console.log("entered with record ID")
                 response = await axios.patch(
                  `https://orgd0c17eab.api.crm8.dynamics.com/api/data/v9.2/cr77d_newtables(${recordId})`,
                  formData, // formOneData is the payload
                  {
                      headers: {
                          Authorization: `Bearer ${token}`,
                          "Content-Type": "application/json",
                      }
                  }
              );
              }
              else{
                 response = await axios.post(
                  "https://orgd0c17eab.api.crm8.dynamics.com/api/data/v9.2/cr77d_newtables",
                  formData, // formOneData is the payload
                  {
                      headers: {
                          Authorization: `Bearer ${token}`,
                          "Content-Type": "application/json",
                      }
                  }
              );
              const recordIdReceived = response.headers['odata-entityid'].split('(')[1].split(')')[0];
              setRecordId(recordIdReceived)
              }
                const data = response.data;
                if (response.status === 204) {
                    alert("Saved successfully");
                    handleComplete();
                }
                
                console.log("API Response", data);
                return data;
            }
        } 
            catch(e){
                console.log(e)
            }
        }

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        const { name, value } = e.target;
          setFormData({
            ...formData,
            ["cr77d_"+name]: value,
          });
          setFormErrorData((prev:any) => {
            const updatedErrorData = { ...prev }; // Clone the previous state
                updatedErrorData[`cr77d_${name}_error`] = false; // Dynamically update the error key
            return updatedErrorData;
        });
          
      };

      const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("called")
        const {name,checked} = event.target;
        console.log(name,checked)
        setFormData({
          ...formData,
          ["cr77d_"+name]: checked,
        });
        setFormErrorData((prev:any) => {
          const updatedErrorData = { ...prev }; // Clone the previous state
              updatedErrorData[`cr77d_${name}_error`] = false; // Dynamically update the error key
          return updatedErrorData;
      });
      }

  return (
    <>
        <Navbar/>
        <HorizontalNonLinearStepper activeStep={activeStep} setActiveStep={setActiveStep} completed={completed} setCompleted={setCompleted} steps={steps}/>
        {activeStep===0?<FormOne handleInputChange={handleInputChange} formErrorData={formErrorData} formData={formData}/>:(activeStep===1?<FormTwo handleFileChange={() => {}} handleInputChange={handleInputChange} formErrorData={formErrorData} formData={formData}/>:<FormThree handleCheckboxChange={handleCheckboxChange} formData={formData}/>)}
        <Footer handleNextClick={handleNextClick} activeStep={activeStep} setActiveStep={setActiveStep} completed={completed} setCompleted={setCompleted} handleBack={handleBack} />
    </>
  )
}

export default HomePage