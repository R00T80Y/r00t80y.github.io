## Шаб­лон 1: шаблон по умолчанию
~~~js
// родительский конструктор
function Parent(name) {
  this.name = name || 'Adam';
  this.buy = function () {
    return `Function Buy: ${this.name}`;
  };
}

// добавление дополнительной функциональности в прототип
Parent.prototype.say = function () {
  return this.name;
};
~~~
~~~js
// пустой дочерний конструктор
function Child(name) { }

function inherit(ChildObj, ParentObj) {
  // eslint-disable-next-line no-param-reassign
  ChildObj.prototype = new ParentObj();
}

// здесь происходит магия наследования
inherit(Child, Parent);
console.log(Child);
~~~

## Шаб­лон №2: заимствование конструктора
~~~js
// При таком подходе наследуются только свойства, добавляемые внутри
// родительского конструктора. Но свойства, добавленные в прототип, не
// наследуются.
function Child() {
  // eslint-disable-next-line prefer-rest-params
  Parent.apply(this, arguments);
}

const myChild = new Child('Child');
console.log(myChild, myChild.buy());
~~~
~~~js
// Множественное наследование
// при заимствовании конструкторов
function Cat() {
  this.legs = 4;
  this.say = function () {
    return 'meaowww';
  }
}
function Bird() {
  this.wings = 2;
  this.fly = true;
}
function CatWings() {
  Cat.apply(this);
  Bird.apply(this);
}
const jane = new CatWings();
console.dir(jane);
~~~
~~~js
// родительский конструктор
function Parent(name) {
  this.name = name || 'Adam';
}
// добавление дополнительной функциональности в прототип
Parent.prototype.say = function () {
  return this.name;
};

// дочерний конструктор
function Child(name) {
  // eslint-disable-next-line prefer-rest-params
  Parent.apply(this, arguments);
}
Child.prototype = new Parent();

const kid = new Child('Patrick');
Parent.prototype.buy = function () {
  return `Buy: ${this.name}`;
};

console.log(kid);
console.log(kid.name); // 'Patrick'
console.log(kid.say()); // 'Patrick'
delete kid.name;
console.log(kid.say()); // 'Adam'
~~~
## Нужно сравнить с другим примером наследования(babel?)
Тут parent конструктор не вызывается копируется только прототип
~~~js
function inherit(C, P) {
  const F = function () { };
  F.prototype = P.prototype;
  C.prototype = new F();
}

// предок, потомок, наследование
function Parent() {
  console.log('Constructor Parent');
  this.name = 'Parent Name';
}

Parent.prototype.say = function () {
  return this.name;
};

function Child() {
  console.log('Constructor Child');
  this.name = 'Child Name';
}

inherit(Child, Parent);



console.log('Test');
// проверка
const kid = new Child();
console.log(kid);
console.log(kid.constructor.name); // 'Parent'
console.log(kid.constructor === Parent); // true
console.log(kid.say());
~~~
## Как-то странно работает(babel?)
~~~js
function Parent() {
  console.log('Constructor Parent');
  this.param = 'Parent Name';
}

Parent.prototype.func1 = function () {
  return this.param;
};

const child = Object.create(Parent, {
  age: { value: 2 }
});

console.log(child);
console.log(child.hasOwnProperty('age')); // true
console.log('Typeof:', typeof child.func1);
console.log(child.constructor.name); // 'Parent'
console.log(child.constructor === Parent); // true
~~~
