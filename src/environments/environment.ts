import type { Environment } from './environment.types';
import { generatedEnvironment } from './environment.generated';

const fallbackEnvironment: Environment = {
  production: false,
  githubToken: ''
};

if (!generatedEnvironment.githubToken) {
  console.warn('GitHub token is missing. Requests will fail until NG_APP_GITHUB_TOKEN is set.');
}

export const environment: Environment = {
  ...fallbackEnvironment,
  ...generatedEnvironment
};
