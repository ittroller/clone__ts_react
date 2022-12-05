// define name of env variable here !
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PUBLIC_URL: string;
    REACT_APP_TOKEN_KEY_NAME: string;
    REACT_APP_API_URL: string;
    REACT_APP_VERSION: string;

    REACT_APP_RPC_INFURA_KEY: string;
    REACT_APP_WEB3AUTH_CLIENT_ID: string;
  }
}
