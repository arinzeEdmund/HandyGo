import { RouteType } from "@/types/route.type";

export default [
  {
    name: "refreshToken",
    value: `/auth/v1/refresh-token`,
  },
  {
    name: "authChecker",
    value: `/auth/v1/auth-check`,
  },
  {
    name: "login",
    value: `/auth/login`,
  },

  {
    name: "register",
    value: `/auth/initiate-register`,
  },
  {
    name: "verifyEmail",
    value: `/auth/verify-email`,
  },
  {
    name: "resendOtp",
    value: `/auth/resend-otp`,
  },
  {
    name: "forgotPasscode",
    value: `/auth/forgot-passcode`,
  },
  {
    name: "createPasscode",
    value: `/auth/create-passcode`,
  },
  {
    name: "resetPasscode",
    value: `/auth/reset-passcode`,
  },
  {
    name: "createPin",
    value: `/auth/create-pin`,
  },
  {
    name: "forgotPin",
    value: `/auth/forgot-pin`,
  },
  {
    name: "requestChangePin",
    value: `/auth/change-pin-request`,
  },
  {
    name: "changePin",
    value: `/auth/change-pin`,
  },
  {
    name: "changePasscode",
    value: `/auth/change-passcode`,
  },
  {
    name: "requestChangePasscode",
    value: `/auth/change-passcode-request`,
  },
  {
    name: "resetPin",
    value: `/auth/reset-pin`,
  },
  {
    name: "requestChangeEmail",
    value: `/auth/change-email/request`,
  },
  {
    name: "changeEmail",
    value: `/auth/change-email`,
  },
  {
    name: "logout",
    value: `/auth/logout`,
  },
] as const satisfies RouteType[];
