declare namespace Auth {
  export interface LoginRequestData {
    email: string;
    password: string;
  }
  export interface LoginRequestPayload {
    data: LoginRequestData;
    callback?: () => void;
  }

  export interface LoginState {
    isLoading: boolean;
    error?: any;
  }

  export interface AuthContextType {
    isUserLogin: boolean;
    isLoading: boolean;
    error: any;
    isProgressSelector?: boolean;
  }
}
