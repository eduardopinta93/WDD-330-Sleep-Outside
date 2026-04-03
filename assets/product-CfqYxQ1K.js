import{g as d,s as c,a as s,b as i,l as e}from"./utils-BrQ1k2I1.js";import{P as u}from"./ExternalServices-Dm43AYjg.js";import{u as a}from"./cartIndicator-CG5D-4m8.js";class n{constructor(t,o){this.productId=t,this.dataSource=o,this.product={}}async init(){const t=await this.dataSource.findProductById(this.productId);this.product=t,this.renderProductDetails(),this.setupAddToCartButton()}addProductToCart(){const t=d("so-cart")||[],o=t.find(r=>r.Id===this.product.Id);o?o.quantity=(o.quantity||1)+1:t.push({...this.product,quantity:1}),c("so-cart",t),a(),s(`${this.product.NameWithoutBrand} has been added to your cart!`),animateCartIcon()}setupAddToCartButton(){const t=document.getElementById("addToCart");t&&t.addEventListener("click",()=>{this.addProductToCart()})}renderProductDetails(){var o;const t=document.querySelector("main");t.innerHTML=`
  <section class="product-detail">
    <h3>${this.product.Brand.Name}</h3>
    <h2>${this.product.NameWithoutBrand}</h2>
    <button id="addToCart">Add to Cart</button>
    <img src="${((o=this.product.Images)==null?void 0:o.PrimaryLarge)??this.product.Image??"fallback.jpg"}" alt="${this.product.Name}">
    <p class="product-card__price">$${this.product.FinalPrice}</p>
    <p class="product__color">${this.product.Colors[0].ColorName}</p>
    <div class="product__description">
      ${this.product.DescriptionHtmlSimple}
    </div>
  </section>`}}const p=i("product"),h=new u,l=new n(p,h);async function m(){await e(),a(),l.init()}m();
