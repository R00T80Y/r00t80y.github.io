## Подсчитываем сколько раз элемент появился на странице
~~~js
const options = {
  // root: null,
  rootMargin: '0px',
  threshold: 0
};

function callback() {
  let intersectionCounter = 0;

  return function(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const elem = entry.target;

        if (entry.intersectionRatio >= 0.75) {
          intersectionCounter += 1;
          elem.innerHTML = intersectionCounter;
        }
      }
    });
    console.log('entries', entries);
    console.log('observer', observer);
  };
}

const observer = new IntersectionObserver(callback(), options);
const target = document.querySelector('#app');
observer.observe(target);

~~~
