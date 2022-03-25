## Buttons
~~~scss
button {
  border: none;
  border-bottom: 4px solid #000;
  color: #fff;
  padding: 12px 24px 8px;
  font-size: 18px;
  text-transform: uppercase;
  background-color: #000;
  transition: all 0.2s;
  transform: scale3d(1, 1, 1);
  cursor: pointer;
  &:hover, &:active {
    // transition: transform 0.3;
    transform: scale3d(1.05, 1.05, 1);
    // transform: rotate(-20deg);
    background-color: #4c2889;
  }
}
~~~

~~~scss
button {
  display: flex;
  min-width: 96px;
  height: 38px;
  min-height: 38px;
  align-items: center;
  justify-content: center;
  padding: 16px 12px 14px;
  border-width: 0px;
  border-style: none;
  background-color: rgb(88 101 242);
  border-radius: 3px;
  color: rgb(255 255 255);
  cursor: pointer;
  font-family: sans-serif, Whitney, "Helvetica Neue", Helvetica, Arial;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  transition-delay: 0s, 0s;
  transition-duration: 0.17s, 0.17s;
  transition-property: background-color, color;
  transition-timing-function: ease, ease;

  &:hover {
    background-color: #4654ee;
  }
}
~~~

## Fonts
~~~scss
.font {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Helvetica Neue","Helvetica",sans-serif;
}
~~~

## image-block
~~~scss
@mixin image-block($width:100%, $height:100%) {

  display: block;

  width: $width;
  height: $height;
  line-height: 0;

  overflow: hidden;

  img {

    width: 100%;
    object-fit: cover;
    aspect-ratio: 1 / 1;

  }

}
~~~
