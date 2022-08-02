import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryElements = [];
const images = document.querySelector('.gallery');

galleryItems.forEach(({preview, original, description}) => {
    galleryElements.push(`<li><a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a></li>`)
});

images.insertAdjacentHTML("beforeend", galleryElements.join(''));

const gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });