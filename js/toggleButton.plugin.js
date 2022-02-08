/**
 * @author r00t80y<https://github.com/R00T80Y>
 * @file
 * @since 08-02-2022
 * @updated 08-02-2022
 * @version 0.0.1
 */

// import 'custom-event-polyfill';

// Вынести этот код в utils.js
const Utils = {
  type(data) {
    return Object.prototype.toString.call(data).replace(/^\[object (.+)\]$/, '$1').toLowerCase();
  }
}
// export default Utils;

const defaultOptions = {
  // aria-pressed
  // Атрибут aria-pressed определяет кнопку как кнопку-переключатель.
  // Значение описывает состояние кнопки.

  // aria-expanded
  // Если кнопка управляет группой других элементов, aria-expanded
  // указывает состояние, развернута или свернута управляемая группа
  // в данный момент.

  // https://developer-mozilla-org.translate.goog/en-US/docs/Web/Accessibility/ARIA/Roles/button_role?_x_tr_sl=auto&_x_tr_tl=ru&_x_tr_hl=ru

  // Hooks
  beforeInit: false,
  afterInit: false,

  beforeDestroy: false,
  afterDestroy: false,

  beforeChange: false,
  afterChange: false,
};

function Plugin($element, pluginOptions) {
  Utils.type(pluginOptions.beforeInit) === 'function' && pluginOptions.beforeInit();

  // Флажок для которого вызван плагин
  const $rootCheckbox = $element;

  //
  const checkboxName = $rootCheckbox.name || $rootCheckbox.id;

  // Метки связанные с текущим флажком
  const $labels = document.querySelectorAll('[for="' + checkboxName + '"]');

  //
  addEvents();

  //
  $rootCheckbox.dispatchEvent(new Event('change'));

  //
  Utils.type(pluginOptions.afterInit) === 'function' && pluginOptions.afterInit();

  //
  function toggleChecked() {
    if ($rootCheckbox) {
      $rootCheckbox.checked = !$rootCheckbox.checked;
      $rootCheckbox.dispatchEvent(new Event('change'));
      // $rootCheckbox.dispatchEvent(new CustomEvent('change'));
    }
    // console.log($target);
  }

  // Состояние флажка(<checkbox>) изменилось
  function onChange(event) {
    Utils.type(pluginOptions.beforeChange) === 'function' && pluginOptions.beforeChange();

    const $checkbox = event.target;
    const isChecked = $checkbox.checked;

    let ariaAttribute = false;

    if ($checkbox.getAttribute('aria-pressed')) {
      ariaAttribute = 'aria-pressed';
    } else if ($checkbox.getAttribute('aria-expanded')) {
      ariaAttribute = 'aria-expanded';
    }

    // Задаем aria атрибут(aria-pressed или aria-expanded)
    // Если он был задан в HTML
    if (ariaAttribute) {
      // Задаем состояние кнопки взависимости от состояния флажка
      $checkbox.setAttribute(ariaAttribute, isChecked);

      // Задаем aria атрибут всем меткам(<label>) соединенные с текущим (<checkbox>)
      if ($labels.length) {
        for (let i = 0, l = $labels.length; i < l; ++i) {
          $labels[i].setAttribute(ariaAttribute, isChecked);
        }
      }
    }

    console.log('Checkbox:', event.target.checked);

    Utils.type(pluginOptions.afterChange) === 'function' && pluginOptions.afterChange();
  }

  // Отменяет переключение фокуса на флажку при клике на метку
  // Переключение фокуса произходит если флажку не задать display: none;
  function onMouseClickLabels(event) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();

    toggleChecked();
    return false;
  }

  // Обработка клавиш при фокусе на флажке
  function onKeyDown(event) {
    switch (event.keyCode) {
      case 13: // Кнопка <ENTER>
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();

        toggleChecked();
        break;
      default:
        break;
    }
  }

  // Обработка клавиш при фокусе на метке
  function onKeyDownLabels(event) {
    switch (event.keyCode) {
      case 13: // Кнопка <ENTER>
      case 32: // Кнопка <SPACE>
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();

        toggleChecked();
        break;
      default:
        console.log('Key Press:', event.keyCode);
        break;
    }
  }

  function addEvents() {
    $rootCheckbox.addEventListener('change', onChange);
    $rootCheckbox.addEventListener('keydown', onKeyDown);

    if ($labels.length) {
      for (let i = 0, l = $labels.length; i < l; ++i) {
        $labels[i].addEventListener('click', onMouseClickLabels);
        $labels[i].addEventListener('keydown', onKeyDownLabels);
      }
    }
  }

  function removeEvents() {
    $rootCheckbox.removeEventListener('change', onChange);
    $rootCheckbox.removeEventListener('keydown', onKeyDown);

    if ($labels.length) {
      for (let i = 0, l = $labels.length; i < l; ++i) {
        $labels[i].removeEventListener('click', onMouseClickLabels);
        $labels[i].removeEventListener('keydown', onKeyDownLabels);
      }
    }
  }

  // Public method for destroying a plugin
  function destroy() {
    Utils.type(pluginOptions.beforeDestroy) === 'function' && pluginOptions.beforeDestroy();
    removeEvents();
    Utils.type(pluginOptions.afterDestroy) === 'function' && pluginOptions.afterDestroy();
    return true;
  }

  return {
    // Public methods
    get pluginOptions() { return pluginOptions; },
    destroy,
  }
}

// export default function ToggleButton(element, customOptions) {
function ToggleButton(element, customOptions) {
  const nodeList = [];
  const instances = [];

  return (function init() {
    if (element && element instanceof HTMLElement) {
      nodeList.push(element);
    } else if (element && typeof element === 'string') {
      const elementsList = document.querySelectorAll(element);
      for (let i = 0, l = elementsList.length; i < l; ++i) {
        if (elementsList[i] instanceof HTMLElement) {
          nodeList.push(elementsList[i]);
        }
      }
    } else if (element && element.length) {
      for (let i = 0, l = element.length; i < l; ++i) {
        if (element[i] instanceof HTMLElement) {
          nodeList.push(element[i]);
        }
      }
    }

    for (let i = 0, l = nodeList.length; i < l; ++i) {
      instances.push(Plugin(nodeList[i], Object.assign({}, defaultOptions, customOptions, {
        name: 'ToggleButton'
      })));
    }

    return instances;
  }());
}
