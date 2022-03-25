## Util.random();
~~~js
const random = (function () {
  let lastIndex;

  function getRandomRange(a, b) {
    let min = Math.ceil(+a);
    let max = Math.floor(+b);

    // eslint-disable-next-line no-unused-expressions
    (min > max) && ([min, max] = [max, min]);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return function (...argsParam) {
    let min;
    let max;
    let index;
    const args = argsParam.slice(0, 2);

    switch (args.length) {
      case 0:
        min = 0;
        max = 100;
        break;
      case 1:
        min = 0;
        max = [...args];
        break;
      case 2:
        [min, max] = [...args];
        break;
      default:
        break;
    }

    min = +min;
    max = +max;

    if (min === max) {
      return min;
    }

    do {
      index = getRandomRange(min, max);
    } while (index === lastIndex);

    lastIndex = index;
    return index;
  };
}());
~~~

~~~js
for (let i = 0; i < 30; i += 1) {
  console.log(random());
}
~~~

