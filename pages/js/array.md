## JSON
~~~js
const browser = {
  "list": [
    "Firefox",
    "Chrome",
    "Opera",
    "Safari",
    "Internet Explorer"
  ],
  "total": 5
};
~~~

## indexOf()
~~~js
browser.list.indexOf("Safari"); // 3
browser.list.indexOf("Chrome"); // 1
browser.list.indexOf("Tor"); // -1
~~~

## filter()
~~~js
browser.list.filter((item) => item.length > 10); // ["Internet Explorer"]
~~~

## sort()
~~~js
browser.list.slice().sort((a, b) => a > b); // ["Chrome","Firefox","Internet Explorer","Opera","Safari"]
~~~

~~~js
browser.list.slice().sort((a, b) => a < b); // ["Safari","Opera","Internet Explorer","Firefox","Chrome"]
~~~

## shift(), pop()
~~~js
browser.list.slice().shift(); // "Firefox"
browser.list.slice().pop(); // "Internet Explorer"
~~~

## toString()
~~~js
browser.list.toString(); // "Firefox,Chrome,Opera,Safari,Internet Explorer"
~~~

## Random
~~~js
const getRandom = (function () {
  let lastIndex;

  return function (...args) {
    if (args.length < 1) return false;
    if (args.length === 1) return args[0];

    let index;

    function getIndex() {
      return Math.round(Math.random() * (args.length - 1));
    }

    do {
      index = getIndex();
    } while (index === lastIndex);

    lastIndex = index;

    return args[index];
  };
}());
~~~
~~~js
for (let i = 0; i < items.length; i += 1) {
  const myArr = [
    '#385884',
    '#992626',
    '#7ba13b',
    '#3f77bb',
    '#9753ff'
  ];

  console.log(getRandom(...myArr));
}
~~~


