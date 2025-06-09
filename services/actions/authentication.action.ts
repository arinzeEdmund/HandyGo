import route from "@/lib/routes";
import {
  InitiateSignupFormDataType,
  LoginFormDataType,
} from "@/types/auth.type";
import { UserType } from "@/types/user.type";
import { post } from "../clients";
import { setAsyncStorageData } from "../clients/async-storage-config";

export async function loginClient(formdata: LoginFormDataType) {
  const result = await post<
    { user: UserType; token: string },
    LoginFormDataType
  >(route.api.login, formdata, {});
  if (result?.data) {
    console.log(result, "login result");
    await setAsyncStorageData([
      { key: "authorization", value: `Bearer ${result?.data?.token}` },
    ]);
  }
  return result;
}

export async function initiateRegisteration(
  formdata: InitiateSignupFormDataType
) {
  const result = await post<{ email: string }, InitiateSignupFormDataType>(
    route.api.register,
    formdata,
    {}
  );

  return result;
}


export async function logout() {
  const result = await post<object, object>(route.api.logout, {});
  return result;
}
