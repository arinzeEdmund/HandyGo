import * as Yup from "yup";


export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  passcode: Yup.string()
    .required("Passcode is required")
    .min(6, "Passcode must be at least 6 characters"),
});