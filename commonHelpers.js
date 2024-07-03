import{i as y,S as u}from"./assets/vendor-0fc460d7.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function p(r){return fetch(`https://pixabay.com/api/?key=44752364-afb0e3777e04db30cc3f88e82&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).then(o=>{if(o.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return o})}function c(r){f.innerHTML="",y.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}function g(r,a){const o=r.hits.map(({webformatURL:n,largeImageURL:e,tags:t,likes:i,views:m,comments:d,downloads:h})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${e}">
        <img
          class="gallery-image"
          src="${n}"
          alt="${t}"
        />
        <ul class="gallery-info">
          <li>Likes: ${i}</li>
          <li>Views: ${m}</li>
          <li>Comments: ${d}</li>
          <li>Downloads: ${h}</li>
        </ul>
      </a>
    </li>
  `).join("");a.insertAdjacentHTML("afterbegin",o)}function L(){let r=`
<span class="loader"></span>
`;l.insertAdjacentHTML("afterend",r)}function S(){let r=document.querySelector(".loader");r&&r.remove()}let s;s=new u(".gallery a",{captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250});const l=document.querySelector(".search-from"),f=document.querySelector(".gallery");l.addEventListener("submit",b);function b(r){if(r.preventDefault(),r.currentTarget.elements.search.value==="")return c();const o=r.currentTarget.elements.search.value.toLowerCase().trim();L(),p(o).then(n=>{g(n,f),s?s.refresh():s=new u(".gallery a",{captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250})}).catch(c).finally(()=>{S(),l.reset()})}
//# sourceMappingURL=commonHelpers.js.map
