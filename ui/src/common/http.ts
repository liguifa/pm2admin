import { message } from "antd";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { ILoadingAction, LOADING, LoadingStatus } from "../modules/main";

class HttpClass {
    private base: string = "http://rap2api.taobao.org/app/mock/124209"

    public async post<T, TResult>(url: string, data: T): Promise<IResult<TResult>> {
        return (await axios.post(`${this.base}${url}`, data)).data;
    }

    public interceptors(dispatch: (action: ILoadingAction) => void): void {
        axios.interceptors.request.use(this.requestInterceptor(dispatch), this.errorInterceptor(dispatch));
        axios.interceptors.response.use(this.responseInterceptor(dispatch), this.errorInterceptor(dispatch));
    }

    private requestInterceptor(dispatch: (action: ILoadingAction) => void): (config: AxiosRequestConfig) => AxiosRequestConfig {
        return (config: AxiosRequestConfig) => {
            dispatch({ status: LoadingStatus.LOADING, type: LOADING });
            return { ...config, withCredentials: true };
        };
    } 

    private errorInterceptor(dispatch:  (action: ILoadingAction) => void) {
        return (error: string) => {
            message.error(`请求错误，${error}.`);
            dispatch({ status: LoadingStatus.ERROR, type: LOADING });
            return Promise.reject(error);
        }
    }

    private responseInterceptor(dispatch:  (action: ILoadingAction) => void): (response: AxiosResponse) => AxiosResponse {
        return (response: AxiosResponse) => {
            dispatch({ status: LoadingStatus.SUCCESS, type: LOADING });
            return { ...response };
        };
    } 
}

interface IResult<TData> {
    isSuccess: boolean,
    data: TData
}

export const Http = new HttpClass()