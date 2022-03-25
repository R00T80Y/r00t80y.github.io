## Пример как можно сделать copyright в консоле
~~~js
const template = 'background-color:#111; font-size:10px; font-weight: bold; padding:3px 5px; color:';

console.log(
  '%c Author:' +
  '%c r00t80y <nnu17ip1y@yahoo.com>' +

  '%c Homepage:' +
  '%c https://github.com/R00T80Y',

  template + '#555; float: left; width: 24%;',
  template + '#aaa; float: right; width: 76%;',
  template + '#555; float: left; width: 24%;',
  template + '#aaa; float: right; width: 76%;'
);
~~~

