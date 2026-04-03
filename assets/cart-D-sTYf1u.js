import{g as i,r as d,s as c,l as u}from"./utils-BrQ1k2I1.js";import{u as o}from"./cartIndicator-CG5D-4m8.js";class h{constructor(t,a,e){this.listElement=t,this.footerElement=a,this.totalElement=e}init(){const t=i("so-cart")||[];this.renderCart(t)}renderCart(t){if(t.length>0){d(this.cartItemTemplate,this.listElement,t,"afterbegin",!0),this.listElement.querySelectorAll(".remove").forEach(e=>{e.addEventListener("click",()=>{const r=e.dataset.id;this.removeItem(r)})}),this.listElement.querySelectorAll(".qty-btn").forEach(e=>{e.addEventListener("click",()=>{const r=e.dataset.id,s=e.dataset.action;this.updateQuantity(r,s)})});const a=t.reduce((e,r)=>e+Number(r.FinalPrice)*(r.quantity||1),0);this.footerElement.classList.remove("hide"),this.totalElement.innerHTML=`Total: $${a.toFixed(2)}`}else this.listElement.innerHTML="<p>Your cart is empty</p>"}cartItemTemplate(t){var e;return`<li class="cart-card divider">
      <a href="#" class="cart-card__image">
        <img src="${((e=t.Images)==null?void 0:e.PrimaryMedium)||t.Image}" alt="${t.Name}" />
      </a>
      <a href="#">
        <h2 class="card__name">${t.Name}</h2>
      </a>
      <p class="cart-card__color">${t.Colors[0].ColorName}</p>
      <p class="cart-card__quantity">
        <button class="qty-btn" data-id="${t.Id}" data-action="decrease">-</button>
        <span>${t.quantity||1}</span>
        <button class="qty-btn" data-id="${t.Id}" data-action="increase">+</button>
      </p>
      <p class="cart-card__price">$${t.FinalPrice}</p>
      <span class="remove" data-id="${t.Id}">X</span> 
    </li>`}removeItem(t){let a=i("so-cart")||[];a=a.filter(e=>e.Id!==t),c("so-cart",a),this.renderCart(a),this.onQuantityChange&&this.onQuantityChange()}updateQuantity(t,a){let e=i("so-cart")||[];const r=e.find(n=>n.Id===t);if(!r)return;const s=r.quantity||1;a==="increase"?r.quantity=s+1:a==="decrease"&&(s<=1?e=e.filter(n=>n.Id!==t):r.quantity=s-1),c("so-cart",e),this.renderCart(e),this.onQuantityChange&&this.onQuantityChange()}}u();o();const m=document.querySelector(".product-list"),p=document.querySelector(".cart-footer"),y=document.querySelector(".cart-total"),l=new h(m,p,y);l.onQuantityChange=()=>o();l.init();
