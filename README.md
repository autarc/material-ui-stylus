material-ui-stylus
==================

This is the Stylus counterpart of the material-ui React/CSS-framework which originally uses Less for the styles.

_Latest Release: [0.5.0][0]_


## Setup

There are multiple options to get the style files:

  a) `npm install material-ui-stylus`
  b) `bower install material-ui-stylus`
  c) Download the master version or clone this repository

Afterwards link the files as a references into your stylus sheet:

```styl
  @import 'node_modules/material-ui-stylus';           // (a)
  // or @import 'bower_components/material-ui-stylus'; // (b)

  // Your styles here
  h1 {
    ...
  }
```

## Usage

The Stylus files work with the original [material-ui][1] React components.

You can customize the default values overriding those in [_custom-variables.styl][2]
or including the some custom styles before loading the material-ui-styles files.

```styl
  $primary-1-color: red;
  @import 'node_modules/material-ui-stylus';

  // Your styles here
  h1 {
    ...
  }
```

## Thanks

Kudos to the folks of [call-em-all][3] for their work on the material-ui framework and
[Giampaolo][4] for his Sass port of the styles.



[0]: https://github.com/autarc/material-ui-stylus/blob/master/CHANGELOG.md
[1]: https://github.com/callemall/material-ui
[2]: https://github.com/autarc/material-ui-stylus/blob/master/src/variables/_custom-variables.styl
[3]: https://github.com/callemall
[4]: https://github.com/gpbl
