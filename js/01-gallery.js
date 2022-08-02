import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryElements = galleryItems.map(({preview, original, description}) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
    </div>`
}).join('');

gallery.insertAdjacentHTML("afterbegin", galleryElements);


