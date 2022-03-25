## htmlEntities
~~~js
async function onLoaded() {
  let response;
  try {
    response = await fetch('/images/elf-547x720.png');

    if (!response.ok) {
      throw new Error('Сервер вернул отказ', response);
    }

    const myBlob = await response.blob();
    const objectURL = URL.createObjectURL(myBlob);

    const myImage = new Image();
    myImage.src = objectURL;
    myImage.onload = function () {
      const { width } = myImage;
      const { height } = myImage;

      // Эмуляция background-size: cover
      document.querySelector('#app').style.backgroundSize = (width > height) ? '100% auto' : 'auto 100%';
      document.querySelector('#app').style.backgroundImage = `url(${objectURL})`;
    };
  } catch (error) {
    console.error('Возникла проблема c запросом на сервер.');
    console.dir(error, response);
  }
}

onLoaded();
~~~

