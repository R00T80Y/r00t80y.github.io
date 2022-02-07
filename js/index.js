// import 'custom-event-polyfill';

const $buttons = document.querySelectorAll('.button-emulated');

for (let i = 0, l = $buttons.length; i < l; ++i) {

  // Для теста выводим состояние checkbox
  $buttons[i].addEventListener('change', function (event) {
    event.target.setAttribute('aria-pressed', event.target.checked);

    const $labels = document.querySelectorAll('[for="' + event.target.id + '"]')
    for (let i = 0, l = $labels.length; i < l; ++i) {
      $labels[i].setAttribute('aria-pressed', event.target.checked);
    }

    console.log('Checkbox:', event.target.checked);
  });

  // Отменяет переключение фокуса на checkbox при клике на label
  if ($buttons[i].tagName === 'LABEL') {
    $buttons[i].addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();

      const inputId = event.target.getAttribute('for');
      const $input = document.getElementById(inputId);

      $input.checked = ($input.checked === true) ? false : true;
      $input.dispatchEvent(new Event('change'));
      // $input.dispatchEvent(new CustomEvent('change'));

      // console.log('Focus:', document.activeElement);
      return false;
    });
  }

  $buttons[i].addEventListener('keydown', function (event) {
    const $target = event.target;

    switch (event.keyCode) {
      case 13:
      case 32:
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();

        $target.checked = ($target.checked === true) ? false : true;
        $target.dispatchEvent(new Event('change'));
        // $input.dispatchEvent(new CustomEvent('change'));
        // console.log($target);
        break;
      default:
        console.log('Key Press:', event.keyCode);
        break;
    }

  });
}
