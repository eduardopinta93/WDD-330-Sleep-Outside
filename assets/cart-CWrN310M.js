import{g as l}from"./utils-Drz6qPXi.js";function i(){const t=l("so-cart")||[],a=document.querySelector(".product-list"),c=document.querySelector(".cart-footer"),e=document.querySelector(".cart-total");if(t.length>0){const o=t.map(r=>d(r));a.innerHTML=o.join("");const s=t.reduce((r,n)=>r+n.FinalPrice,0);c.classList.remove("hide"),e.innerHTML=`Total: $${s.toFixed(2)}`}else a.innerHTML="<p>Your cart is empty</p>"}function d(t){return`<li class="cart-card divider">
    <a href="#" class="cart-card__image">
      <img src="${t.Image}" alt="${t.Name}" />
    </a>
    <a href="#">
      <h2 class="card__name">${t.Name}</h2>
    </a>
    <p class="cart-card__color">${t.Colors[0].ColorName}</p>
    <p class="cart-card__quantity">qty: 1</p>
    <p class="cart-card__price">$${t.FinalPrice}</p>
  </li>`}i();
