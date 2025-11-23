import { config as loadEnv } from 'dotenv';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const projectRoot = process.cwd();
const envFilePath = resolve(projectRoot, '.env');

loadEnv({ path: envFilePath, override: false });

const token =
  process.env.NG_APP_GITHUB_TOKEN ??
  process.env.githubToken ??
  process.env.GITHUB_TOKEN ??
  '';

const targetPath = resolve(projectRoot, 'src/environments/environment.generated.ts');
const targetDir = dirname(targetPath);

if (!existsSync(targetDir)) {
  mkdirSync(targetDir, { recursive: true });
}

const fileContents = `import type { Environment } from './environment.types';

export const generatedEnvironment: Partial<Environment> = {
  production: false,
  githubToken: ${JSON.stringify(token)}
};
`;

writeFileSync(targetPath, fileContents);
