# raycast-backend-api

Accessing the Raycast backend API delightfully.

## Install

```shell
npm i raycast-backend-api
```

## Usage

```ts
import RaycastApi from "raycsat-backend-api";

const api = new RaycastApi();

const me = await api.me();
const models = await api.aiModels();
```

### Constructor Options

- `token`: The Bearer token for the authorization header. Defaults to the token in your Raycast config. You can pass in an empty string to omit it from the authorization header.
- `apiEndpoint`: The API endpoint. Defaults to `https://backend.raycast.com/api/v1/`.
- `configPath`: The path to your Raycast config file. Defaults to `~/.config/raycast/config.json`.

## API

> [!CAUTION]\
> All APIs are subject to change by Raycast. You should handle errors in your code usage.

### api.me()

Get current user's information.

Returns a `Promise<Me>`.

### api.aiModels()

Get all AI models.

Returns a `Promise<AiModels>`.

## License

MIT
