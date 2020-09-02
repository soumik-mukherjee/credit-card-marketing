## Important Note

### Note for `aws-amplify` modules usage

To overcome issues related to `window` or `navigator` objects not being availabe during `gatsby build`, specifically because of the `pinpoint` module
- Please add specific modules of amplify as dependencies only and not a dependency to the global module, e.g. to use auth do `yarn add @aws-amplify/auth` rather than `yarn add aws-amplify`
- You also need to import from these dependencies accordingly, i.e. your import for `Auth` in source code will look like `import Auth from '@aws-amplify/auth`
- These are most likely to impact the gatsby ssr build phase, so its wise to always run a `gatsby build` after any of these change and look for build errors

### Force Amplify build

- Trigger 1
