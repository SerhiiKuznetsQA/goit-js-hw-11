import { searchForm } from "../main";





export function renderImage(data, galleryBox) {
  const markup = data.hits
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
        <ul class="gallery-info">
          <li class='info-items'>
          <h3 class='info-title'>Likes</h3>
          <p class="value"> ${likes}</p>
          </li>
          <li class='info-items'>
          <h3 class='info-title'>Views</h3>
          <p class="value">${views}</p>
          </li>
          <li class='info-items'>
          <h3 class='info-title'>Comments</h3>
          <p class="value">${comments}</p>
          </li>
          <li class='info-items'>
          <h3 class='info-title'>Downloads</h3>
         <p class="value"> ${downloads}</p>
          </li>
        </ul>
      </a>
    </li>
  `
    )
    .join('');
  galleryBox.insertAdjacentHTML('afterbegin', markup);
}

export function renderLoader() {
  let spanLoader = `
<span class="loader"></span>
`;
  searchForm.insertAdjacentHTML('afterend', spanLoader);
}

export function removeLoader() {
  let loader = document.querySelector('.loader');
  if (loader) {
    loader.remove();
  }
}
