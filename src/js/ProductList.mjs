export default class ProductList {
    constructor(category, dataSource, listElement) {
        // This information is passed in to make the class as reusable as possible
        // Defining these things when you use the class will make it very flexible
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }
  
    async init() {
        // the dataSource will return a Promise...so await can be used to resolve it
        const list = await this.dataSource.getData();
        // next, render the list - ** future **
    }
}