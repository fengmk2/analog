/// <reference types="@voidzero-dev/vite-plus/test" />

import { defineConfig } from '@voidzero-dev/vite-plus';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    root: __dirname,
    test: {
      reporters: ['default'],
      globals: true,
      include: ['**/*.spec.ts'],
      exclude: ['**/files/**/*.spec.ts'],
      cache: {
        dir: `../../node_modules/.vitest`,
      },
    },
    define: {
      'import.meta.vitest': mode !== 'production',
    },
  };
});
