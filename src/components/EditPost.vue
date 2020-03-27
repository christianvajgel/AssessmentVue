<template>
    <div>
        <div class="titleDiv container">
            <b-icon-blockquote-left id="backIcon"></b-icon-blockquote-left>
            <h1 class="titlePage">Post Edition</h1>
        </div>

        <div class="row container postEditionMainDiv">
            <div class="col divPost">
                <h5 id="old_userId">{{ postById(id).userId }}</h5>
                <h5 id="old_id">{{ postById(id).id }}</h5>
                <h5 id="old_title">{{ postById(id).title }}</h5>
                <h5 id="old_body">{{ postById(id).body }}</h5>
            </div>

            <div class="col divForm">
                <b-form @submit.prevent="onSubmit">
                    <b-form-group
                            class="text_inputBox"
                            label="User ID"
                            label-for="input_userId">
                        <b-form-input
                                v-model="new_post.userId"
                                id="input_userId"
                                type="number"
                                required
                                min="1"
                                placeholder="Choose a new User ID for the post">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group
                            class="text_inputBox"
                            label="ID"
                            label-for="input_id">
                        <b-form-input
                                v-model="new_post.id"
                                id="input_id"
                                type="number"
                                required
                                min="1"
                                placeholder="Choose a new ID for your post">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group
                            class="text_inputBox"
                            label="Title"
                            label-for="input_title">
                        <b-form-input
                                v-model="new_post.title"
                                id="input_title"
                                type="text"
                                required
                                placeholder="Enter with a new title for your post">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group
                            class="text_inputBox"
                            label="Body"
                            label-for="input_body">
                        <b-form-textarea
                                v-model="new_post.body"
                                id="input_body"
                                required
                                placeholder="Enter with a new description for your post"
                                rows="8"
                                max-rows="10">
                        </b-form-textarea>
                    </b-form-group>
                    <b-form-group
                            class="text_inputBox"
                            label="Modification Date"
                            label-for="input_body">
                        <b-form-datepicker id="example-datepicker"
                                           required
                                           v-model="value"
                                           class="mb-2"></b-form-datepicker>
                    </b-form-group>
                    <b-form-group
                            class="text_inputBox"
                            label="Subject"
                            label-for="input_body">
                        <b-form-select
                                v-model="selected"
                                required
                                :options="options"></b-form-select>
                    </b-form-group>
                    <br>
                    <div>
                        <b-button type="reset" class="divButtons" variant="outline-danger">Clear</b-button>
                        <b-button type="submit" @click="onSubmit" class="divButtons" variant="outline-success">Submit</b-button>
                    </div>
                </b-form>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    export default {
        name: "EditPost",
        methods: {
            ...mapActions(["updatePost"]),
            onSubmit() {
                this.updatePost(this.new_post);
                alert("Success!");
            }
        },
        computed: mapGetters(["postById"]),
        created() {
            this.new_post = this.postById(this.id);
        },
        data() {
            return {
                id:this.$route.params.id,
                new_post: {
                    userId:"",
                    id:"",
                    title:"",
                    body:""
                },
                value: '',
                selected: null,
                options: [
                    { value: null, text: 'Please select an option', disabled:true},
                    { value: 'food', text: 'Food' },
                    { value: 'music', text: 'Music' },
                    { value: 'travel', text: 'Travel' },

                ],
            };
        },
    };
</script>

<style>
    .text_inputBox {
        font-weight: bold;
        text-align: left !important;
    }

    .postEditionMainDiv {
        display: inline-flex !important;
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