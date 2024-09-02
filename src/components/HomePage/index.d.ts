interface FormDataType {
    cr77d_id: string | null;
    cr77d_name: string | null;
    cr77d_firstname: string | null;
    cr77d_lastname: string | null;
    cr77d_address: string | null;
    cr77d_pincode: string | null;
    cr77d_phonenumber: string | null;
    cr77d_assetname: string | null;
    cr77d_assetdetails: string | null;
    cr77d_assetvalue: number | null;
    cr77d_specialrequest: string | null;
    cr77d_personaldetailsverified: boolean;
    cr77d_additionaldetailsverified: boolean;
    cr77d_assetvalueverified: boolean;
    cr77d_dob:string | null;
    cr77d_age:number | null;
    cr77d_gender:string | null;
    cr77d_email:string | null;
  }

  interface FormErrorDataType {
    cr77d_id_error: boolean;
    cr77d_name_error: boolean;
    cr77d_firstname_error: boolean;
    cr77d_lastname_error: boolean;
    cr77d_address_error: boolean;
    cr77d_pincode_error: boolean;
    cr77d_phonenumber_error: boolean;
    cr77d_assetname_error: boolean;
    cr77d_assetdetails_error: boolean;
    cr77d_assetvalue_error: boolean;
    cr77d_specialrequest_error: boolean;
    cr77d_personaldetailsverified_error: boolean;
    cr77d_additionaldetailsverified_error: boolean;
    cr77d_assetvalueverified_error: boolean;
    cr77d_dob_error:boolean;
    cr77d_age_error:boolean;
    cr77d_gender_error:boolean;
    cr77d_email_error:boolean;
  }
  