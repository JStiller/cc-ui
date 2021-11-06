'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3502f251.js');

/*
 Stencil Client Patch Esm v2.9.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    // NOTE!! This fn cannot use async/await!
    // @ts-ignore
    if (!(index.CSS && index.CSS.supports && index.CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return Promise.resolve().then(function () { return require(/* webpackChunkName: "polyfills-css-shim" */ './css-shim-17741caa.js'); }).then(() => {
            if ((index.plt.$cssShim$ = index.win.__cssshim)) {
                return index.plt.$cssShim$.i();
            }
            else {
                // for better minification
                return 0;
            }
        });
    }
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["cc-button.cjs",[[1,"cc-button",{"primary":[4],"href":[8]}]]],["cc-link.cjs",[[1,"cc-link",{"href":[1],"external":[4]}]]],["cc-checkbox.cjs",[[1,"cc-checkbox",{"checked":[1540],"value":[1]},[[0,"click","handleClick"]]]]],["cc-headline.cjs",[[1,"cc-headline",{"rank":[2]}]]],["cc-icon.cjs",[[1,"cc-icon",{"icon":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
