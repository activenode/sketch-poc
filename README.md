# Sketch Document and Artboard Viewer

## Setup

1. `npm i`
2. `npm run start`
   2.1 or alternatively if you use `project-butler` -> `p add && p start`

## TODOS

- [ ] Write a Test for the Topbar if you still have time

## General Notes

- I'm not sure if I was supposed to add the `SF Pro Display` Font. I installed it now but on mac it's normally not available.
- It wasn't really easy to get some of the Dimensions. E.g. I couldn't click the Spacer within the actual Sketch artboard.
  - It would've been nice to have proper UX/UI Guidelines instead of me using px values
- Why would I use the Separator as an Image? The chance of getting artifacts with images are higher than with CSS.

## Ideas to improve

- Apparently the breadcrumb.svg is unused? Or am I blind?
- Fix the Eslint warnings
- I could have used the different sizes in the Artboards array e.g. with `<picture>` and srcset
  - For this challenge I will always take the last one for the thumbnails (HiRes)
- I could obviously also read the Document ID dynamically but for this challenge I didn't
- since arrow-right = inverseX(arrow-left) we could simply get rid of one of it...
- Adding jsdoc a bit more even tho I find the code pretty readable ATM still
- For throwing errors/logs -> use library to be able to abstract things away on e.g. prod and minify the overall output by defining error aliases -> also ErrorBoundaries!
- propTypes
- Use space - just like in Sketch and PS - to move around witht the mouse
- As part of the Design System I wouldn't just style the components "as is" but reuse abstractions and variables
- Install eslint import order to have less diffs
- Depending on your needs I could surely add type safety through TypeScript
- Caching depending on actual problems (apollo's caching is enough for now i guess)
- Abstracting to more custom hooks if needed
- In a real world application I would not fetch all data at once but since Apollo caches it anyways we can safely just use one query hook here.
- using commitlint with commit hooks to enforce a message format
- using aliases in webpack/jsconfig to make resolution paths smaller
- storybook for DS comps
