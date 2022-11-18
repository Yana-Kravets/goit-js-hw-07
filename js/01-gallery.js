import { galleryItems } from './gallery-items.js';
// Change code below this line

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

const createGalleryCardMarkup = galleryItems.map(({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`).join('');

const galleryList = document.querySelector('.gallery');
galleryList.insertAdjacentHTML("afterbegin", createGalleryCardMarkup);

// Реализация делегирования на div.gallery и получение url большого изображения.

galleryList.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
		return
	}


  // ---- basicLightbox ----

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
 `);

  console.log(instance);

  instance.show();
  
  // Закрытие модального окна по нажатию клавиши Escape. Прослушивание клавиатуры только пока открыто модальное окно

  if (instance.show()) {
    window.addEventListener("keydown", onKeyDown);

    function onKeyDown(event) {
      if (event.key === "Escape") {
        instance.close();
      }
    }
  }
}


// console.log(galleryItems);
