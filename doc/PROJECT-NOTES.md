# Project Notes

## Thu 03/23/2023 14:03

- While scaffolding the client app, we discovered that the server would require `"type": "commonjs"` in `package.json`, but vite scafolds apps with `"type": "module"`. This will probably not impact the built version of the client app, but it may affect the dev server behavior later.
  - https://stackoverflow.com/questions/61401475/why-is-type-module-in-package-json-file
  - https://nodejs.org/docs/latest-v13.x/api/esm.html#esm_enabling
  - https://www.typescriptlang.org/tsconfig#module
