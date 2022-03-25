## @mixin flex-gap
~~~html
<div class="flex debug-colors-3">
  <div class="flex__item"><div class="content">1</div></div>
  <div class="flex__item"><div class="content">2 Очень много текста, чтобы блок стал больше</div></div>
  <div class="flex__item"><div class="content">3</div></div>
  <div class="flex__item"><div class="content">4</div></div>
  <div class="flex__item"><div class="content">5</div></div>
</div>
~~~
### Слева
~~~scss
.flex {
  @include flex-gap(8px);
}
~~~
### Справа
~~~scss
.flex {
  @include flex-gap(8px);

  justify-content: flex-end;
}
~~~
### По центру
~~~scss
.flex {
  @include flex-gap(8px);

  justify-content: center;
}
~~~
### По ширине
~~~scss
.flex {
  @include flex-gap(8px);

  & > * {
    flex-grow: 1;
    flex-shrink: 1;
  }
}
~~~
### Две колонки
~~~scss
@mixin flex-column-2($indent:16px) {
  @include flex-gap($indent);

  flex-wrap: wrap;

  & > * {
    width: 50%;
    flex-grow: 0;
    flex-shrink: 0;
  }
}

.flex {
  @include flex-column-2(8px);
}
~~~
### Три колонки
~~~scss
@mixin flex-column-3($indent:16px) {
  @include flex-gap($indent);

  flex-wrap: wrap;

  & > * {
    width: calc(100% / 3);
    flex-grow: 0;
    flex-shrink: 0;
  }
}

.flex {
  @include flex-column-3(8px);
}

~~~
