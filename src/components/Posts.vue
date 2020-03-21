<template>
    <div class="container">
        <h1 id="headerPosts">Posts</h1>
        <div class="container" style="text-align: right">
            <router-link to="create"><b-button id="buttonNewPost" variant="outline-success"><b-icon-plus></b-icon-plus></b-button></router-link>
        </div>
        <div class="posts">
            <div class="cols-sm-4" v-for="post in allPosts"
                 :key="post.id">
                <b-card
                        :title="post.title"
                        tag="article"
                        style="max-width: 15rem; max-height: 30rem"
                        class="mb-2 cardStyle">
                    <b-card-text>
                        {{ post.body }}
                    </b-card-text>

                    <div>
                        <router-link to="create"><b-button class="divButtons" variant="outline-danger"><b-icon-trash></b-icon-trash></b-button></router-link>
                        <router-link to="create"><b-button class="divButtons" variant="outline-warning"><b-icon-pencil></b-icon-pencil></b-button></router-link>
                    </div>
                </b-card>



                <br>

            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    export default {
        name: "Posts",
        methods: {
            ...mapActions(["fetchPosts"]),
        },
        computed: mapGetters(["allPosts"]),
        created(){
            this.fetchPosts();
        }
    };
</script>

<style>
    .posts {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 2em;
    }

    .divButtons {
        margin: 5px;
    }

    .cardStyle {
        background-color: #F2F2F2;
    }

    #headerPosts {
        margin-bottom: 25px;
    }

    #buttonNewPost {
        margin-bottom: 25px;
    }
</style>