export const AUTH_ROUTER_PATH = {
  LOGIN: { KEY: 'LOGIN', PATH: '/login', ROLE: ['admin', 'user'] },
};

export const GLOBAL_ROUTER_PATH = {
  NOT_FOUND: { KEY: 'NOT_FOUND', PATH: '*', ROLE: ['admin', 'user'] },
};

export const PRIVATE_ROUTER_PATH = {
  DASHBOARD: { KEY: 'DASHBOARD', PATH: '/dashboard', ROLE: ['admin'] },
  ACCOUNT: { KEY: 'ACCOUNT', PATH: '/account', ROLE: ['admin'] },
};

export const PUBLIC_ROUTER_PATH = {
  HOME: { KEY: 'HOME', PATH: '/', ROLE: ['user'] },
  ABOUT: { KEY: 'ABOUT', PATH: '/about', ROLE: ['user'] },
};

export const ROUTER_PATH = {
  ...AUTH_ROUTER_PATH,
  ...GLOBAL_ROUTER_PATH,
  ...PRIVATE_ROUTER_PATH,
  ...PUBLIC_ROUTER_PATH,
};
