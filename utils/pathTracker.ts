// app/utils/pathTracker.ts
let currentPathname = "/";

export const setCurrentPathname = (path: string) => {
  currentPathname = path;
};

export const getCurrentPathname = () => currentPathname;
