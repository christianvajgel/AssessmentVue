<template>
    <div>
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

<!--        <div class="row container postEditionMainDiv">-->
<!--            <div class="col divPost">-->
<!--                <h5 id="old_userId">{{ postById(id).userId }}</h5>-->
<!--                <h5 id="old_id">{{ postById(id).id }}</h5>-->
<!--                <h5 id="old_title">{{ postById(id).title }}</h5>-->
<!--                <h5 id="old_body">{{ postById(id).body }}</h5>-->
<!--            </div>-->

<!--            <div class="col divForm">-->
<!--                <b-form>-->
<!--                    <b-form-group-->
<!--                            class="text_inputBox"-->
<!--                            label="User ID"-->
<!--                            label-for="input_userId">-->
<!--                        <b-form-input-->
<!--                                id="input_userId"-->
<!--                                type="number"-->
<!--                                required-->
<!--                                min="1"-->
<!--                                placeholder="Choose a new User ID for the post">-->
<!--                        </b-form-input>-->
<!--                    </b-form-group>-->
<!--                    <b-form-group-->
<!--                            class="text_inputBox"-->
<!--                            label="ID"-->
<!--                            label-for="input_id">-->
<!--                        <b-form-input-->
<!--                                id="input_id"-->
<!--                                type="number"-->
<!--                                required-->
<!--                                min="1"-->
<!--                                placeholder="Choose a new ID for your post">-->
<!--                        </b-form-input>-->
<!--                    </b-form-group>-->
<!--                    <b-form-group-->
<!--                            class="text_inputBox"-->
<!--                            label="Title"-->
<!--                            label-for="input_title">-->
<!--                        <b-form-input-->
<!--                                id="input_title"-->
<!--                                type="text"-->
<!--                                required-->
<!--                                placeholder="Enter with a new title for your post">-->
<!--                        </b-form-input>-->
<!--                    </b-form-group>-->
<!--                    <b-form-group-->
<!--                            class="text_inputBox"-->
<!--                            label="Body"-->
<!--                            label-for="input_body">-->
<!--                        <b-form-textarea-->
<!--                                id="input_body"-->
<!--                                required-->
<!--                                placeholder="Enter with a new description for your post"-->
<!--                                rows="8"-->
<!--                                max-rows="10">-->
<!--                        </b-form-textarea>-->
<!--                    </b-form-group>-->
<!--                    <br>-->
<!--                    <div>-->
<!--                        <b-button type="reset" class="divButtons" variant="outline-danger">Clear</b-button>-->
<!--                        <b-button type="submit" @click="edit" class="divButtons" variant="outline-success">Submit</b-button>-->
<!--                    </div>-->
<!--                </b-form>-->
<!--            </div>-->
<!--        </div>-->
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

        // export default {
        //     name: "DetailUser",
        //     data: function()
        //     {return{ id : this.$route.params.id  };
        //     },computed: {
        //         ...mapGetters(["usuarioById",])
        //     },
        //     methods: {
        //         editar() {
        //             this.$router.push({ name: 'edit-user' , params: { id: this.id } });
        //         }
        //     }
        //
        // }


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