const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    userSearch: '',
    showCart: false,
    bakUrl: '/getBasket.json',
    catalogUrl: '/catalogData.json',
    products: [],
    bakItems: [],
    searchProd: [],
    imgCatalog: 'https://via.placeholder.com/200x150',
    imgCart: 'https://via.placeholder.com/50x100'
  },
  methods: {
    getJson(url) {
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        })
    },
    addProduct(product) {
      this.getJson(`${API}/addToBasket.json`)
        .then(data => {
          if (data.result === 1) {
            let find = this.bakItems.find(el => el.id_product === product.id_product);
            if (find) {
              find.quantity++;
            } else {
              let prod = Object.assign({ quantity: 1 }, product);
              this.bakItems.push(prod)
            }
          } else {
            alert('Error');
          }
        })
    },
    remove(item) {
      this.getJson(`${API}/deleteFromBasket.json`)
        .then(data => {
          if (data.result === 1) {
            if (item.quantity > 1) {
              item.quantity--;
            } else {
              this.bakItems.splice(this.bakItems.indexOf(item), 1)
            }
          }
        })
    },
    filter() {
      let regexp = new RegExp(this.userSearch, 'i');
      this.searchProd = this.products.filter(el => regexp.test(el.product_name));
    }
  },
  mounted() {
    //this.getJson(`${API + this.bakUrl}`)
    //  .then(data => {
    //    for (let elem of data.contents) {
    //      this.bakItems.push(elem);
    //    }
    //  });
    this.getJson(`${API + this.catalogUrl}`)
      .then(data => {
        for (let elem of data) {
          this.products.push(elem);
          this.searchProd.push(elem);
        }
      });
  }
})

