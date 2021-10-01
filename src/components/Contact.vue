<template>
	<div class="h-screen py-10">
		<div class="text-6xl">
			{{title}}
		</div>
	</div>
</template>

<style>
</style>

<script>
	export default {
		setup() {
			const title = "Say Hi!"
			
			return {title}
		}
	}
</script>