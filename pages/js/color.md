## Random Colors
~~~js
const getRandomColor = (function () {
  const colors = [
    '#385884',
    '#992626',
    '#7ba13b',
    '#3f77bb',
    '#9753ff'
  ];

  let lastColorIndex;

  function getIndex() {
    return Math.round(Math.random() * (colors.length - 1));
  }

  return function () {
    let colorIndex;
    do {
      colorIndex = getIndex();
    } while (colorIndex === lastColorIndex);

    lastColorIndex = colorIndex;

    return colors[colorIndex];
  };
}());
~~~
~~~js
const items = document.querySelectorAll('section');

for (let i = 0; i < items.length; i += 1) {
  const color = getRandomColor();
  items[i].style.backgroundColor = color;
}
~~~

