import{i as h,S as u}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function d(t){return fetch(`https://pixabay.com/api/?key=44752364-afb0e3777e04db30cc3f88e82&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}function c(t){l.reset(),h.error({theme:"dark",maxWidth:"432px",position:"topRight",messageLineHeight:"150%",messageSize:"16px",backgroundColor:"rgba(255, 190,190, 1)",progressBarColor:"rgba(181, 27,27, 1)",message:"Sorry, there are no images matching your search query. Please try again!"})}function g(t,s){const o=t.hits.map(({webformatURL:a,largeImageURL:e,tags:r,likes:i,views:f,comments:m,downloads:p})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${e}">
        <img
          class="gallery-image"
          src="${a}"
          alt="${r}"
        />
        <ul class="gallery-info">
          <li class='info-items'>
          <h3 class='info-title'>Likes</h3>
          <p class="value"> ${i}</p>
          </li>
          <li class='info-items'>
          <h3 class='info-title'>Views</h3>
          <p class="value">${f}</p>
          </li>
          <li class='info-items'>
          <h3 class='info-title'>Comments</h3>
          <p class="value">${m}</p>
          </li>
          <li class='info-items'>
          <h3 class='info-title'>Downloads</h3>
         <p class="value"> ${p}</p>
          </li>
        </ul>
      </a>
    </li>
  `).join("");s.insertAdjacentHTML("afterbegin",o)}function y(){let t=`
<span class="loader"></span>
`;l.insertAdjacentHTML("afterend",t)}function L(){let t=document.querySelector(".loader");t&&t.remove()}let n;n=new u(".gallery a",{captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250});const l=document.querySelector(".search-form"),b=document.querySelector(".gallery");l.addEventListener("submit",S);function S(t){if(t.preventDefault(),t.currentTarget.elements.search.value.trim()==="")return c();const o=t.currentTarget.elements.search.value.toLowerCase().trim();y(),d(o).then(a=>{if(a.hits.length===0)throw new Error(c);return a}).then(a=>{g(a,b),n?n.refresh():n=new u(".gallery a",{captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250})}).catch(c).finally(()=>{L(),l.reset()})}
//# sourceMappingURL=commonHelpers.js.map
