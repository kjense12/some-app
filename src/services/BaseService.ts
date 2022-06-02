import { AxiosError } from "axios";
import { useContext } from "react";
import { IJWTResponse } from "../domain/IJWTResponse";
import { AppContext } from "../state/AppContext";
import { IAppState } from "../state/IAppState";
import httpClient from "./HttpClient";
import { IdentityService } from "./IdentityService";
import { IServiceResult } from "./IserviceResult";

export class BaseService<TEntity> {
    constructor(private path: string){
    }

    async getAllWithoutAuthentication(): Promise<TEntity[]> {
        let response = await httpClient.get(`/${this.path}`)
        let res = response.data as TEntity[];
        return res;
    }

    async getAll(token: string, refreshToken: string): Promise<IServiceResult<IJWTResponse>> {
        try {
            let response = await httpClient.get(`/${this.path}`, {
                headers: {
                    "Authorization": "bearer " + token
                }
            });

            let res = {
                status: response?.status,
                data: response?.data,
            }
            return res;
        } catch (e) {
            const error = e as AxiosError;
            let response = {
                status: error.response?.status,
                errorMsg: error.response?.data,
            }
            return response
        }
    }

    async getSpecific(id : string, token: string, refreshToken: string): Promise<IServiceResult<IJWTResponse>> {
        let response;
        try {
            response = await httpClient.get(`/${this.path}/${id}`, {
                headers: {
                    "Authorization": "bearer " + token
                }
            });

            let res = {
                status: response?.status,
                data: response?.data,
            }
            return res;
        } catch (e) {
            const error = e as AxiosError;
            let response = {
                status: error.response?.status,
                errorMsg: error.response?.data,
            }
            return response
        }
    }
}