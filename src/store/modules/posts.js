import axios from "axios";

const state = {
    posts: []
};
const getters = {
    allPosts: state => state.posts
};

const actions = {
    fetchPosts ({ commit }) {
        axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        ).then((response) => {
            commit('setPosts', response.data);
        })
    },

};

const mutations = {
    setPosts: (state, posts) => (state.posts = posts),

};

export default {
    state,
    actions,
    getters,
    mutations
}