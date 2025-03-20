# raycast-backend-api

## Install

```shell
npm i raycast-backend-api
```

## Usage

```ts
import RaycastApi from "raycsat-backend-api";

const api = new RaycastApi();

// Built-in API methods
const me = await api.me();
const models = await api.aiModels();

// Request any URI
const custom = await api.client
	.post("custom/uri", {
		json: {
			foo: "bar",
		},
	})
	.json<YourResponseTypeHere>();
```

You can also customize the target procotol and API endpoint for some advanced usages:

```ts
import RaycastAPI from "raycast-backend-api";

const api = new RaycastApi({
	token: "", // Set an empty string to omit the authorization header
	apiEndpoint: "http://localhost:8000/api/v1/",
});
```

### Constructor Options

- `token`: The Bearer token for the authorization header. Defaults to the token in your Raycast config. You can pass in an empty to omit it from the authorization header.
- `apiEndpoint`: The API endpoint. Defaults to `https://backend.raycast.com/api/v1/`.
- `configPath`: The path to your Raycast config file. Defaults to `~/.config/raycast/config.json`.

## API

> [!CAUTION]\
> All APIs are subject to change by Raycast. You should handle errors in your code usage.

### Constructor

### api.me()

Get current user's information.

Returns a `Promise<Me>`.

### api.aiModels()

Get all AI models.

Returns a `Promise<AiModels>`.

## License

MIT
