# Development

## Scripts

These scripts are available in the `package.json` file and can be executed with `npm run <script>`.

- `test`: Test command that calls [jest](https://jestjs.io)
- `test:watch`: Run tests related to changed files [in watch mode](https://jestjs.io/docs/en/cli#watch)
- `test:coverage`: Run tests, display and collect [coverage information](https://jestjs.io/docs/en/cli#coverage)
- `lint`: Lint command that calls [eslint](https://eslint.org/)
- `start:dev`: Start [webpack-dev-server](https://webpack.js.org/configuration/dev-server/)
- `build:node`: Build in development mode as a [commonjs2](https://webpack.js.org/configuration/output/#module-definition-systems) module, used for nodejs
- `build:web`: Build in development mode as a [umd](https://webpack.js.org/configuration/output/#module-definition-systems) module, used for web
- `build`: Runs `build:node` `build:web` together
- `build:watch`: Runs `build:node` `build:web` together in watch mode
- `prod:web`: Build in production mode as a [commonjs2](https://webpack.js.org/configuration/output/#module-definition-systems) module, used for nodejs
- `prod:node`: Build in production mode as a [umd](https://webpack.js.org/configuration/output/#module-definition-systems) module, used for web
- `prod`: Runs `prod:node` `prod:web` together in watch mode
- `servedocs`: Opens [docsify](https://docsify.js.org) server with the documentation
- `start`: Runs `servedocs` and `start:dev`
- `update-md-api`: Generates api docs for *Motus.js* and *Animation.js* and puts it in *docs/api.md*

## Overview of the project

```
src/
├── animation
│   ├── Animation.js // Class representing a new animation, here are set all the animation's opitons and triggered element calculations based on the scroll percent
│   ├── Animator.js // Each animation has an animator class. Handles getting the current keyframe that needs to be applied and also the percent of current keyframe.
│   ├── Keyframes.js // Handles keyframe normalization
│   └── Styler.js // Handles applying stiling to the dom element
├── enum
│   ├── errorEnum.js // Contains all possible error messages as functions
│   ├── functionValuesEnum.js // Specifies the ralationship between custom css functions and also the default parameters
│   └── specialUnitEnum.js // Contains units that are not explicitly set in css but are required in Motus
├── helpers
│   ├── dom.js // Style related functions
│   ├── index.js // exports all helpers from this file
│   ├── math.js // Math helpers
│   ├── string.js // String helpers
│   ├── throwError.js // Function used to throw errors from errorEnum 
│   ├── type.js // Type checking helpers
│   └── validation.js // Validation helpers
├── index.js // entry point
├── Motus.js // Main motus object, contains all animations
└── Point.js // Class used to get start and end point, contains only static methods
```


## Road map

- [ ] Support for multiple unit rules like: `padding: 10px 20px 30px`, `box-shadow: ...`
- [ ] Modularity, users can add, swap, and remove custom modules that handle custom functionality
- [ ] Create a React version
- [ ] Split Keyframes.js into smaller files
- [ ] Improve testing
- [ ] Improve docs
- [ ] Keep initial inlined style css for $el
- [ ] Improve performance
