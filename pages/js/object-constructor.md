~~~js
// Глобальный конструктор
function Sandbox() {
  // преобразовать аргументы в массив
  const args = Array.prototype.slice.call(arguments);
  // последний аргумент - функция обратного вызова
  const callback = args.pop();
  // имена модулей могут передаваться в форме массива
  // или в виде отдельных параметров
  let modules = (args[0] && typeof args[0] === 'string') ? args : args[0];
  let i;

  // проверить, была ли функция вызвана как конструктор
  if (!(this instanceof Sandbox)) {
    return new Sandbox(modules, callback);
  }
  // добавить свойства к объекту `this`, если это необходимо:
  this.a = 1;
  this.b = 2;

  // добавить модули в базовый объект`this`
  // отсутствие аргументов с именами модулей или аргумент со значением “*”
  // предполагает необходимость включения “всех модулей”
  if (!modules || modules === '*') {
    modules = [];
    // eslint-disable-next-line no-restricted-syntax
    for (i in Sandbox.modules) {
      // eslint-disable-next-line no-prototype-builtins
      if (Sandbox.modules.hasOwnProperty(i)) {
        modules.push(i);
      }
    }
  }

  // инициализировать необходимые модули
  for (i = 0; i < modules.length; i += 1) {
    Sandbox.modules[modules[i]](this);
  }

  // вызвать функцию обратного вызова
  callback(this);
}
~~~

~~~js
// добавить свойства к прототипу, если это необходимо
Sandbox.prototype = {
  name: 'My Application',
  version: '1.0',
  getName() {
    return this.name;
  }
};

Sandbox.modules = {};
Sandbox.modules.dom = function (box) {
  box.getElement = function () { };
  box.getStyle = function () { };
  box.foo = 'bar';
};

Sandbox.modules.event = function (box) {
  // при необходимости к прототипу Sandbox можно обратиться так:
  // box.constructor.prototype.m = “mmm”;
  box.attachEvent = function () { };
  box.detachEvent = function () { };
};

Sandbox.modules.ajax = function (box) {
  box.makeRequest = function () { };
  box.getResponse = function () { };
};
~~~

~~~js
// Вызываем конструктор и передаем список модулей от которых
// зависит этот код
Sandbox('event', 'dom', function (box) {
  console.log(box);
});
~~~
