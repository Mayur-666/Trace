/// <reference types="vite/client" />
declare module '@tailwindcss/vite' {
  import type { Plugin } from 'vite';
  const plugin: () => Plugin;
  export default plugin;
}

declare module 'vite-plugin-eslint' {
  import type { Plugin } from 'vite';
  interface Options {
    overrideConfigFile?: string;
    include?: string[];
    exclude?: string[];
    failOnError?: boolean;
    emitError?: boolean;
  }
  const plugin: (options?: Options) => Plugin;
  export default plugin;
}
