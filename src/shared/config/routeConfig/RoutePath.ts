export enum AppRoutes {
  HOME = 'home',
  SIGNIN = 'signin',
  SIGNUP = 'signup',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.SIGNIN]: '/signin',
  [AppRoutes.SIGNUP]: '/signup',
};
