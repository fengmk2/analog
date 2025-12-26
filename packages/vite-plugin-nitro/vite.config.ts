/// <reference types="@voidzero-dev/vite-plus/test" />
import { defineConfig } from '@voidzero-dev/vite-plus';

import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/vite-plugin-nitro',
  plugins: [
    viteTsConfigPaths({
      root: '../../',
      projects: [],
    }),
  ],
  test: {
    reporters: ['default'],
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
}));
