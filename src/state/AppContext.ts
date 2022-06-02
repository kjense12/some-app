import React from "react";
import { IAppState } from "./IAppState";

export const initialState : IAppState = {
    firstName: "Guest",
    setfirstName: () => { },
    lastName: "Guest",
    setlastName: () => { },
    token: "",
    settoken: () => { },
    refreshToken: "",
    setRefreshToken: () => { },
    refreshTokenExpiration: " ",
    setRefreshTokenExpiration: () => { },
    previousRefreshToken: " ",
    setPreviousRefreshToken: () => { },
    previousRefreshTokenExpiration: " ",
    setPreviousRefreshTokenExpiration: () => { },
    listOfWallets: [],
    setlistOfWallets: () => { },
    setValues: () => { }
};

export const AppContext = React.createContext<IAppState>(initialState);
export const AppContextProvider = AppContext.Provider;