import { build, mergeConfig, UserConfig } from 'vite-plus';
import * as vite from 'vite-plus';
import { relative, resolve } from 'node:path';

import { Options } from './options.js';

export async function buildSSRApp(config: UserConfig, options?: Options) {
  const workspaceRoot = options?.workspaceRoot ?? process.cwd();
  const sourceRoot = options?.sourceRoot ?? 'src';
  const rootDir = relative(workspaceRoot, config.root || '.') || '.';
  const ssrBuildConfig = mergeConfig(config, <UserConfig>{
    build: {
      ssr: true,
      [vite.rolldownVersion ? 'rolldownOptions' : 'rollupOptions']: {
        input:
          options?.entryServer ||
          resolve(workspaceRoot, rootDir, `${sourceRoot}/main.server.ts`),
      },
      outDir:
        options?.ssrBuildDir || resolve(workspaceRoot, 'dist', rootDir, 'ssr'),
    },
  });

  await build(ssrBuildConfig);
}
