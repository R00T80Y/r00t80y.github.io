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
  },

  // DOM
  isCheckbox(element) {
    return element instanceof HTMLInputElement
      && element.getAttribute('type') == 'checkbox';

    // if (el.type && el.type === 'checkbox') {}

    // // or even shorter
    // if ((el || {}).type === 'checkbox') {}

    // // or in modern browsers you could use matches()
    // if (el.matches('[type="checkbox"]') {}

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

function Plugin($rootElement, pluginOptions) {
  Utils.type(pluginOptions.beforeInit) === 'function' && pluginOptions.beforeInit();

  // Флажок для которого вызван плагин
  const IS_CHECKBOX = Utils.isCheckbox($rootElement);


  //
  const checkboxName = $rootElement.name || $rootElement.id;

  // Метки связанные с текущим флажком
  const $labels = document.querySelectorAll('[for="' + checkboxName + '"]');


  //
  addEvents();

  //
  $rootElement.dispatchEvent(new Event('change'));

  //
  Utils.type(pluginOptions.afterInit) === 'function' && pluginOptions.afterInit();

  function getState() {
    let state = {};

    state.checked = null;

    if (IS_CHECKBOX) {
      state.checked = $rootElement.checked;
    }

    if ($rootElement.getAttribute('aria-pressed')) {
      state.name = 'aria-pressed';
    } else if ($rootElement.getAttribute('aria-expanded')) {
      state.name = 'aria-expanded';
    } else {
      return false;
    }

    state.value = JSON.parse($rootElement.getAttribute(state.name));

    return state;
  }

  function toggleState() {
    const state = getState($rootElement);

    if (IS_CHECKBOX) {
      $rootElement.checked = !$rootElement.checked;
      $rootElement.dispatchEvent(new Event('change'));
    } else {
      changeState($rootElement, !state.value);
      $rootElement.dispatchEvent(new CustomEvent('change'));
    }
  }

  function changeState($element, value) {
    let ariaAttributeName = false;

    if ($element.getAttribute('aria-pressed')) {
      ariaAttributeName = 'aria-pressed';
    } else if ($element.getAttribute('aria-expanded')) {
      ariaAttributeName = 'aria-expanded';
    }

    // Задаем aria атрибут(aria-pressed или aria-expanded)
    // Если он был задан в HTML
    if (ariaAttributeName) {
      // Задаем состояние кнопки взависимости от состояния флажка
      $element.setAttribute(ariaAttributeName, value);

      // Задаем aria атрибут всем меткам(<label>) соединенные с текущим (<checkbox>)
      if ($labels && $labels.length) {
        for (let i = 0, l = $labels.length; i < l; ++i) {
          $labels[i].setAttribute(ariaAttributeName, value);
        }
      }
    }

  }

  // Состояние флажка(<checkbox>) изменилось
  function onChange(event) {

    const $target = event.target;
    const state = getState($target);

    Utils.type(pluginOptions.beforeChange) === 'function' && pluginOptions.beforeChange();

    if (state) {
      if (IS_CHECKBOX) {
        changeState($target, state.checked);
      }
    }

    Utils.type(pluginOptions.afterChange) === 'function' && pluginOptions.afterChange();

  }

  // Отменяет переключение фокуса на флажку при клике на метку
  // Переключение фокуса произходит если флажку не задать display: none;
  function onMouseClickLabels(event) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();

    toggleState();
    return false;
  }

  // Обработка клавиш при фокусе на флажке
  function onKeyDown(event) {
    switch (event.keyCode) {
      case 13: // Кнопка <ENTER>
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();

        toggleState();
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

        toggleState();
        break;
      default:
        console.log('Key Press:', event.keyCode);
        break;
    }
  }

  function addEvents() {
    if (IS_CHECKBOX) {
      $rootElement.addEventListener('change', onChange);
      $rootElement.addEventListener('keydown', onKeyDown);
      if ($labels && $labels.length) {
        for (let i = 0, l = $labels.length; i < l; ++i) {
          $labels[i].addEventListener('click', onMouseClickLabels);
          $labels[i].addEventListener('keydown', onKeyDownLabels);
        }
      }
    } else {
      $rootElement.addEventListener('keydown', onKeyDownLabels);
      $rootElement.addEventListener('click', onMouseClickLabels);
    }
  }

  function removeEvents() {
    $rootElement.removeEventListener('change', onChange);
    if (IS_CHECKBOX) {
      $rootElement.removeEventListener('keydown', onKeyDown);
      if ($labels && $labels.length) {
        for (let i = 0, l = $labels.length; i < l; ++i) {
          $labels[i].removeEventListener('click', onMouseClickLabels);
          $labels[i].removeEventListener('keydown', onKeyDownLabels);
        }
      }
    } else {
      $rootElement.removeEventListener('keydown', onKeyDownLabels);
      $rootElement.removeEventListener('click', onMouseClickLabels);
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
