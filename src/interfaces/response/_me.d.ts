declare namespace ME {
  export interface MeParams {
    id?: string;
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
  }

  export interface MeReducer {
    isLoading: boolean;
    isLogin: boolean;
    error: any;
    me?: MeInfo | null;
  }
}
