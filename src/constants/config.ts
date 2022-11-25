export const LANGUAGE = {
  EN: 'en',
  VI: 'vi',
};

export const LOCAL_STORAGE_KEY = {
  LANGUAGE: 'language',
  TOKEN: 'token',
  REFRESH_TOKEN: 'refresh_token',
  THEME: 'theme',
};

export const SYSTEM_ERROR = {
  NETWORK_ERROR: {
    STATUS: 'Network Error',
    MESSAGE: 'Request has been cancelled',
  },

  TIMEOUT_ERROR: {
    STATUS: 'Request Timeout',
    MESSAGE: 'The Request Has Timed Out',
  },
};

export const HTTP_STATUS = {
  SUCCESS: 200,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  REQUEST_TIMEOUT: 408,
  PAYLOAD_TOO_LARGE: 413,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
};

export const THEME_TYPE = {
  LIGHT: 'light',
  DARK: 'dark',
};
