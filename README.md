# `@banksnussman/osrm`

A TypeScript client for the [osrm-backend](https://github.com/Project-OSRM/osrm-backend) REST API.

Thank you to [1papaya/osrm-openapi](https://github.com/1papaya/osrm-openapi) for providing the `osrm-openapi.yaml` file.

## Install

```bash
bun add @banksnussman/osrm
```

## Usage

```typescript
import { route } from '@banksnussman/osrm';

const { data: route, error } = await route({
  path: {
    coordinates: "-81.6538314,36.2221064;-80.75991097845207,30.75991097845207",
    profile: "driving",
    version: "v1",
  },
});

console.log(route, error);
```
