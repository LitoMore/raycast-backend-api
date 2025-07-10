import got, {type Got} from 'got';
import type {AiModels, Me} from './types.js';
import {readRaycastToken} from './utils.js';

export type * from './types.js';

export type RaycastApiOptions = {
	token?: string;
	apiEndpoint?: string;
	configPath?: string;
};

export default class RaycastApi {
	public readonly client: Got;
	private readonly token: string;
	private readonly apiEndpoint: URL;
	private readonly configPath?: string;

	constructor(options?: RaycastApiOptions) {
		this.apiEndpoint = new URL(
			options?.apiEndpoint ?? 'https://backend.raycast.com/api/v1/',
		);
		this.token = options?.token ?? readRaycastToken(this.configPath);
		this.client = got.extend({
			prefixUrl: this.apiEndpoint,
			headers: {
				authorization: this.token ? `Bearer ${this.token}` : undefined,
			},
		});
	}

	async me() {
		return this.client.get('me').json<Me>();
	}

	async aiModels() {
		return this.client.get('ai/models').json<AiModels>();
	}
}
