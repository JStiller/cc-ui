import { defineCustomElements, applyPolyfills } from "../../dist/loader";

applyPolyfills().then(() => {
  defineCustomElements(window);
});
