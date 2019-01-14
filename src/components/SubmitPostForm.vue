<template>
    <div class="submit-form">
        <md-button v-on:click="seen = !seen" class="md-fab md-plain">
            <md-icon>edit</md-icon>
        </md-button>
        <form v-if="seen">
            <md-field>
                <label>Username</label>
                <md-input v-model="username" required></md-input>
            </md-field>
            <md-field>
                <label>Topic</label>
                <md-input v-model="topic" required></md-input>
            </md-field>
            <md-field class="input-field">
                <label>Comment</label>
                <md-textarea @keyup.enter="postComment" v-model="comment" md-autogrow required></md-textarea>
                <small class="error">Please fill out required fields</small>
            </md-field>
            <md-button v-on:click="postComment" class="md-raised md-primary">Share</md-button>
        </form>
    </div>
</template>
<script>
    import { postMessage } from '../assets/js/post_message.js'
    import { postsRef } from '../assets/js/firebase.js'

    export default {
        name: 'SubmitPostForm',
        computed: {
            reverseOrder: function() {
                return this.posts.slice().reverse();
            }
        },
        methods: {
            postComment: function(event) {
                var userName = this.username;
                var userComment = this.comment;
                var Topic = this.topic;
                var currentTime = new Date();
                var timeStamp = currentTime.toDateString();

                if (!userName || !userComment || !Topic) {
                    $('.md-field').css('border-bottom', '1px solid red');
                    $('.error').show();
                    return
                }

                postsRef.push({
                    username: userName,
                    comment: userComment,
                    time: timeStamp,
                    topic: Topic
                })

                $('.error').hide();
                $('.md-field').css('border-bottom', '1px solid lightgrey');

                postMessage();
            }
        },
        data: function() {
            return {
                username: '',
                comment: '',
                topic: '',
                seen: false

            }
        },
        firebase: {
            posts: postsRef,
        }
    }
</script>
<style>
    label {
        color: #a2a2a2;
    }
    .error {
        display: none;
        font-size: 12px;
        text-align: left;
        color: red;
    }
    .md-fab {
        position: fixed;
        bottom: 5px;
        right: 5px;
    }
    .md-button {
        margin: 25px;
        color: #4b93f8;
    }
    .md-field {
        width: 60%;
        margin: 10px auto;
        border-bottom: 1px solid lightgrey;
    }
</style>