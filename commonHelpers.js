import{i as d,S as f}from"./assets/vendor-0fc460d7.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function g(t){return fetch(`https://pixabay.com/api/?key=44752364-afb0e3777e04db30cc3f88e82&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}function u(t){n.innerHTML="",c.reset(),d.error({theme:"dark",maxWidth:"432px",position:"topRight",messageLineHeight:"150%",messageSize:"16px",backgroundColor:"rgba(255, 190,190, 1)",progressBarColor:"rgba(181, 27,27, 1)",message:"Sorry, there are no images matching your search query. Please try again!"})}function y(t,a){const o=t.hits.map(({webformatURL:s,largeImageURL:e,tags:r,likes:i,views:m,comments:p,downloads:h})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${e}">
        <img
          class="gallery-image"
          src="${s}"
          alt="${r}"
        />
        <ul class="gallery-info">
          <li class='info-items'>
          <h3 class='info-title'>Likes</h3>
          <p class="value"> ${i}</p>
          </li>
          <li class='info-items'>
          <h3 class='info-title'>Views</h3>
          <p class="value">${m}</p>
          </li>
          <li class='info-items'>
          <h3 class='info-title'>Comments</h3>
          <p class="value">${p}</p>
          </li>
          <li class='info-items'>
          <h3 class='info-title'>Downloads</h3>
         <p class="value"> ${h}</p>
          </li>
        </ul>
      </a>
    </li>
  `).join("");a.insertAdjacentHTML("afterbegin",o)}function L(){let t=`
<span class="loader"></span>
`;c.insertAdjacentHTML("afterend",t)}function b(){let t=document.querySelector(".loader");t&&t.remove()}let l;l=new f(".gallery a",{captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250});const c=document.querySelector(".search-form"),n=document.querySelector(".gallery");c.addEventListener("submit",S);function S(t){if(t.preventDefault(),t.currentTarget.elements.search.value.trim()==="")return u();n.hasChildNodes&&(n.innerHTML="");const o=t.currentTarget.elements.search.value.toLowerCase().trim();L(),g(o).then(s=>{if(s.hits.length===0)throw new Error(u);return s}).then(s=>{y(s,n),l?l.refresh():l=new f(".gallery a",{captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250})}).catch(u).finally(()=>{b(),c.reset()})}console.log(n);
//# sourceMappingURL=commonHelpers.js.map
