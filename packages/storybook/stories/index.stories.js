import { defineCustomElements, applyPolyfills } from "../../stencil/loader";

applyPolyfills().then(() => {
  defineCustomElements(window);
});
