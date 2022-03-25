## Object.assing
Склеивание объектов(Не копирование) сложный данные передаются по ссылке
~~~js
const options = {
  param: false
};

const defaultOptions = {
  param: false
};

Object.assing({}, defaultOptions, options); // {...defaultOptions, ...options}
~~~

## Object.keys, Object.values
~~~js
const filter = {
  name: 'John',
  age: '20'
};

console.log(Object.keys(filter).join(','));
console.log(Object.values(filter).join(','));
~~~

## Object.entries
~~~js
const browsers = [
  'Firefox', 'Chrome', 'Opera',
  'Safari', 'Internet Explorer'
];

Object.entries(browsers).forEach(([key, value]) => {
  console.log(key, value);
  // 0 Firefox
  // 1 Chrome
  // 2 Opera
  // 3 Safari
  // 4 Internet Explorer
});
~~~
~~~js
const filter = {
  name: 'John',
  age: '20'
};

console.log(
  Object.entries(filter)
    .map((entry) => {
      return entry[0] + ' - ' + entry[1];
    })
    .join(', ')
);
~~~

~~~js
const filter = {
  name: 'John',
  age: '20'
};

for (let item in filter) {
  // Не идет по прототипу
  if (filter.hasOwnProperty(item)) {
    console.log(item)
  }
}
~~~

~~~js
function createData(index) {
  return index ** 2;
}

new Array(4).fill(null).map((_, index) => createData(index));
~~~

## Наследование
~~~js
// Объект от которого будем наследоватся
function Person(firstname, lastname) {
  console.log('Constructor Person');

  this.data = this.data || 'Person Data';
  console.log('this.data', this.data);
  this.first = firstname;
  this.last = lastname;
  this.getName = function () {
    return `${this.first} - ${this.last} + ${this.data}`;
  };
}

Person.prototype.getFirstname = function () {
  return this.first;
};
~~~
~~~js
// Объект куда будем наследовать
function Worker() {
  console.log('Constructor Worker');
  // Вызываем конструктор класса если его не вызвать унаследуется только прототип
  Person.call(this, ...arguments);
  this.data = 'Worker Data';
}
~~~
~~~js
// Наследуем прототип от Person
Util.inherits(Worker, Person);

// После наследования можем разширить наш объект
Worker.prototype.getLastname = function () {
  return this.last;
};
~~~
~~~js
const worker = new Worker('John', 'Smith');

console.log(worker);
console.log(worker.getName());
console.log(worker.getFirstname());
console.log(worker.getLastname());
~~~

## Разширение объекта
~~~js
// Объект от которого будем разширять
function Person(firstname, lastname) {
  console.log('Constructor Person');

  this.data = this.data || 'Person Data';
  this.first = firstname;
  this.last = lastname;
  this.getName = function () {
    return `${this.first} - ${this.last} + ${this.data}`;
  };
}

// Этот метод не попадет в класс который мы будем разширять
Person.prototype.getFirstname = function () {
  return this.first;
};

// Объект который будем расширять
function Worker() {
  console.log('Constructor Worker');
  Person.call(this, ...arguments);
  this.data = 'Worker Data';
}

Worker.prototype.getLastname = function () {
  return this.last;
};
~~~
~~~js
// Расширяем класс Worker(Worker instanceof Person вернет false)
Util.extend(Worker, Person);

const worker = new Worker('John', 'Smith');
console.log(worker);
console.log(worker.getName());
console.log(worker.getLastname());

// Методы прототипа не наследуются(тут будет ошибка)
// console.log(worker.getFirstname());
~~~

## Util.toFlatObject
Не будет работать если ее применять к конструктору
~~~js
const worker = new Worker('John', 'Smith');
const flatWorker = Util.toFlatObject(worker);
console.log(worker);
console.log(flatWorker);

console.log(worker instanceof Worker); // True
console.log(worker instanceof Person); // True

console.log(flatWorker instanceof Worker); // False
console.log(flatWorker instanceof Person); // False
~~~
