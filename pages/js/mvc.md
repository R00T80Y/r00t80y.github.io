## Function
~~~js
function Model() {
  function data() {
    return [
      'Firefox', 'Chrome', 'Opera',
      'Safari', 'Internet Explorer'
    ];
  }

  return {
    data
  };
}

function View() {
  function list(data) {
    const $ul = document.createElement('ul');

    data.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      $ul.appendChild(li);
    });

    return $ul;
  }

  return {
    list
  };
}

function Controller() {
  function render() {
    const model = new Model();
    const view = new View();
    const $app = document.getElementById('app');
    $app.appendChild(view.list(model.data()));
  }

  return {
    render
  };
}

const controller = new Controller();
controller.render();
~~~

