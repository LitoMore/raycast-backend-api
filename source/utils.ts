import {accessSync, constants, readFileSync} from 'node:fs';
import {homedir} from 'node:os';
import {join} from 'node:path';
import {RaycastConfig} from './types.js';

export const readRaycastToken = (
	configPath = join(homedir(), '.config/raycast/config.json'),
) => {
	try {
		accessSync(configPath, constants.R_OK);
		const config = JSON.parse(
			readFileSync(configPath, 'utf8'),
		) as RaycastConfig;
		const {token, accessToken} = config;
		return token ?? accessToken ?? '';
	} catch {
		return '';
	}
};
