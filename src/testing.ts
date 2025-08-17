import { osrm } from ".";

const { data: route, error } = await osrm.GET(
  "/route/{version}/{profile}/{coordinates}",
  {
    params: {
      query: {
        steps: true,
      },
      path: {
        coordinates: "-81.6538314,36.2221064;-80.780043,35.097529",
        profile: "driving",
        version: "v1",
      },
    },
  },
);

console.dir(route, { depth: null });
