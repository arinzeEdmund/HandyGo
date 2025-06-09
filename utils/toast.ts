// utils/toastUtils.ts
import { ALERT_TYPE, Toast } from "react-native-alert-notification";

type ToastConfig = {
  type: "SUCCESS" | "DANGER" | "WARNING";
  title: string;
  message: string;
};

export const showToast = ({ type, title, message }: ToastConfig) => {
  switch (type) {
    case "SUCCESS":
      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title,
        textBody: message,
      });
      break;
    case "DANGER":
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title,
        textBody: message,
      });
      break;
    case "WARNING":
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title,
        textBody: message,
      });
      break;
    default:
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: "Error",
        textBody: "An unknown error occurred",
      });
  }
};

// Convenience functions for common cases
export const showSuccessToast = (message: string, title = "Success") => {
  showToast({ type: "SUCCESS", title, message });
};

export const showErrorToast = (message: string, title = "Error") => {
  showToast({ type: "DANGER", title, message });
};

export const showWarningToast = (message: string, title = "Warning") => {
  showToast({ type: "WARNING", title, message });
};

export const showUnexpectedErrorToast = () => {
  showErrorToast("An unexpected error occurred");
};
