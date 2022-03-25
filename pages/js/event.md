## Mouse Move
~~~js
function(t) {
  w.x = t.clientX / window.innerWidth,
  w.y = 1 - t.clientY / window.innerHeight
}
~~~

## Scroll
~~~js
let prevComparison = Date.now();
const throttleInterval = 100;

window.onscroll = (env) => {
  const now = Date.now();

  if (now - prevComparison >= throttleInterval) {
    if (document.body.scrollTop + window.innerHeight === document.body.scrollHeight) {
      switchPage();
    }

    prevComparison = now;
  }
}
~~~
