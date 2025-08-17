# `@banksnussman/osrm`

## Description

This is a TypeScript client for the (osrm-backend)[https://github.com/Project-OSRM/osrm-backend] REST API.

Thank you to https://github.com/1papaya/osrm-openapi for providing the osrm-openapi.yaml file.

## Install

```bash
bun add @banksnussman/osrm
```

## Usege

```typescript
import { OSRM } from '@banksnussman/osrm';

const { data: route, error } = await osrm.GET(
  "/route/{version}/{profile}/{coordinates}",
  {
    params: {
      path: {
        coordinates:
          "-81.6538314,36.2221064;-80.75991097845207,35.08197829130579",
        profile: "driving",
        version: "v1",
      },
    },
  },
);

console.log(route, error);
```
