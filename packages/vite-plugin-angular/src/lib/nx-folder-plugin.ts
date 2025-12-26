import { normalizePath, Plugin } from '@voidzero-dev/vite-plus';

/**
 * Ignores anything in the .nx folder from triggering HMR
 *
 * @returns
 */
export function nxFolderPlugin(): Plugin {
  return {
    name: 'analogjs-nx-folder-plugin',
    apply: 'serve',
    handleHotUpdate(ctx) {
      if (ctx.file.includes(normalizePath('/.nx/'))) {
        return [];
      }

      return ctx.modules;
    },
  };
}
