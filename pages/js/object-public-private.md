## Пример 1
~~~js
const App = (function () {
  // частные
  const name = 'my, oh my';

  // общедоступных
  return {
    getName() {
      return name;
    }
  };
}());

console.log(App.getName()); // "my, oh my"
~~~

## Пример 2
~~~js
function Gadget() {
  // частный
  const name = 'iPod';

  // общедоступная функция
  this.getName = function () {
    return name;
  };
}

Gadget.prototype = (function () {
  // частный член
  const browser = 'Mobile Webkit';

  // общедоступные члены прототипа
  return {
    getBrowser() {
      return browser;
    }
  };
}());

const toy = new Gadget();

// "собственный" привилегированный метод
console.log(toy.getName());

// привилегированный метод прототипа
console.log(toy.getBrowser());

console.log(toy);
~~~
