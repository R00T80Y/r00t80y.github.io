~~~js
getHours():getMinutes(), getDate() getMonthDeclination(), (new Date()).getFullYear()
~~~

~~~js
getMonth() getDate(), (new Date()).getFullYear()
~~~

~~~js
getMonth().slice(0, 3) getDate(), (new Date()).getFullYear()
~~~

~~~js
(new Date()).toLocaleDateString()
~~~


## Helper
~~~js
import {
  getHours, getMinutes,
  getDate, getMonth, getMonthDeclination
} from './helper/date';
~~~

~~~js
export function getDate() {
  let day = (new Date()).getDate();

  if (day < 10) {
    day = `0${day}`;
  }

  return day;
}

export function getMinutes() {
  let minutes = (new Date()).getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return minutes;
}

export function getHours() {
  let hours = (new Date()).getHours();

  if (hours < 10) {
    hours = `0${hours}`;
  }

  return hours;
}

export function getMonth() {
  const date = new Date();

  const month = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
  ];

  return month[date.getMonth()];
}

export function getMonthDeclination() {
  const date = new Date();

  const month = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря'
  ];

  return month[date.getMonth()];
}
~~~
