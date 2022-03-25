## Node
~~~js
const $app = document.getElementById('app');

// Если внутри div будут пробелы вернет 1
console.log($app.childNodes.length);

// Если внутри div будут пробелы вернет true
console.log($app.hasChildNodes());

// Еще одна проверка но пробуем удалить пробелы
console.log(!!$app.textContent.trim());
~~~

## Create Element
~~~js
// Заполняем app элементами
const element = document.getElementById('app'); // ul, nav
const fragment = document.createDocumentFragment();
const browsers = [
  'Firefox', 'Chrome', 'Opera',
  'Safari', 'Internet Explorer'
];

browsers.forEach((browser) => {
  const li = document.createElement('li');
  li.textContent = browser;
  fragment.appendChild(li);
});

element.appendChild(fragment);
~~~

## List Render
~~~js
/*
 * List
 */
function renderList(tag = 'ul', list = [], cb = false) {
  const $list = document.createElement(tag);

  for (let index = 0, l = list.length; index < l; index += 1) {
    const $item = document.createElement('li');
    if (cb !== false) {
      $item.innerHTML = cb(list[index], index);
    } else {
      $item.innerText = list[index];
    }
    $list.appendChild($item);
  }

  return $list;
}

/*
 * const $app = document.getElementById('app');
 * $app.appendChild(renderUnorderedList([0, 1, 2, 3, 4, 5], (item) => `<i>${item}</i>`));
 */
function renderUnorderedList(list, cb) {
  return renderList('ul', list, cb);
}

/*
 * const $app = document.getElementById('app');
 * $app.appendChild(renderOrderedList([0, 1, 2, 3, 4, 5], (item) => `<i>${item}</i>`));
 */
function renderOrderedList(list, cb) {
  return renderList('ol', list, cb);
}

export {
  renderUnorderedList,
  renderOrderedList
};
~~~

