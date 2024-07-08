
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchGetImage } from './js/pixaby-api';
import { onFetchError } from './js/pixaby-api';
import { renderImage } from './js/render-function';
import { renderLoader } from './js/render-function';
import { removeLoader } from './js/render-function';


let lightbox;
lightbox = new SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionDelay: 250,
});

export const searchForm = document.querySelector('.search-form');
export const galleryBox = document.querySelector('.gallery');
// console.log('Fetching images for query:', queryValue);
searchForm.addEventListener('submit', handlerSearchImage);

function handlerSearchImage(evt) {
  evt.preventDefault();
    if (evt.currentTarget.elements.search.value.trim() === '') {
        return onFetchError();
    } else if (galleryBox.hasChildNodes) {
        galleryBox.innerHTML = "";
     }
  const form = evt.currentTarget;
  const queryValue = form.elements.search.value.toLowerCase().trim();
  renderLoader();
    fetchGetImage(queryValue)
        .then(data => { 
            if (data.hits.length === 0) { 
                throw new Error(onFetchError)
            }
            return data
        })
      .then(data => {
        renderImage(data, galleryBox);
      if (lightbox) {
        lightbox.refresh();
      } else {
        lightbox = new SimpleLightbox('.gallery a', {
          captionSelector: 'img',
          captionType: 'attr',
          captionsData: 'alt',
          captionDelay: 250,
        });
      }
    })
      .catch(onFetchError)
      
      .finally(() => {
          removeLoader(),
        searchForm.reset()
      });
}
console.log(galleryBox);
