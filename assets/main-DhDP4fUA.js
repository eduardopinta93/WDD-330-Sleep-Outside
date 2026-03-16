import{r}from"./utils-Drz6qPXi.js";import{P as s}from"./ProductData-Dx0C3TkS.js";class i{constructor(t,a,e){this.category=t,this.dataSource=a,this.listElement=e}async init(){const t=await this.dataSource.getData();this.renderList(t)}renderList(t){r(this.productCardTemplate,this.listElement,t,"afterbegin",!0)}productCardTemplate(t){return`<li class="product-card">
    <a href="product_pages/?product=${t.Id}">
      <img src="${t.Image}" alt="${t.Name}">
      <h3 class="card__brand">${t.Brand.Name}</h3>
      <h2 class="card__name">${t.NameWithoutBrand}</h2>
      <p class="product-card__price">$${t.FinalPrice}</p>
    </a>
  </li>`}}const c=new s("tents"),n=document.querySelector(".product-list"),d=new i("tents",c,n);d.init();
