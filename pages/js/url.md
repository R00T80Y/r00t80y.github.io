~~~js
const url = new URL(window.location.href);
// const url = new URL('http://localhost/data?get=42');
url.search = new URLSearchParams({
  param1: 'Русские буквы',
  param2: 2
});

console.log(url.hostname); // "localhost"
console.dir(url.toJSON()); // http://localhost:3000/?param1=%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B5+%D0%B1%D1%83%D0%BA%D0%B2%D1%8B&param2=2
~~~
~~~js
const $app = document.getElementById('app');
const $p = document.createElement('p');
$p.innerHTML = `<a href="${url.search.toString()}">link</a>`;
$app.appendChild($p);
~~~
~~~js
const string = '/?title=Русские&body=буквы';
console.log('encode', encodeURIComponent(string)); // %2F%3Ftitle%3D%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B5%26body%3D%D0%B1%D1%83%D0%BA%D0%B2%D1%8B
console.log('encode', encodeURI(string)); // /?title=%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B5&body=%D0%B1%D1%83%D0%BA%D0%B2%D1%8B

~~~
