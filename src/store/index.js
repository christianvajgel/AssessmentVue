import Vuex from "vuex";
import Vue from "vue";
import posts from "./modules/posts"

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        posts
    }
});
