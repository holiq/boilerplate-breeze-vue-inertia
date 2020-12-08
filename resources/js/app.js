require('./bootstrap');
require('alpinejs');

import { App, plugin } from '@inertiajs/inertia-vue'
import VueMeta from 'vue-meta'
import Vue from 'vue';

Vue.mixin({ methods: { route } });
Vue.use(plugin)
Vue.use(VueMeta)

const el = document.getElementById('app');

new Vue({
    render: h => h(App, {
        props: {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: name => require(`./Pages/${name}`).default,
        },
    }),
}).$mount(el)