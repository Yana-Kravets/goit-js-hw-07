import { galleryItems } from './gallery-items.js';
// Change code below this line


// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

const galleryList = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) => 
 `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" loading="lazy" src="${preview}" alt="${description}" />
   </a>
</li>`
).join('');

galleryList.insertAdjacentHTML('afterbegin', markup);

// -- simplelightbox -- 


galleryList.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
		return
	}
}

let gallery = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });

    gallery.on('show.simplelightbox');

console.log(galleryItems);






