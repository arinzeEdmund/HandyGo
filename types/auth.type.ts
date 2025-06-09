export type InitiateSignupFormDataType = {
  email: string;
};

export type LoginFormDataType = {
  email: string;
  passcode: string;
};

export type ForgotPasswordFormDataType = Pick<LoginFormDataType, "email">;

export type ResetPasswordFormDataType = {
  email: string;
  passcode: string;
  otpCode: string;
  confirmPasscode: string;
};

export type EmailVerificationFormType = {
  email: string;
  otpCode: string;
};

export type ResendOtpFormType = {
  purpose: string;
  email: string;
};

export type CreatePasscodeFormType = {
  email: string;
  passcode: string;
  confirmPasscode: string;
};

export type CreatePinFormType = {
  pin: string;
  confirmPin: string;
};

export type ChangePinFormType = {
  pin: string;
  confirmPin: string;
  otpCode: string;
};

export type ChangePasscodeFormType = {
  otpCode: string;
  passcode: string;
  confirmPasscode: string;
};

export type ChangeEmailFormType = {
  otp: string;
  newEmail: string;
};

export type UserExistType = { email: string; profile: string; name: string };
