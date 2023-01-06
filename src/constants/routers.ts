export const AUTH_ROUTER_PATH = {
  LOGIN: { KEY: 'LOGIN', PATH: '/login' },
};

export const GLOBAL_ROUTER_PATH = {
  NOT_FOUND: { KEY: 'NOT_FOUND', PATH: '*' },
};

export const PRIVATE_ROUTER_PATH = {
  DASHBOARD: { KEY: 'DASHBOARD', PATH: '/dashboard' },
  ACCOUNT: { KEY: 'ACCOUNT', PATH: '/account' },
};

export const PUBLIC_ROUTER_PATH = {
  HOME: { KEY: 'HOME', PATH: '/' },
  ABOUT: { KEY: 'ABOUT', PATH: '/about' },
};

export const ROUTER_PATH = {
  ...AUTH_ROUTER_PATH,
  ...GLOBAL_ROUTER_PATH,
  ...PRIVATE_ROUTER_PATH,
  ...PUBLIC_ROUTER_PATH,
};
