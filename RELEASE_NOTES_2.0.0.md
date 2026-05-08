# Release Notes - 2.0.0

## Breaking Changes

- `tryit` now only accepts a function.
  - Before: `await tryit(promise)`
  - After: `await tryit(() => promise)`
- Invalid inputs now throw `TypeError` instead of returning `[undefined, null]`.
- Package output changed from legacy UMD/ES5 bundles to modern CJS/ESM builds.

## Migration

Update direct Promise usage to function-wrapped usage:

```ts
const [data, err] = await tryit(() => promise);
```

If you relied on invalid inputs returning an empty tuple, update that call site to avoid passing non-function values or handle the thrown `TypeError`.

## Internal Changes

- Toolchain migrated from `yarn + rollup + jest` to `pnpm + tsup + vitest`.
- Package metadata was updated to use modern `exports` and `types` fields.
