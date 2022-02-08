const $buttonEmulated = ToggleButton(document.querySelectorAll('.js-button-emulated'), {
  // Plugin options here
});

document.getElementById('burger-toggle-new').addEventListener('change', function(event) {
  event.preventDefault() && event.stopPropagation();

  console.log('Custom Change');
});

for (let i = 0, l = $buttonEmulated.length; i < l; ++i) {
  console.log($buttonEmulated[i]);
}

// for (let i = 0, l = $buttonEmulated.length; i < l; ++i) {
//   $buttonEmulated[i].destroy();
// }
