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
  uniqId: function() {
    let date = (Date.now()).toString(36)
    let number = (Math.random()).toString(36).substr(2)
    return date + number
  },

  type: function(data) {
    return Object.prototype.toString.call(data).replace(/^\[object (.+)\]$/, '$1').toLowerCase();
  },

  // DOM
  isCheckbox: function(element) {
    return element instanceof HTMLInputElement
      && element.getAttribute('type') == 'checkbox';

    // if (el.type && el.type === 'checkbox') {}

    // // or even shorter
    // if ((el || {}).type === 'checkbox') {}

    // // or in modern browsers you could use matches()
    // if (el.matches('[type="checkbox"]') {}

  },
  createCheckbox: function(id, name) {
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.value = "";
    if (id) {
      checkbox.id = id;
    }
    if (name) {
      checkbox.name = name;
    }
    document.body.insertAdjacentElement('afterbegin', checkbox);
    // $rootElement.insertAdjacentElement('beforebegin', $checkbox);
    return checkbox;
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
  init: false,
  destroy: false,
  change: false,
};

function Plugin($rootElement, pluginOptions) {

  // id флажка
  let checkboxName = '';

  // Ссылка на флажок
  let $checkbox = undefined;

  // Элементы связанные с флажком
  let $relatedItems = undefined;

  // Если не заданы атрибуты role
  if (!$rootElement.getAttribute('role')) {
    $rootElement.setAttribute('role', 'button');
  }

  // Если не заданы атрибуты tabindex
  if (!$rootElement.getAttribute('tabindex')) {
    $rootElement.setAttribute('tabindex', '0');
  }

  // Если не заданы атрибуты aria-pressed или aria-expanded
  if (!$rootElement.getAttribute('aria-pressed') && !$rootElement.getAttribute('aria-expanded')) {
    $rootElement.setAttribute('aria-pressed', false);
  }

  // Если плагин вызван для флажка(<CHECKBOX>)
  if (Utils.isCheckbox($rootElement)) {
    checkboxName = $rootElement.id || $rootElement.name;
    $checkbox = $rootElement;
    $relatedItems = document.querySelectorAll('[for="' + checkboxName + '"]');
  } else {
    // Если плагин вызван для элемента с атрибутом for например для метки(<LABEL>)
    if ($rootElement.getAttribute('for')) {
      checkboxName = $rootElement.getAttribute('for');
      $checkbox = document.getElementById(checkboxName);

      // Если не найден флажок по атрибуту for
      if (!$checkbox) {
        $checkbox = Utils.createCheckbox(checkboxName, checkboxName);
      }

      $relatedItems = [$rootElement];
    } else {
      checkboxName = Utils.uniqId();
      $checkbox = Utils.createCheckbox(checkboxName, checkboxName);
      $relatedItems = [$rootElement];
    }

    // Проверяем есть ли на флажках атрибут aria-pressed или aria-expanded
    if (!$checkbox.getAttribute('aria-pressed')) {
      $checkbox.setAttribute('aria-pressed', $rootElement.getAttribute('aria-pressed'));
    } else if (!$checkbox.getAttribute('aria-expanded')) {
      $checkbox.setAttribute('aria-expanded', $rootElement.getAttribute('aria-expanded'));
    }

  }

  // Добавляем события
  addEvents();

  // Вызываем событие change для флажков
  $checkbox.dispatchEvent(new Event('change'));

  // Хук init
  Utils.type(pluginOptions.init) === 'function' && pluginOptions.init();

  // Изменяет состояние флажка на противоположное
  function toggleState() {
    $checkbox.checked = !$checkbox.checked;
    $checkbox.dispatchEvent(new Event('change'));
  }

  // Событие: cостояние флажка изменилось
  function onCheckboxChange(event) {

    const $target = event.target;

    let ariaAttributeName = false;

    if ($target.getAttribute('aria-pressed')) {
      ariaAttributeName = 'aria-pressed';
    } else if ($target.getAttribute('aria-expanded')) {
      ariaAttributeName = 'aria-expanded';
    }

    // Задаем aria атрибут(aria-pressed или aria-expanded)
    // Если он был задан в HTML
    if (ariaAttributeName) {
      // Задаем состояние кнопки взависимости от состояния флажка
      $target.setAttribute(ariaAttributeName, $target.checked);

      // Задаем aria атрибут всем меткам(<label>) соединенные с текущим (<checkbox>)
      if (typeof $relatedItems !== 'undefined' && $relatedItems.length) {
        for (let i = 0, l = $relatedItems.length; i < l; ++i) {
          $relatedItems[i].setAttribute(ariaAttributeName, $target.checked);
        }
      }
    }

    // Хук change
    Utils.type(pluginOptions.change) === 'function' && pluginOptions.change();

  }

  // Обработка клавиш при фокусе на флажке
  function onCheckboxKeyDown(event) {
    switch (event.keyCode) {
      case 13: // Кнопка <ENTER>
        event.preventDefault() && event.stopPropagation();
        toggleState();
        break;
      default:
        break;
    }
  }

  // Отменяет переключение фокуса на флажок при клике на метку
  // Переключение фокуса произходит если флажку не задать display: none;
  function onButtonClick(event) {
    event.preventDefault() && event.stopPropagation();
    toggleState();
    return false;
  }

  // Обработка клавиш при фокусе на метке
  function onButtonKeyDown(event) {
    switch (event.keyCode) {
      case 13: // Кнопка <ENTER>
      case 32: // Кнопка <SPACE>
        event.preventDefault() && event.stopPropagation();
        toggleState();
        break;
      default:
        break;
    }
  }

  function addEvents() {
    $checkbox.addEventListener('change', onCheckboxChange);
    $checkbox.addEventListener('keydown', onCheckboxKeyDown);

    if (typeof $relatedItems !== 'undefined' && $relatedItems.length) {
      for (let i = 0, l = $relatedItems.length; i < l; ++i) {
        $relatedItems[i].addEventListener('click', onButtonClick);
        $relatedItems[i].addEventListener('keydown', onButtonKeyDown);
      }
    }
  }

  function removeEvents() {
    $checkbox.removeEventListener('change', onCheckboxChange);
    $checkbox.removeEventListener('keydown', onCheckboxKeyDown);

    if (typeof $relatedItems !== 'undefined' && $relatedItems.length) {
      for (let i = 0, l = $relatedItems.length; i < l; ++i) {
        $relatedItems[i].removeEventListener('click', onButtonClick);
        $relatedItems[i].removeEventListener('keydown', onButtonKeyDown);
      }
    }
  }

  // Public method for destroying a plugin
  function destroy() {
    removeEvents();
    Utils.type(pluginOptions.destroy) === 'function' && pluginOptions.destroy();
    return true;
  }

  return {
    // Public methods
//     get pluginOptions() { return pluginOptions; },
//     destroy,
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
      instances.push(Plugin(nodeList[i], defaultOptions));
      // не пашет Object.assign
//       instances.push(Plugin(nodeList[i], Object.assign({}, defaultOptions, customOptions, {
//         name: 'ToggleButton'
//       })));
    }

    return instances;
  }());
}
