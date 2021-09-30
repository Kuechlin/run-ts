const MOBILE_BREAKPOINT = 1000;
export type AppSize = 'l' | 's';
export const getAppSize = () => {
  if (window.innerWidth < MOBILE_BREAKPOINT) return 's';
  else return 'l';
};
