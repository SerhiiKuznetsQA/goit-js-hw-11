import{S as a}from"./assets/vendor-5af972a3.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const l=document.querySelector(".search-from"),u=document.querySelector(".gallery");l.addEventListener("submit",f);function f(o){if(o.preventDefault(),o.currentTarget.elements.search.value==="")return;const t=o.currentTarget.elements.search.value.toLowerCase().trim();console.log(t),d(t)}function d(o){return fetch(`https://pixabay.com/api/?key=44752364-afb0e3777e04db30cc3f88e82&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(console.log(t),!t.ok)throw new Error(t.status);return t.json()}).then(t=>{console.log(t),u.insertAdjacentHTML("beforeend",m(t))})}function m(o){return o.hits.map(({webformatURL:n,largeImageURL:t,tags:i,likes:e,views:r,comments:s,downloads:c})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${t}">
        <img
          class="gallery-image"
          src="${n}"
          alt="${i}"
        />
        <div class="gallery-info">
          <h3>Likes: ${e}</h3>
          <h3>Views: ${r}</h3>
          <h3>Comments: ${s}</h3>
          <h3>Downloads: ${c}</h3>
        </div>
      </a>
    </li>
  `).join("")}document.addEventListener("DOMContentLoaded",()=>{new a(".gallery a",{captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250})});
//# sourceMappingURL=commonHelpers.js.map
