// script.js — interactions & petites animations (minified-style)
(()=>{'use strict';
const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
const navToggle=$('.nav-toggle'), nav=$('#nav');
if(navToggle){navToggle.addEventListener('click',()=>{const ex=navToggle.getAttribute('aria-expanded')==='true';navToggle.setAttribute('aria-expanded',String(!ex));nav.classList.toggle('open')});}
const rech=$('#rech'), produits=$$('#produits .product');
if(rech && produits.length){rech.addEventListener('input',e=>{const q=e.target.value.toLowerCase().trim();produits.forEach(li=>{const tags=(li.getAttribute('data-tags')||'').toLowerCase();li.style.display=(!q||tags.includes(q))?'':'none';});});}
$$('button[data-product]').forEach(btn=>btn.addEventListener('click',()=>{const name=btn.getAttribute('data-product');const msg=encodeURIComponent(`Bonjour, je souhaite commander: ${name}\nAcompte 50% via MVola. $MVola : 034 95 565 84 (au nom de Francine).`);window.open('https://wa.me/261349556584?text='+msg,'_blank');}));
// petite animation on-intersect
const obs=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting) e.target.classList.add('in')})},{threshold:.15});
$$('.card,.post,.prod').forEach(el=>obs.observe(el));
})();
