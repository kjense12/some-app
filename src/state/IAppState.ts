export interface IAppState {
    firstName: string;
    setfirstName: (firstName: string) => void;
    lastName: string;
    setlastName: (lastName: string) => void;
    token: string;
    settoken: (token: string) => void;
    refreshToken: string;
    setRefreshToken: (refreshToken: string) => void;
    refreshTokenExpiration: string
    setRefreshTokenExpiration: (refreshTokenExpiration: string) => void;
    previousRefreshToken: string;
    setPreviousRefreshToken: (previousRefreshToken: string) => void;
    previousRefreshTokenExpiration: string;
    setPreviousRefreshTokenExpiration: (previousRefreshTokenExpiration: string) => void;
    listOfWallets : [];
    setlistOfWallets: (listOfWallets: []) => void;
    setValues: (firstName : string, lastName: string, token: string, refreshToken: string) => void;
}
