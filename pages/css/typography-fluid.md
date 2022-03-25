~~~scss
@use "sass:math";

// Fonts: Fluid Type
//  2rem
//  1.8rem
//  1.5rem
//  1.25rem
//  .875rem

// Настройки
$baseline: 1.5rem;

$minScreen: 20rem;
$maxScreen: 50rem;
$minFont: .8rem;
$maxFont: 1.5rem;

$h1: 2.0rem;
$h2: 1.8rem;
$h3: 1.5rem;
$h4: $h3;
$h5: $h3;
$h6: $h3;

@mixin fluid-type($properties, $min-vw, $max-vw, $min-value, $max-value) {
  & {
    @each $property in $properties {
      #{$property}: $min-value;
    }

    @media screen and (min-width: $min-vw) {
      @each $property in $properties {
        #{$property}: calc(#{$min-value} + #{strip-unit($max-value - $min-value)} * ((100vw - #{$min-vw}) / #{strip-unit($max-vw - $min-vw)}));
      }
    }

    @media screen and (min-width: $max-vw) {
      @each $property in $properties {
        #{$property}: $max-value;
      }
    }
  }
}

@function strip-unit($value) {
  @return math.div($value, $value * 0 + 1);
}

html {
  @include fluid-type(font-size, $minScreen, $maxScreen, $minFont, $maxFont);
}

body {
  line-height: $baseline;
}

p{
  line-height: $baseline;
  margin-bottom: $baseline;
}

h1,
h2,
h3,
h4,
h5,
h6{
  font-weight: 700;
  margin-top: 0;
  margin-bottom: $baseline;
}

h1 {
  font-size: $h1;
  line-height: $h1;
  // margin-top: calc((#{$baseline} - #{$h1}) + #{$baseline});
}

h2 {
  font-size: $h2;
  line-height: $h2;
  // margin-top: calc((#{$baseline} - #{$h2}) + #{$baseline}*2);
}

h3 {
  font-size: $h3;
  line-height: $h3;
  // margin-top: calc((#{$baseline} - #{$h3}) + #{$baseline}*2);
}

h4 {
  font-size: $h4;
  line-height: $h4;
  // margin-top: calc((#{$baseline} - #{$h4}) + #{$baseline}*2);
}

h5 {
  font-size: $h5;
  line-height: $h5;
  // margin-top: calc((#{$baseline} - #{$h5}) + #{$baseline}*2);
}

h6 {
  font-size: $h6;
  line-height: $h6;
  // margin-top: calc((#{$baseline} - #{$h5}) + #{$baseline}*2);
}

~~~

