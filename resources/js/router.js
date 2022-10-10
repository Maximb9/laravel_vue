import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",

    routes: [
        {
            path: '/people', component: function() {return import('./components/Person/Index')},
            name: 'person.index',
        }
    ]
})
