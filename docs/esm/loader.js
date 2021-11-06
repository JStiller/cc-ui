import { C as CSS, p as plt, w as win, a as promiseResolve, b as bootstrapLazy } from './index-e3a83d7c.js';

/*
 Stencil Client Patch Esm v2.9.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    // NOTE!! This fn cannot use async/await!
    // @ts-ignore
    if (!(CSS && CSS.supports && CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return import(/* webpackChunkName: "polyfills-css-shim" */ './css-shim-09c9cbdc.js').then(() => {
            if ((plt.$cssShim$ = win.__cssshim)) {
                return plt.$cssShim$.i();
            }
            else {
                // for better minification
                return 0;
            }
        });
    }
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["cc-button",[[1,"cc-button",{"primary":[4],"href":[8]}]]],["cc-link",[[1,"cc-link",{"href":[1],"external":[4]}]]],["cc-checkbox",[[1,"cc-checkbox",{"checked":[1540],"value":[1]},[[0,"click","handleClick"]]]]],["cc-headline",[[1,"cc-headline",{"rank":[2]}]]],["cc-icon",[[1,"cc-icon",{"icon":[1]}]]]], options);
  });
};

export { defineCustomElements };