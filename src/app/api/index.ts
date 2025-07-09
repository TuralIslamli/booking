import { axiosApi } from "@/lib/axios";
import { ILoginFields } from "./models";

export default {
  postLogin: <T>(payload: ILoginFields): Promise<T> =>
    axiosApi.post('auth/otp/request', payload),
};
