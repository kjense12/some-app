import { AxiosError } from "axios";
import { data } from "jquery";
import { useContext } from "react";
import { IJWTResponse } from "../domain/IJWTResponse";
import { AppContext } from "../state/AppContext";
import httpClient from "./HttpClient";
import { IServiceResult } from "./IserviceResult";

export class IdentityService {
    async login(email: string, password: string): Promise<IServiceResult<IJWTResponse>> {
        try {
            let loginInfo = {
                email,
                password
            }
            let response = await httpClient.post("/identity/account/Login", loginInfo);
            return {
                status: response.status,
                data: response.data as IJWTResponse
            };

        } catch (e) {
            const error = e as AxiosError;
            
            let response = {
                status: error.response?.status,
                errorMsg: error.response?.data,
            }

            return response;

        }
    }
    async refreshIdentity(token: string, refreshToken: string): Promise<IServiceResult<IJWTResponse>> {
        try {

            let response = await httpClient.post("/identity/account/refreshtoken",
                {
                    jwt: token,
                    refreshToken: refreshToken
                }
            );
            return {
                status: response.status,
                data: response.data as IJWTResponse
            };

        } catch (e) {
            const error = e as AxiosError;
            
            let response = {
                status: error.response?.status,
                errorMsg: error.response?.data,
            }

            return response;
        }
    }

    async Register(firstName: string, lastName: string, email: string, password: string): Promise<IServiceResult<IJWTResponse>> {
        try {
            let registerInfo = {
                firstName,
                lastName,
                email,
                password
            }
            let response = await httpClient.post("/identity/account/register", registerInfo);
            return {
                status: response.status,
                data: response.data as IJWTResponse
            };

        } catch (e) {
            const error = e as AxiosError;
            
            let response = {
                status: error.response?.status,
                errorMsg: error.response?.data,
            }

            return response;

        }
    }

}
