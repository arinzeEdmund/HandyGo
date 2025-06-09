import { APIResponseType } from "@/types/constant.type";
import { AxiosError } from "axios";

const isJson = (text: string) => {
  return (
    /^[\],:{}\s]*$/.test(
      text
        .replace(/\\["\\\/bfnrtu]/g, "@")
        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]")
        .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
    ) === true
  );
};

export default class ErrorResponse implements APIResponseType<null> {
  public status = false;
  public message = "";
  public data = null;

  constructor(error: unknown) {
    if (error instanceof AxiosError) {
      const { response } = error as AxiosError<APIResponseType<null>>;
      this.message = response?.data.message || error.message;
      this.status = response?.data.status || this.status;
    } else if (error instanceof Error) {
      if (error.stack && isJson(error.stack)) {
        const stack = JSON.parse(error.stack);
        if (stack.status) this.status = stack.status;
      }
      this.message = error.message;
    } else return this.clear("");
    return this;
  }

  private clear = (message: string) => {
    this.message = message || "An Error Occured";
    this.status = false;
    return this;
  };

  public build = (): APIResponseType<null> => {
    const { message, status, data } = this;

    return { message, status, data };
  };
}