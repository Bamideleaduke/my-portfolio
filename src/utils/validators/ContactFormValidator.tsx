/* eslint-disable max-len */
import * as Yup from "yup";

export const InputFieldNames = {
  NAME: "username",
  EMAIL: "email",
  MESSAGE: "message",
  
} as const;



export interface ContactProps {
  [InputFieldNames.NAME]: string;
  [InputFieldNames.EMAIL]: string;
  [InputFieldNames.MESSAGE]: string;
}
export const ContactInitialValue = {
    [InputFieldNames.NAME]: "",
    [InputFieldNames.EMAIL]: "",
    [InputFieldNames.MESSAGE]: "",
  };
  export const ContactValidationSchema = Yup.object().shape({
    [InputFieldNames.EMAIL]: Yup.string().required("This field is required"),
    [InputFieldNames.MESSAGE]: Yup.string().required("This field is required"),
  });