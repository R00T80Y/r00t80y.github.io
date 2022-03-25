## Social Buttons
~~~html
<a href="" class="button-social button-social--vk">
  <span class="visually-hidden">
    вконтакте
  </span>
</a>
~~~

focusable="false" - для ie11 чтобы он не выделял картинку
~~~html
<a href="" aria-label="вконтакте" class="button-social button-social--vk">
  <svg aria-hidden="true" focusable="false"></svg>
</a>
~~~

(aria-expanded="false" менять на true если меню открыто)
~~~html
<button aria-controls="primary-navigation" aria-expanded="false">Menu</button>
<nav>
  <ul id="primary-navigation" data-visible="hidden"></ul>
</nav>
~~~
