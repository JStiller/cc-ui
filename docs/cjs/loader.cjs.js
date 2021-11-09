'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8ede2969.js');

/*
 Stencil Client Patch Esm v2.10.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    // NOTE!! This fn cannot use async/await!
    // @ts-ignore
    if (!(index.CSS && index.CSS.supports && index.CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return Promise.resolve().then(function () { return require(/* webpackChunkName: "polyfills-css-shim" */ './css-shim-f3f37314.js'); }).then(() => {
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
  return index.bootstrapLazy([["cc-button.cjs",[[1,"cc-button",{"primary":[4],"href":[8]}]]],["cc-link.cjs",[[1,"cc-link",{"href":[1],"external":[4]}]]],["cc-checkbox.cjs",[[1,"cc-checkbox",{"checked":[1540],"value":[1]},[[0,"click","handleClick"]]]]],["cc-content.cjs",[[1,"cc-content",{"portfolio":[8],"columns":[8]}]]],["cc-headline.cjs",[[1,"cc-headline",{"rank":[2]}]]],["cc-tag.cjs",[[1,"cc-tag"]]],["cc-icon.cjs",[[1,"cc-icon",{"icon":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
