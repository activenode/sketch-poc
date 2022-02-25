# Sketch Document and Artboard Viewer

## Setup

tbd

## Ideas to improve

- Install eslint import order to have less diffs
- Depending on your needs I could surely add type safety through TypeScript
- Caching (apollo?)
- Abstracting to custom hooks if needed
- In a real world application I would not fetch all data at once but since Apollo caches it anyways we can safely just use one query hook here.
- using commitlint with commit hooks to enforce a message format
- using aliases in webpack/jsconfig to make resolution paths smaller
