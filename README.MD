# Avalanche CSS grid system

**Superclean, powerful, responsive, Sass-based, BEM-syntax CSS grid system**

## Why use Avalanche?

- No bloat. Only create the selectors you'll actually use
- No duplication. 1/2 == 2/4 so why create two selectors?
- No floats. No clears. No .last
- Flexible, configurable naming conventions
- Nesting to infinity and beyond
- Real-world breakpoint naming. 'thumb', 'handheld' and 'desk'; not 'xs', 'md' and 'xl'
- Integrated media query mixin. Connect your media queries to your grid breakpoints

## Demo

View <a href="http://colourgarden.net/avalanche/">the demo</a> to see Avalanche in action!

## Installation

1. Import `_avalanche.scss` to your project via Bower, NPM or manually copying to vendor folder (`@import "vendor/avalanche"`)
2. Override settings to fit your requirements or use the defaults
3. Compile!

### NPM

`npm install --save avalanche-css`

### Bower

`bower install --save avalanche-css`

## Usage

Example of a two column, responsive, centered grid. All grid layout classes and responsive width classes are modifiers.

```
<div class="grid grid--center">
  <div class="3/4 1/2--thumb grid__cell"></div>
  <div class="1/4 1/2--thumb grid__cell"></div>
</div>
```

## Settings

**`$av-namespace`**
Global prefix for layout and cell class names. Default: `grid`.

**`$av-element-name`**
Element (in a BEM context) or grid cell name. Default: `cell`.

**`$av-element-class-chain`**
Chain characters/separator between BEM block and element. Default: `__`.

**`$av-modifier-class-chain`**
Chain characters/separator between BEM block and modifier. Default: `--`.

**`$av-breakpoint-class-chain`**
Chain characters/separator between width class and breakpoint. Default: `--`.

**`$av-gutter`**
Gutter width between cells. Default: `20px`.

**`$av-width-class-namespace`**
Prefix for width class names. Default: `''`.

**`$av-width-class-style`**
Naming style of width classes. Default: `'fraction'`. Options: `fraction` (1/2, 3/4 etc), `percentage` (25, 50 etc), `fragment` (1-of-3, 4-of-5 etc).
*N.B. If using percentage then `$av-width-class-namespace` above cannot be null. Avalanche escapes leading integers for fraction and fragment naming styles but this isn't possible with percentage style as Sass attempts to escape the whole number (e.g. 50 instead of just 5 or 30 instead of just 3) so fails*.

**`$av-widths`**
Sass list of width denominator values (when expressed as a fraction). For example, 2 produces 1/2 width class, 3 produces 1/3 and 2/3 width classes etc. Default: `( 2, 3, 4 )`.
*N.B. This setting has a large impact on the size of your compiled CSS. Avoid bloat by inputting just the numbers you'll use.*

**`$av-enable-responsive`**
Enable/disable the inclusion of responsive width classes. With this enabled, class names (for denominators set above) will be created for each of your breakpoint aliases (set below). Default: `true`.

**`$av-breakpoints`**
Sass map of responsive breakpoint aliases and associated media queries (in key-value pairs).
*N.B. This setting has a large impact on the size of your compiled CSS. Avoid bloat by inputting just the breakpoints you'll use.*
Default:
```
(
  "thumb":            "screen and (max-width: 499px)",
  "handheld":         "screen and (min-width: 500px) and (max-width: 800px)",
  "handheld-and-up":  "screen and (min-width: 500px)",
  "pocket":           "screen and (max-width: 800px)",
  "lap":              "screen and (min-width: 801px) and (max-width: 1024px)",
  "lap-and-up":       "screen and (min-width: 801px)",
  "portable":         "screen and (max-width: 1024px)",
  "desk":             "screen and (min-width: 1025px)",
  "widescreen":       "screen and (min-width: 1160px)",
  "retina":           "screen and (-webkit-min-device-pixel-ratio: 2), screen and (min-resolution: 192dpi), screen and (min-resolution: 2dppx)"
)
```

## Grid layouts

Apply as modifier classes to your base `grid` element. For example; `<div class="grid grid--center">`.

All optionable grid layouts listed below are switched off by default. Set to `true` to enable.

**`$av-enable-grid-center`**
All cells are horizontally centered within the container.

**`$av-enable-grid-cell-center`**
Center an individual grid cell within the container.
*N.B. Class should be applied to an individual cell, not the grid container. For example; `<div class="grid__cell grid__cell--center">`.*

**`$av-enable-grid-right`**
All cells are horizontally aligned to the right within the container.

**`$av-enable-grid-middle`**
All cells are vertically centered within in the container.

**`$av-enable-grid-bottom`**
All cells are vertically aligned to the bottom of the container.

**`$av-enable-grid-flush`**
Gutters removed between cells.

**`$av-enable-grid-tiny`**
Gutters between cells set to a quarter of the global gutter value. Default: `5px`.

**`$av-enable-grid-small`**
Gutters between cells set to half of the global gutter value. Default: `10px`.

**`$av-enable-grid-large`**
Gutters between cells set to double the global gutter value. Default: `40px`.

**`$av-enable-grid-huge`**
Gutters between cells set to quadruple the global gutter value. Default: `80px`.

**`$av-enable-grid-auto`**
All cells take up an unspecified width set by their content.

**`$av-enable-grid-rev`**
Grid cells are displayed in the opposite of their source order.

## Media query

Avalanche includes a media query mixin that makes use of the breakpoint aliases you set. This enables better coupling between your grid and other responsive content items. Usage as follows.

```
@include av-mq(pocket){
  .content-item{
    /* responsive CSS */
  }
}
```

## Browser support

All modern browsers are supported and Internet Explorer from IE9 upwards. If IE8 support is required then all that is needed is a pixel-value to be set for `font-size` on `.grid__cell`. This is due to IE8 not supporting rem units. Use of a 'rem-to-px' check during build is recommended.

## Contributing

When issuing a pull request to improve this project, please:

1. Rigourously comment your code, particularly where new variables are introduced or manipulated
2. Ensure your work passes the stylelint linter ([sample gulpfile](https://gist.github.com/colourgarden/e9f82816db3f971f9da73053b0eb83af))
3. Be as descriptive as possible in your commit message

## Questions

If you have any questions or need some help then feel free to tweet me at [@colourgarden](http://twitter.com/colourgarden) or [open an issue](https://github.com/colourgarden/avalanche/issues/new).
