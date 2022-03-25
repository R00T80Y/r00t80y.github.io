~~~js
var MYAPP = (MYAPP) || {};

MYAPP.namespace = function (namespaceString) {
  let parts = namespaceString.split('.');
  let parent = MYAPP;
  let i;

  // отбросить начальный префикс – имя глобального объекта
  if (parts[0] === 'MYAPP') {
    parts = parts.slice(1);
  }

  for (i = 0; i < parts.length; i += 1) {
    // создать свойство, если оно отсутствует
    if (typeof parent[parts[i]] === 'undefined') {
      parent[parts[i]] = {};
    }
    parent = parent[parts[i]];
  }

  return parent;
};
~~~

~~~js
// Такая реализация делает допустимыми все следующие варианты использования функции:
// присваивать возвращаемое значение локальной переменной
const module2 = MYAPP.namespace("MYAPP.modules.module2");
module2.getName = function() {
  return 'Name';
}
console.log(module2 === MYAPP.modules.module2); // true
console.log(MYAPP);

// опускать начальный префикс `MYAPP`
MYAPP.namespace("modules.module51");

// создавать глубоко вложенные пространства имен
MYAPP.namespace("once.upon.a.time.there.was.this.long.nested.property");
~~~
