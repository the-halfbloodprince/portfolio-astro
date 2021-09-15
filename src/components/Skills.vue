<template>
	<div class="h-screen px-8 xl:px-0 py-16 relative flex flex-col justify-center space-y-8">
		<h1 class="text-6xl text-purple-700">Stuff I'm good at</h1>
		<div class="">
			<h1>Front-End</h1>
			<p v-for="skill in skills.frontend">{{skill}}</p>
		</div>
		<div class="button">
		<button>
			View full resume
		</button>
	</div>
	</div>
</template>

<style>
	.button {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	button {
		padding: .6rem 1.5rem;
		font-size: 1.1rem;
		font-weight: 500;
		background-color: white;
		color: #22223B;
		border-radius: 10px;
	}
</style>

<script>
	export default {
		setup() {
			const randomString = "I have quite a lot of skills"
			const skills = {
				frontend: [
					"HTML5",
					"CSS",
					"JavaScript",
					"TypeScript",
					"React",
					"Next",
					"ThreeJS",
					"SASS",
					"TailwindCSS",
					"Flutter"
				],
				backend: [
					"Nodejs",
					"Express",
					"MongoDB",
					"Flask",
					"SQL"
				]
			}

			return {skills, randomString}
		}
	}
</script>
