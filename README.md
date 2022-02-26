# Sketch Document and Artboard Viewer

## Setup

tbd

## TODOS

- [ ] Write a Test for the Topbar if you still have time

## Ideas to improve

- It wasn't really easy to get some of the Dimensions. E.g. I couldn't click the Spacer within the actual Sketch artboard.
  - It would've been nice to have proper UX/UI Guidelines instead of me using px values
- Why would I use the Separator as an Image? The chance of getting artifacts with images are higher than with CSS.
- Use space - just like in Sketch and PS - to move around witht the mouse
- As part of the Design System I wouldn't just style the components "as is" but reuse abstractions and variables
- Install eslint import order to have less diffs
- Depending on your needs I could surely add type safety through TypeScript
- Caching (apollo?)
- Abstracting to custom hooks if needed
- In a real world application I would not fetch all data at once but since Apollo caches it anyways we can safely just use one query hook here.
- using commitlint with commit hooks to enforce a message format
- using aliases in webpack/jsconfig to make resolution paths smaller
