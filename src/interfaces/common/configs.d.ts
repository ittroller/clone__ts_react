// define name of env variable here !
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PUBLIC_URL: string;
    REACT_APP_TOKEN_KEY_NAME: string;
    REACT_APP_API_URL: string;
    REACT_APP_VERSION: string;
  }
}
