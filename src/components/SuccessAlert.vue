<template>
	<md-content id="success-alert"><img src="../assets/img/check-2.gif" width="50">
		<p>Comment Posted!</p>
	</md-content>
</template>
<script>
	export default {
		name: 'SuccessAlert',
	}
</script>
<style>
	img {
		float: left;
	}
	#success-alert {
		visibility: hidden;
		min-width: 190px;
		margin-left: -125px;
		border-radius: 2px;
		color: darkgreen;
		padding: 5px;
		position: fixed;
		z-index: 1;
		right: 0;
		top: 0;
	}

	#success-alert.show {
		visibility: visible;
		-webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
		animation: fadein 0.5s, fadeout 0.5s 2.5s;
	}

	@-webkit-keyframes fadein {
		from {
			bottom: 0;
			opacity: 0;
		}

		to {
			bottom: 30px;
			opacity: 1;
		}
	}

	@keyframes fadein {
		from {
			bottom: 0;
			opacity: 0;
		}

		to {
			bottom: 30px;
			opacity: 1;
		}
	}

	@-webkit-keyframes fadeout {
		from {
			bottom: 30px;
			opacity: 1;
		}

		to {
			bottom: 0;
			opacity: 0;
		}
	}

	@keyframes fadeout {
		from {
			bottom: 30px;
			opacity: 1;
		}

		to {
			bottom: 0;
			opacity: 0;
		}
	}
</style>