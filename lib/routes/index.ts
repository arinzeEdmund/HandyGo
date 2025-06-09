import authApiRoute from "@/lib/routes/api-routes/auth-api.route";
import { RouteType } from "@/types/route.type";

const APIRoutes = [
  ...authApiRoute,
] as const satisfies RouteType[];

/**
 * Transforms routes into a structured, type-safe object.
 */

export const transformRoutes = <T extends readonly RouteType[]>(routes: T) => {
  return Object.fromEntries(
    routes.map((route) => [route.name, route.value])
  ) as {
    [K in T[number]["name"]]: Extract<T[number], { name: K }>["value"];
  };
};

const api = transformRoutes(APIRoutes);

const route = { api };

export const apiRoutes = APIRoutes.map((route) => route.value) as string[];

export default route;
