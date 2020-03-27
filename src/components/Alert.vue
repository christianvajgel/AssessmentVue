<template>
    <b-alert
            :show="dismissCountDown"
            dismissible
            variant="warning"
            @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged"
    >
        <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
        <b-progress
                variant="warning"
                :max="dismissSecs"
                :value="dismissCountDown"
                height="4px"
        ></b-progress>
    </b-alert>
</template>

<script>
    export default {
        name: "Alert",
        methods: {
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            },
        },
        data() {
            return {
                dismissSecs: 10,
                dismissCountDown: 0,
            }
        }
    }
</script>

<style scoped>

</style>