import { galleryItems } from './gallery-items.js';
// Change code below this line

const markup = galleryItems.map(({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>`).join('');

const galleryList = document.querySelector('.gallery');

galleryList.insertAdjacentHTML("afterbegin", markup);

galleryList.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return
    }

    // ----SimpleLightbox----


    new SimpleLightbox('.gallery a', {
        captionDelay: 250
    });

}


console.log(galleryItems);

