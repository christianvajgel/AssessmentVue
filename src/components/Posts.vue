<template>
    <div class="container">
        <h1 id="headerPosts">Posts</h1>
        <Create/>
        <div class="posts">
            <div class="cols-sm-4"
                 v-for="post in allPosts"
                 :key="post.id"
                 :id="post.id">
                <b-card
                        :title="post.title"
                        tag="article"
                        class="mb-2 cardStyle">
                    <b-card-text>
                        <router-link tag="p" :to="{ name: 'detailPost', params: { id: post.id } }">
                            <p v-if="post.id === 5" class="post5">{{ post.body }}</p>
                            <p v-else>{{ post.body }}</p>
                        </router-link>
                    </b-card-text>
                    <div>
                        <b-button @click="deletePost(post.id)" class="divButtons" variant="outline-danger"><b-icon-trash></b-icon-trash></b-button>
                        <router-link :to="{ name: 'detailPost', params: { id: post.id } }"><b-button class="divButtons" variant="outline-warning"><b-icon-pencil></b-icon-pencil></b-button></router-link>
                    </div>
                </b-card>
                <br>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    import Create from "@/components/Create";
    export default {
        name: "Posts",
        components: {Create},
        methods: {
            ...mapActions(["getPosts","deletePost"]),
        },
        computed: mapGetters(["allPosts"]),
        created(){
            this.getPosts();
        },
    };
</script>

<style>
    .posts {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 2em;
    }

    .divButtons {
        margin: 5px 5px 45px;
    }

    .cardStyle {
        background-color: #F2F2F2;
    }

    #headerPosts {
        margin-bottom: 25px;
    }

    .post5 {
        background-color: #28a745 !important;
        color: #F7F7F7;
        font-weight: bold;
        border-radius: 10px;
    }
</style>