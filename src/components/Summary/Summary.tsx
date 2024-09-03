import { Descriptions } from "antd";
import type { DescriptionsProps } from "antd";
import { useNavigate } from "react-router-dom";

const Summary = ({
  formData,
  setActiveStep,
}: {
  formData: any;
  setActiveStep: any;
}) => {
  const navigate = useNavigate();
  const items: DescriptionsProps["items"] = [
    {
      key: "1",
      label: "Full name",
      children: formData.cr77d_name,
      span: 2, // Full name takes up the full width (2 columns)
    },
    {
      key: "2",
      label: "First name",
      children: formData.cr77d_firstname,
      span: 1, // First name takes half the width (1 column)
    },
    {
      key: "3",
      label: "Last name",
      children: formData.cr77d_lastname,
      span: 1, // Last name takes the other half (1 column)
    },
    {
      key: "4",
      label: "Age",
      children: formData.cr77d_age,
      span: 1, // First name takes half the width (1 column)
    },
    {
      key: "5",
      label: "Gender",
      children: formData.cr77d_gender,
      span: 1, // Last name takes the other half (1 column)
    },
    {
      key: "6",
      label: "Date of Birth",
      children: formData.cr77d_dob,
      span: 1, // First name takes half the width (1 column)
    },
    {
      key: "7",
      label: "Email",
      children: formData.cr77d_email,
      span: 1, // Last name takes the other half (1 column)
    },
    {
      key: "8",
      label: "Address",
      children: formData.cr77d_address,
      span: 2,
    },
    {
      key: "9",
      label: "Pincode",
      children: formData.cr77d_pincode,
      span: 1,
    },
    {
      key: "10",
      label: "Phone number",
      children: formData.cr77d_phonenumber,
      span: 1,
    },
    {
      key: "11",
      label: "Asset Name",
      children: formData.cr77d_assetname,
      span: 1,
    },
    {
      key: "12",
      label: "Asset Location",
      children: formData.cr77d_assetlocation,
      span: 1,
    },
    {
      key: "13",
      label: "Asset Details",
      children: formData.cr77d_assetdetails,
      span: 2,
    },
    {
      key: "14",
      label: "Asset Value",
      children: formData.cr77d_assetvalue,
      span: 1,
    },
    {
      key: "15",
      label: "Asset Owner",
      children: formData.cr77d_assetowner,
      span: 1,
    },
    {
      key: "16",
      label: "Special Request",
      children: formData.cr77d_specialrequest,
      span: 2,
    },
    {
      key: "17",
      label: "Comments",
      children: formData.cr77d_comments,
      span: 2,
    },
  ];

  return (
    <div className="mt-20 mb-7 flex flex-col items-center">
      <Descriptions
        className="w-[75vw]"
        title="Filled form details"
        layout="vertical"
        bordered
        column={2} // Two columns for splitting evenly
        items={items}
      />
      <div className="w-[75vw] mt-12 flex justify-end">
        <button
          className=" border bg-[#1565c0] text-sm text-white mr-5 w-16 h-9 rounded-md"
          onClick={() => setActiveStep(0)}
        >
          Edit
        </button>
        <button
          className="border bg-[#c62828] text-sm text-white w-16 h-9 rounded-md"
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Summary;
