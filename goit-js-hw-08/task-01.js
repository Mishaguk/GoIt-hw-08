'use strict'
import images from "./gallery-items.js"; 

const refs = {
    gallery: document.querySelector('.gallery'),
    image: document.createElement('img'),
    lightbox: document.querySelector('.lightbox'),
    btn: document.querySelector('[data-action="close light-box"]'),
    modal: document.querySelector('.lightbox__content'),
    lightboxImage: document.querySelector('.lightbox__image'),
    lightboxButton : document.querySelector('.lightbox__button')
};

const imageLog = ({ preview, original, description }) => 
    `
  <li class="gallery__link"; href=${original};>
    

  <img
    class="gallery__image"
    src=${preview}
    data-source=${original}
    alt=${description}
  />

</li>`

const imageList = images.map(image => imageLog(image))
refs.gallery.insertAdjacentHTML('beforeend', imageList)

const openedModal = () => {
  refs.lightbox.classList.toggle('is-open')

}

const leaveModal = () => {
  refs.lightbox.classList.remove('is-open')
}


const galleryClick = (e) => {
  if (e.target === e.currentTarget) {
    return
  }
  const originalImg = e.target.dataset.source;
  refs.lightboxImage.src = originalImg;
  
  openedModal();

}

  refs.gallery.addEventListener('click', galleryClick)
  refs.lightboxButton.addEventListener('click' , leaveModal)




  
 

 



