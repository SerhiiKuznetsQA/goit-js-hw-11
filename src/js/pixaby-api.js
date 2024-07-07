
import { galleryBox } from "../main";
import { searchForm } from "../main";
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
    // .then(data => {
    //   if (data.hits.length === 0) {
    //     throw new Error(res.status)
    //   }
    //   return data;
    // });
}
export function onFetchError(error) {
  //   console.error('Error fetching images:', error)
    //   searchForm.innerHTML = '';

    searchForm.reset()
    iziToast.error({
    //   messageColor: 'white',
        theme: 'dark',
      maxWidth: '432px',
      position: 'topRight',
      messageLineHeight: '150%',
      messageSize: '16px',
      backgroundColor: 'rgba(255, 190,190, 1)',
      progressBarColor: 'rgba(181, 27,27, 1)',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
}


