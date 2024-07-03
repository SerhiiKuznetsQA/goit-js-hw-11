
import {galleryBox } from "../main";
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
export function fetchGetImage(query) {
  const API_KEY = '44752364-afb0e3777e04db30cc3f88e82';

  return fetch(
    `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(res => {
      // console.log(res);
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        throw new Error(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }
      return data;
    });
}
export function onFetchError(error) {
  //   console.error('Error fetching images:', error)
  galleryBox.innerHTML = '';
  iziToast.error({
    title: 'Error',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
  });
}


