<template>
    <div class="posts">
        <md-card md-with-hover v-for="post in reverseOrder" :key="post.id">
            <md-ripple>
                <md-card-header>
                    <div class="md-title">@{{ post.username }}</div>
                    <div class="md-subhead">{{ post.time }}</div>
                </md-card-header>
                <md-card-content>
                    "{{ post.comment }}"
                </md-card-content>
                <div class="divider"></div>
                <md-card-actions>
                    <div class="chip">
                        <p>{{ post.topic }}</p>
                    </div>
                    <LikeButton></LikeButton>
                    <ShareButton></ShareButton>
                </md-card-actions>
            </md-ripple>
        </md-card>
    </div>
</template>
<script>
    import { postsRef } from '../assets/js/firebase.js'
    import LikeButton from './Buttons/LikeButton'
    import ShareButton from './Buttons/ShareButton'
    
    export default {
        name: 'PostsCards',
        components: {
            LikeButton,
            ShareButton
        },
        computed: {
            reverseOrder: function() {
                return this.posts.slice().reverse();
            }
        },
        firebase: {
            posts: postsRef
        }
    }
</script>
<style>
    .chip {
        background-color: #4b93f8;
        padding: 5px 20px;
        border-radius: 15px;

    }
    .chip p {
        margin: 0;
        color: white;
    }
    .divider {
        width: 100%;
        height: 1px;
        border: 1px solid #ebebeb;
    }
    .md-title {
        margin-bottom: 10px;
    }
    .md-card {
        width: 60%;
        margin: 10px;
        display: inline-block;
        vertical-align: top;
        background-color: #f2f2f2;
    }
</style>