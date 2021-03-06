**Note:** This was the way we used to approach writing CSS at Segment.io and it inspired us to make [Myth](https://github.com/segmentio/myth), which is where future development for this idea will be happening.

---

# rework-pure-css

  A collection of pure-CSS Rework plugins, so you can write bleeding-edge, spec-compliant CSS and it will get transformed for browsers that haven't caught up yet.

  This is nice because it lets you write pure CSS, and as browser support improves you don't have to change a thing.

  _Note: some things aren't spec'd yet but are extremely obvious candidates, like certain pseudo-elements. It doesn't include controversial features like `extend`._

## Installation

    $ npm install rework-pure-css

## Example

```js
var pure = require('rework-pure-css');

rework(css)
  .use(pure)
  .toString();
```

## Plugins

  - [variables](https://github.com/visionmedia/rework-vars)
  - [prefixes](https://github.com/ai/autoprefixer)
  - [pseudo elements](https://github.com/yields/rework-pseudos)
  - [font-variant](https://github.com/ianstormtaylor/rework-font-variant)

## License

  MIT
