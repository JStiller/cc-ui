import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'codecentric',
  buildEs5: 'prod',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../dist/loader',
    },
    {
      type: 'docs-readme',
      dir: 'dist/docs',
    },
    {
      type: 'www',
      baseUrl: 'cc-ui',
      copy: [{ src: 'assets', dest: '' }],
    },
  ],
  plugins: [
    sass({
      injectGlobalPaths: ['src/assets/css/settings/fonts.scss'],
    }),
  ],
  devServer: {
    openBrowser: false,
    logRequests: true,
  },
  extras: {
    cssVarsShim: true,
    dynamicImportShim: true,
    shadowDomShim: true,
    safari10: true,
    scriptDataOpts: true,
    appendChildSlotFix: false,
    cloneNodeFix: false,
    slotChildNodesFix: true,
  },
};
