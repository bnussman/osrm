import createClient from "openapi-fetch";
import type { paths as OSRM } from "./osrm";

export const osrm = createClient<OSRM>({
  baseUrl: "https://osrm.ridebeep.app",
  // baseUrl: "https://router.project-osrm.org",
  // baseUrl: "https://routing.openstreetmap.de/routed-car",
});
export type { OSRM };
