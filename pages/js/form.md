## Создает форму и сразу ее отправляет
~~~js
const $app = document.getElementById('app');

const myForm = document.createElement('form');
myForm.name = 'myForm';
myForm.action = '/';
myForm.method = 'GET';
myForm.enctype = 'application/x-www-form-urlencoded';

const myInput = document.createElement('input');
myInput.type = 'text';
myInput.setAttribute('value', 'Text Value');
myForm.appendChild(myInput);

const myButton = document.createElement('input');
myButton.type = 'button';
myButton.value = 'Submit Form';
myForm.appendChild(myButton);

// Событие сработает перед отправкой формы
myForm.addEventListener('formdata', (evt) => {
  alert('Form: formData');
});

// Это событие не вызывается если отправлять форму из JS
myForm.addEventListener('submit', (evt) => {
  alert('Form: submit');
});

$app.appendChild(myForm);
myForm.submit();
~~~

~~~js
// HTMLElement
// HTMLInputElement.setCustomValidity
// - HTMLFormElement.setCustomValidity
// - HTMLFormElement.reportValidity()
// HTMLInputElement
~~~
