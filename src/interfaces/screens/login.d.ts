declare namespace ILogin {
  export interface Reducer {
    isLoading: boolean;
    error: any;
    meInfo: MeInfo | null;
  }

  export interface Payload {
    email: string;
    password: string;
  }

  export interface ActionPayload {
    data: LoginRequestData;
    callback?: () => void;
  }

  export interface MeInfo {
    address?: string | null;
    date?: string | null;
    education?: string | null;
    email?: string | null;
    gender?: number | null;
    isActive?: boolean | null;
    job?: string | null;
    name?: string | null;
    phoneNumber?: string | null;
    role?: number | null;
    _id?: string;
    token?: string;
    refresh_token?: string;
    isLogin?: boolean;
    isLoading?: boolean;
    error?: any;
    role: string
  }
}
