# Project Notes

## Thu 03/23/2023 14:03

- While scaffolding the client app, we discovered that the server would require `"type": "commonjs"` in `package.json`, but vite scafolds apps with `"type": "module"`. This will probably not impact the built version of the client app, but it may affect the dev server behavior later.

  - https://stackoverflow.com/questions/61401475/why-is-type-module-in-package-json-file
  - https://nodejs.org/docs/latest-v13.x/api/esm.html#esm_enabling
  - https://www.typescriptlang.org/tsconfig#module

- Nodemon may be watching the client files as well, which may slow down the development API server
- TODO: configure CORS to be less permissive on the server than "\*"

## Thu 04/06/2023 16:07

TODOs:
- When the server starts, test the db connection to display errors up front
- Refactor client to include Routes folder
- Wrap axios calls in more convenient custom React hook
  - Including support for POST and request bodies
  - And also support for loading and error states
  - https://github.com/simoneb/axios-hooks 👀
  - 
