// import "./partials/js/pixaby-api"
// import "./partials/js/render-function"
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";



const searchForm = document.querySelector('.search-from');
const galleryBox = document.querySelector(".gallery")
// const creatMarkup = (liArr)=> liArr.map(renderImage).join("")
searchForm.addEventListener('submit', handlerSearchImage);

        
function handlerSearchImage(evt) { 
    evt.preventDefault()
    if (evt.currentTarget.elements.search.value === '') { 
        return
    }
    const form = evt.currentTarget
    const queryValue = form.elements.search.value.toLowerCase().trim()
    console.log(queryValue);
    fetchgetImage(queryValue)

}

function fetchgetImage(query) { 
    const API_KEY = '44752364-afb0e3777e04db30cc3f88e82'

    return fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`).then((res) => { 
        console.log(res);
        if (!res.ok) { 
            throw new Error(res.status)
        }
        return res.json()
    }).then((data) => {
        console.log(data);
        galleryBox.insertAdjacentHTML("beforeend", renderImage(data))
      
    })
}
// fetchgetImage('yellow+flowers').then(data => renderImage(data))




function renderImage(data){
 return data.hits
   .map(
     ({
       webformatURL,
       largeImageURL,
       tags,
       likes,
       views,
       comments,
       downloads,
     }) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img
          class="gallery-image"
          src="${webformatURL}"
          alt="${tags}"
        />
        <div class="gallery-info">
          <h3>Likes: ${likes}</h3>
          <h3>Views: ${views}</h3>
          <h3>Comments: ${comments}</h3>
          <h3>Downloads: ${downloads}</h3>
        </div>
      </a>
    </li>
  `
   ).join('');
}


document.addEventListener('DOMContentLoaded', () => {
  const lightbox = new SimpleLightbox('.gallery a', {
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionDelay: 250,
  });
});


