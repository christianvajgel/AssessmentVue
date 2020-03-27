import axios from "axios";

const state = {
    posts: [],
};
const getters = {
    allPosts: state => state.posts,
    // postById: (state) => (id) => (state.posts = state.posts.filter(p => p.id == id))[0],
    postById: (state) => (id) => (state.posts.filter(p => p.id == id))[0],
};

const actions = {
    fetchPosts({ commit }){
      commit("setPosts");
    },
    getPosts({ commit }) {
        axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        ).then((response) => {
            commit('getPost', response.data);
        });
    },
    addPost({ commit }, new_post){
        const new_index = state.posts.length + 1;
        const response = {
            "userId":new_index,
            "id":1,
            "title":new_post.title,
            "body":new_post.body
        };
        commit('newPost', response);
    },
    deletePost({ commit },id) {
        commit("removePost",id);
    },
    updatePost({ commit }, updPost) {
        commit("updatePost", updPost);
    },
};

const mutations = {
    setPosts: (state) => state.posts,
    getPost: (state, post) => (state.posts = post),
    newPost: (state, post) => state.posts.push(post),
    removePost: (state, id) => (state.posts = state.posts.filter(p => p.id !== id)),
    updatePost: (state, updPost) => {
        const index = state.posts.findIndex(p => p.id === updPost.id);
        if (index !== -1) {
            state.posts.splice(index, 1, updPost);
        }
    }
};

export default {
    state,
    actions,
    getters,
    mutations
}