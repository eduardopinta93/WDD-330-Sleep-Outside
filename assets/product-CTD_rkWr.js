import{g as r,s as d,a}from"./utils-Drz6qPXi.js";import{P as c}from"./ProductData-Dx0C3TkS.js";class s{constructor(t,o){this.productId=t,this.dataSource=o,this.product={}}async init(){const t=await this.dataSource.findProductById(this.productId);this.product=t,this.renderProductDetails(),this.setupAddToCartButton()}addProductToCart(){let t=r("so-cart")||[];t.push(this.product),d("so-cart",t)}addToCartHandler(){this.addProductToCart()}setupAddToCartButton(){document.getElementById("addToCart").addEventListener("click",()=>{this.addProductToCart()})}renderProductDetails(){const t=document.querySelector("main");t.innerHTML=`
    <section class="product-detail">
      <h3>${this.product.Brand.Name}</h3>
      <h2>${this.product.NameWithoutBrand}</h2>
      <img src="${this.product.Image}" alt="${this.product.Name}">
      <p class="product-card__price">$${this.product.FinalPrice}</p>
      <p class="product__color">${this.product.Colors[0].ColorName}</p>
      <div class="product__description">
        ${this.product.DescriptionHtmlSimple}
      </div>
      <button id="addToCart">Add to Cart</button>
    </section>`}}const i=a("product"),e=new c("tents"),u=new s(i,e);u.init();
