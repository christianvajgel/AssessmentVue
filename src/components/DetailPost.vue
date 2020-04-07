<template>
    <div v-if="postById(id)">
        <div class="titleDiv container">
            <router-link to="/" id="backIconLink"><b-icon-arrow-left-short id="backIcon"></b-icon-arrow-left-short></router-link>
            <h1 class="titlePage">Post Details #{{ postById(id).id }}</h1>
        </div>
        <br>
        <b-card
                :title="postById(id).title"
                tag="article"
                class="mb-2 cardStyle container">
            <b-card-text>
                {{ postById(id).body }}
            </b-card-text>
            <div>
                <b-button @click="edit" class="divButtonsPostDetails" variant="outline-warning"><b-icon-pencil></b-icon-pencil></b-button>
                <router-view></router-view>
            </div>
        </b-card>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    export default {
        name: "DetailPost",
        data: function () {
            return {
                id: this.$route.params.id,
            }
        },
        computed: mapGetters(["postById"]),
        methods: {
            edit() {
                this.$router.push({ name: 'edit-post', params: { id: this.id } });
            }
        },
    }
</script>

<style>
    .text_inputBox {
        font-weight: bold;
        text-align: left !important;
    }

    .postEditionMainDiv {
        display: inline-flex !important;
    }

    .divButtonsPostDetails {
        margin: 5px;
    }

    .divPost {
        text-align: right;
        padding: 10px;
    }

    #old_userId {
        margin-top: 27px
    }

    #old_id {
        margin-top: 63px;
    }

    #old_title {
        margin-top: 62px;
    }

    #old_body {
        margin-top: 54px;
    }

    #backIcon {
        width: 50px;
        height:50px;
    }

    #backIconLink {
        color: #343a40;
    }

    .titleDiv {
        display: inline-flex;
        margin-bottom: 10px;
    }

    .titlePage {
        text-align: left;
    }
</style>