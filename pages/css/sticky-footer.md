## Flex
~~~scss
html,
body {
  min-height: 100vh;
}

.site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: stretch;

  &__main {
    flex-grow: 1;
  }

  &__footer {
    flex-shrink: 0;
  }
}
~~~
~~~html
<div class="site">
  <div class="site__main"></div>
  <div class="site__footer"></div>
</div>
~~~

