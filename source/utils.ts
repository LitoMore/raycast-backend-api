import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import type {RaycastConfig} from './types.js';

export const macConfigPath = path.join(
	os.homedir(),
	'.config/raycast/config.json',
);

export const windowsConfigPath = path.join(
	os.homedir(),
	'.config/raycast-x/config.json',
);

export const readRaycastToken = (configPath?: string) => {
	let defaultPaths = [macConfigPath, windowsConfigPath];
	if (os.platform() === 'win32') {
		defaultPaths = [windowsConfigPath, macConfigPath];
	}

	for (const config of [configPath, ...defaultPaths]) {
		if (config && fs.existsSync(config)) {
			configPath = config;
			break;
		}
	}

	if (!configPath) {
		return '';
	}

	try {
		const config = JSON.parse(
			fs.readFileSync(configPath, 'utf8'),
		) as RaycastConfig;
		// eslint-disable-next-line @typescript-eslint/naming-convention
		const {token, Token, accessToken} = config;
		return token ?? Token ?? accessToken ?? '';
	} catch {
		return '';
	}
};
