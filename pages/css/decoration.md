## Arrow
~~~html
Bottom<span class="arrow"></span>
Top<span class="arrow arrow--top"></span>
Right<span class="arrow arrow--right"></span>
Left<span class="arrow arrow--left"></span>
~~~
~~~scss
.arrow {
  display: inline-block;
  border-top: 6px solid #ccc;
  border-right: 4px solid transparent;
  border-bottom: 0;
  border-left: 4px solid transparent;
  margin-top: -2px;
  margin-left: 8px;
  vertical-align: middle;

  &--top {
    transform: rotate(-180deg);
  }

  &--right {
    transform: rotate(-90deg);
  }

  &--left {
    transform: rotate(90deg);
  }
}
~~~

## Circle
~~~html
Circle<span class="circle"></span>
~~~
~~~scss
.circle {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-top: -2px;
  margin-left: 8px;
  background: #ccc;
  border-radius: 50%;
  vertical-align: middle;
}
~~~
