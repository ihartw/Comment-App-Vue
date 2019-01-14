<template>
	<div id="app">
		<Nav></Nav>
		<div class="container">
			<SubmitPostForm></SubmitPostForm>
			<PostsCards></PostsCards>
			<SuccessAlert></SuccessAlert>
		</div>
	</div>
</template>
<script>
	import Nav from './components/Nav'
	import SubmitPostForm from './components/SubmitPostForm'
	import PostsCards from './components/PostsCards'
	import SuccessAlert from './components/SuccessAlert'

	export default {
		name: 'App',
		components: {
			Nav,
			SubmitPostForm,
			SuccessAlert,
			PostsCards
		}
	}
</script>
<style>
	.container {
		text-align: center;
		margin-top: 20px;
	}
</style>