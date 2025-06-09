export type PageParamType = {
  params: PageIDType;
};

export type PageIDType = { id: string };

export type RouteType = {
  value: string;
  title?: string;
  name: string;
  group?: string;
};

export type MenuType = {
  title: string;
  icon?: string;
  path?: string;
};

export type NavMenuType = MenuType & {
  children?: NavMenuType[];
};
