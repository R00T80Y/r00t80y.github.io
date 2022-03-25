## Function
~~~js
function Func() {
  this.name = 'Super Func';
}

const myFunc = new Func();

console.dir(myFunc.name, ':', myFunc.constructor.name); // Super Func : Func
console.dir(Func.name, ':', Func.constructor.name); // Func : Function
~~~

## Была ли функция вызвана как конструктор
~~~js
function App() {
  // преобразовать аргументы в массив
  // eslint-disable-next-line prefer-rest-params
  const args = Array.prototype.slice.call(arguments);

  // последний аргумент - функция обратного вызова
  const callback = args.pop();

  // имена модулей могут передаваться в форме массива или в виде отдельных параметров
  const modules = (args[0] && typeof args[0] === 'string') ? args : args[0];

  // проверить, была ли функция вызвана как конструктор
  if (!(this instanceof App)) {
    console.log('Create instance');
    return new App(modules, callback);
  }

  console.log('Instance Loaded');

  return {
    func() {
      console.log('myFunc:', modules, callback);
    }
  };
}

function cb() {
  console.log('callback');
}

// Вызываем без оператора new
const myTest = App(['para1', 'param2'], cb);
myTest.func();
~~~
