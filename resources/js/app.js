import Vue from "vue";
import router from "./router";
import Index from "./components";

require('./bootstrap');

const app = new Vue({
    el: '#app',

    components: {
        Index
    },

    router

})
