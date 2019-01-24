<template>
    <div class="like">
        <md-button @click="addLike" class="md-icon-button">
            <md-icon>favorite</md-icon>
        </md-button>
    </div>
</template>
<script>
    export default {
        name: 'LikeButton',
        methods: {
            addLike: function(event) {
                var clickedElement = event.target;
                $(clickedElement).toggleClass('red')
            }
        },
    }
</script>
<style>
    .red {
        color: red;
    }
    div.like .md-icon-button {
        color: darkgrey;
    }
</style>