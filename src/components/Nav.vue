<template>
    <md-toolbar class="md-transparent">
        <h4>{{ 'Total Comments: ' + posts.length }}</h4>
    </md-toolbar>
</template>

<script>
    import { postsRef } from '../assets/js/firebase.js'
    export default {
        name: 'Nav',
        firebase: {
            posts: postsRef,
        }
    }
</script>
