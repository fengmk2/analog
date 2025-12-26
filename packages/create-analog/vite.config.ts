/// <reference types="@voidzero-dev/vite-plus/test" />

import { defineConfig } from '@voidzero-dev/vite-plus';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    test: {
      globals: true,
      environment: 'jsdom',
      include: ['__tests__/**/*.spec.ts'],
      reporters: ['default'],
    },
    define: {
      'import.meta.vitest': mode !== 'production',
    },
  };
});
