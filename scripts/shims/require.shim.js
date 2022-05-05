// https://github.com/sveltejs/kit/pull/1822/files#diff-4fdf56443b14c9e6aefc8c9bcbae6a054eb4ee5be464919f6247696c4cd7b30e
// fix: `Dynamic require of "..." is not supported`

import { createRequire } from 'module';

export { createRequire };

Object.defineProperty(globalThis, 'require', {
  enumerable: true,
  value: createRequire(import.meta.url),
});
