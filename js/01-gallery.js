import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryElements = [];
const images = document.querySelector('.gallery');

galleryItems.forEach(({preview, original, description}) => {
    galleryElements.push(`<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
    </div>`)
});

images.insertAdjacentHTML("beforeend", galleryElements.join(''));

images.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.nodeName === 'IMG') {
        const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}">
    `);
    instance.show();
    }else{
    return;
    }
    //Не робоча функція, запитати//
    // images.addEventListener('keydown', event => {
    //     if (event.key === 'Escape');
    //     return;
    //   });
  });