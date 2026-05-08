# Changelog

## 2.0.0

- Breaking: `tryit` now only accepts a function. Async inputs must be wrapped as `() => promise`.
- Breaking: invalid inputs now throw `TypeError` instead of returning `[undefined, null]`.
- Breaking: package output changed from legacy UMD/ES5 bundles to modern CJS/ESM builds.
- Internal: toolchain migrated from `yarn + rollup + jest` to `pnpm + tsup + vitest`.
