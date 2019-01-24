<template>
    <div class="share">
        <md-button @click="share" class="md-icon-button">
            <md-icon>share</md-icon>
        </md-button>
    </div>
</template>
<script>
    export default {
        name: 'ShareButton',
        methods: {
            share: function(event) {
                var clickedElement = event.target;
                $(clickedElement).toggleClass('share-active')
            }
        },
    }
</script>
<style>
    .share-active {
        color: #51a6f1
    }
    div.share .md-icon-button {
        color: darkgrey;
    }
</style>