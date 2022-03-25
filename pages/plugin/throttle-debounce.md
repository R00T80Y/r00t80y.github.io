~~~js
import { throttle, debounce } from 'throttle-debounce';
~~~
~~~js
// с интервалом 1000ms
const throttleFunc = throttle(1000, false, (num) => {
  console.log(num);
});
~~~
~~~js
// в конце через 1000ms
const debounceFunc = debounce(1000, false, (num) => {
  console.log(num);
});
~~~
~~~js
window.addEventListener('resize', (evt) => {
  throttleFunc(1);
  debounceFunc(2);
}, true);
~~~
