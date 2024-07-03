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
          <li>Likes: ${likes}</li>
          <li>Views: ${views}</li>
          <li>Comments: ${comments}</li>
          <li>Downloads: ${downloads}</li>
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
