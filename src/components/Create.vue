<template>
    <div>
        <div class="container titleDiv">
            <h2 class="titlePage">Create Post</h2>
        </div>

        <div class="container divForm">
            <b-form @submit.prevent="onSubmit">
                <b-form-group
                        class="text_inputBoxCreate"
                        label="User ID"
                        label-for="input_userId">
                    <b-form-input
                            v-model="new_post.userId"
                            id="input_userId"
                            type="number"
                            required
                            min="1"
                            placeholder="Choose an User ID for the post">
                    </b-form-input>
                </b-form-group>
                <b-form-group
                        class="text_inputBoxCreate"
                        label="ID"
                        label-for="input_id">
                    <b-form-input
                            v-model="new_post.id"
                            id="input_id"
                            type="number"
                            required
                            min="1"
                            placeholder="Choose an ID for your post">
                    </b-form-input>
                </b-form-group>
                <b-form-group
                        class="text_inputBoxCreate"
                        label="Title"
                        label-for="input_title">
                    <b-form-input
                            v-model="new_post.title"
                            id="input_title"
                            type="text"
                            required
                            placeholder="Enter with a title for your post">
                    </b-form-input>
                </b-form-group>
                <b-form-group
                        class="text_inputBoxCreate"
                        label="Body"
                        label-for="input_body">
                    <b-form-textarea
                            v-model="new_post.body"
                            id="input_body"
                            required
                            placeholder="Enter with a description for your post"
                            rows="4"
                            max-rows="6">
                    </b-form-textarea>
                </b-form-group>
                <b-form-group
                        class="text_inputBox"
                        label="Creation Date"
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
                    <b-button type="submit" class="divButtons" variant="outline-success">Submit</b-button>
                </div>
            </b-form>
        </div>
    </div>
</template>

<script>
    import { mapActions } from "vuex";
    export default {
        name: "Create",
        data() {
            return {
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
        methods: {
            ...mapActions(["addPost"]),
            onSubmit() {
                this.addPost(this.new_post);
            }
        }
    };
</script>

<style scoped>
    .text_inputBoxCreate {
        font-weight: bold;
        text-align: left !important;
    }

    .titlePage {
        text-align: left;
    }

    .divButtons {
        margin: 5px;
        margin-bottom: 45px;
    }
</style>