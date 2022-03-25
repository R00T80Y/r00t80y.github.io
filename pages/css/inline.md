~~~html
<div class="container">
  <div class="container__item item item--left">1</div>
  <div class="container__item item item--middle">2</div>
  <div class="container__item item item--right">3</div>
</div>
~~~

~~~scss
.container {
  position: relative;
  overflow: hidden;
  width: 100%;
  font-size: 0;

  &__item {
    display: inline-block;
    padding: 0.5rem;
    font-size: 1rem;
  }
}
~~~

## 20%, 60%, 20%
~~~scss
.item {
  &--left {
    width: 20%;
  }

  &--middle {
    width: 60%;
  }

  &--right {
    width: 20%;
  }
}
~~~
> {"src":"/demo/css-inline-1.html","height":"100"}

## 200px, %
~~~scss
.item {
  &--left {
    width: 200px;
  }

  &--right {
    width: calc(100% - 200px);
  }
}
~~~
> {"src":"/demo/css-inline-2.html","height":"100"}

## 200px, %, 200px
~~~scss
.item {
  &--left {
    width: 200px;
  }

  &--middle {
    width: calc(100% - 400px);
  }

  &--right {
    width: 200px;
  }
}
~~~
> {"src":"/demo/css-inline-3.html","height":"100"}
