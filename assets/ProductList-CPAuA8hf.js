import{r as l}from"./utils-BrQ1k2I1.js";class d{constructor(a,i,s){this.category=a,this.dataSource=i,this.listElement=s}async init(){const a=await this.dataSource.getData(this.category);this.renderList(a)}renderList(a){l(c,this.listElement,a,"beforeend",!0)}}function c(e){var t,r;const a=Number(e.FinalPrice)<Number(e.SuggestedRetailPrice),i=a?(Number(e.SuggestedRetailPrice)-Number(e.FinalPrice)).toFixed(2):null,s=a?Math.round((Number(e.SuggestedRetailPrice)-Number(e.FinalPrice))/Number(e.SuggestedRetailPrice)*100):null,n=((t=e.Images)==null?void 0:t.PrimaryMedium)??e.Image??"fallback.jpg";return`<li class="product-card${a?" product-card--sale":""}">
        <a href="../product_pages/index.html?product=${e.Id}">
            <img src="${n}" alt="${e.Name}">
            <h2 class="card__brand">${((r=e.Brand)==null?void 0:r.Name)??""}</h2>
            <h3 class="card__name">${e.NameWithoutBrand}</h3>
            <div class="product-card__pricing">${a?`<span class="price price--retail">$${Number(e.SuggestedRetailPrice).toFixed(2)}</span> `:""}
            <span class="price price---final">$${Number(e.FinalPrice).toFixed(2)}</span>${a?`<span class="badge badge--sale">Save $${i} (${s}% off)</span>`:""}
          </div>
        </a>
    </li>`}export{d as P};
