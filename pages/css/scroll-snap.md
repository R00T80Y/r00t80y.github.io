~~~scss
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  overflow-x: hidden;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
}

section {
  position: relative;
  width: 100%;
  height: 50vh;
  border: 1px solid #ddd;
  border-top: none;
  scroll-snap-align: start;
}

h1 {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  color: #222;
  font-size: calc(1rem + 3vw);
  text-align: center;
  transform: translateY(-50%);
}
~~~
~~~html
<section>
  <h1>Section One</h1>
</section>
<section>
  <h1>Section Two</h1>
</section>
<section>
  <h1>Section Three</h1>
</section>
<section>
  <h1>Section Four</h1>
</section>
<section>
  <h1>Section Five</h1>
</section>
<section>
  <h1>Section Six</h1>
</section>
<section>
  <h1>Section Seven</h1>
</section>
~~~

## Pollyfill
~~~js
https://www.npmjs.com/package/css-scroll-snap-polyfill/v/0.1.2
~~~

## Hack для flex элементов
~~~scss
/**
 * Fix overflow scroll ignoring margin/padding.
 * @see https://chenhuijing.com/blog/flexbox-and-padding/
 * @see https://itnext.io/horizontal-overflow-with-flexbox-css-64f530495303
 */
.scrollfix::before,
.scrollfix::after {
  content: '';
  display: inline-block;
  flex: 0 0 auto;
  width: 1px;
  margin-left: -1px;
}
~~~
