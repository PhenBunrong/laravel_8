/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

 require('./bootstrap');

 window.Vue = require('vue').default;
 

 Vue.component('singleProductBody', require('./components/singleProductBody.vue').default);
 Vue.component('pagination', require('laravel-vue-pagination'));

if (document.getElementById('app')) {
    const app = new Vue({
        el: "#app",
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
 
// if (document.getElementById('test')) {
//     const app = new Vue({
//         el: "#test",
//         data: function(){
//             return{
//                 a: 10,
//                 b: 20,
//                 sum: 0,
//                 div: 0,
//                 sub: 0,
//             }
//         },
//         methods: {
//             calculate: function(){
//                 this.sum = +(this.a) + +(this.b)
//                 this.div = +(this.a) - +(this.b)
//                 this.sub = +(this.a) / +(this.b)
//             }
//         }
//     });
// }
 