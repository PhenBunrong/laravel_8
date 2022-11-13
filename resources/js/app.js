/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

 require('./bootstrap');

 window.Vue = require('vue').default;

// import vuex for comment blog
// const { default:store } = require('./store/learn store/index');
const { default: store } = require('./store/index');
window.vue_store = store;

Vue.component('productSingleBody', require('./components/productComponents/productSingleBody.vue').default);
Vue.component('productDetails', require('./components/productComponents/productDetails.vue').default);
Vue.component('productHeaderCart', require('./components/productComponents/productHeaderCart.vue').default);
Vue.component('cartDetails', require('./components/productComponents/cartDetails.vue').default);
Vue.component('checkOut', require('./components/productComponents/checkOut.vue').default);
Vue.component('invoice', require('./components/productComponents/invoice.vue').default);
Vue.component('banner', require('./components/frontEnd/banner.vue').default);
// Vue.component('categoryProduct', require('./components/productComponents/categoryProduct.vue').default);

Vue.component('singleProductBody', require('./components/test components for learn/singleProductBody.vue').default);
Vue.component('blogList', require('./components/test components for learn/propsByBlog/blogList.vue').default);

Vue.component('pagination', require('laravel-vue-pagination'));

import { mapGetters, mapActions, mapMutations } from 'vuex';
window.mapGetters = mapGetters;
window.mapActions = mapActions;
window.mapMutations = mapMutations;

if (document.getElementById('productList')) {
    const app = new Vue({
        el: "#productList",
        store,
    });
}

// if (document.getElementById('category_product')) {
//     const app = new Vue({
//         el: "#category_product",
//         store,
//     });
// }

if (document.getElementById('productCart')) {
    const app = new Vue({
        el: "#productCart",
        store,
    });
}

if (document.getElementById('productCartDetails')) {
    const app = new Vue({
        el: "#productCartDetails",
        store,
        computed: {
            ...mapGetters([
                'get_sub_total'
            ]),
        }
    });
}

if (document.getElementById('ceckOutBody')) {
    const app = new Vue({
        el: "#ceckOutBody",
        store,
        computed: {
            ...mapGetters([
                'get_sub_total'
            ]),
        }
    });
}

if (document.getElementById('invoiceBody')) {
    const app = new Vue({
        el: "#invoiceBody",
        store,
        computed: {
            ...mapGetters([
                'get_sub_total'
            ]),
        }
    });
}

if (document.getElementById('banner_carousel')){
    const app = new Vue({
        el: "#banner_carousel",
        store,
        computed: {
            // ...mapGetters([
            //     'get_sub_total'
            // ]),
        }
    });
}

if (document.getElementById('application')) {
    const app = new Vue({
        el: "#application",
        //declear store request for comment blog
        // store: store, or
        store,
    
        //declear request form learn Vue POS
        created: function(){
            this.get_latest_product();
         },
         data: function(){
             return{
                 products:{},
                 pos_product_list:[],
                 // pos_total_price: 0,
             }
         },
         methods:{
 
             get_latest_product: function(page=1){
                 $.get('/json/latest-products-json?page='+ page, (res) => {
                     this.products = res;
                 });
             },
 
             search_product: _.debounce(function(key){
                 key.length > 0 ?
                     $.get('/json/search-product-json/6/'+key,(res) => {
                         this.products = res;
                     })
                 :
                     this.get_latest_product();
             },500),
 
             add_product_to_pos_list: function(product){
                 let product_check = this.pos_product_list.find((item)=>item.id === product.id);
                 if(product_check){
                     product_check.qty++;
                 }else{
 
                     let post_product = {
                         id : product.id,
                         name : product.name,
                         image : product.thumb_image,
                         price : product.price,
                         qty : 1,
                     }
                     this.pos_product_list.unshift(post_product);
                 }
                 // this.update_pos_total_price();
             },
 
             remove_post_product: function(product){
                 this.pos_product_list = this.pos_product_list.filter((item)=>item.id !== product.id);
                 // this.update_pos_total_price();
             },
 
             update_pos_qty: function(product,qty){
                 let check_product = this.pos_product_list.find((item)=>item.id === product.id);
                 check_product.qty = qty;
                 // this.update_pos_total_price();
             },
 
             // update_pos_total_price: function(){
             //     this.pos_total_price = this.pos_product_list.reduce((total,product)=>{
             //         return total + (product.price * product.qty);
             //     },0);
             // }
         },
 
         //បានគណនា
         computed: {
             // a computed getter
             get_pos_total_price: function(){
                 this.pos_total_price = this.pos_product_list.reduce((total,product)=>{
                     return total + (product.price * product.qty);
                 },0);
 
                 return this.pos_total_price;
             }
         }
     });
}