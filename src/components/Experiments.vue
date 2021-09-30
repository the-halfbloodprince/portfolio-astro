<template>
	<div class="h-screen px-8 xl:px-0 py-16 relative flex flex-col justify-center space-y-8 resume">
		<div class="text-6xl text-accent">{{title}}</div>
		<div class="section1">
			<img class="img" src="../../public/assets/no.webp" />
			<div class="text">
				<div class="line1">“Life is not all about being a shinobi, it’s also about ramen”</div>
				<div class="line2">- Uzumaki Dattebayo</div>
			</div>
		</div>
		<div class="section2">
			<div v-for="exp in experiments">
				<img src={{exp[pic]}} alt={{exp[title]}}>
				<h1>{{exp['title']}}</h1>
				<p>{{exp['whatIsIt']}}</p>
				<p>{{exp['description']}}</p>
			</div>
		</div>
	</div>
</template>

<style>

	.section1 {
		display: flex;
		align-items: center;
	}

	.section1 > .text {
		margin-left: 5rem;
	}

	.section1 > .text > .line1 {
		font-size: 2.5rem;
		margin-bottom: 2rem;
	}

	.section1 > .text > .line2 {
		font-size: 1.2rem;
		color: #999;
	}

</style>

<script>
	export default {
		setup() {
			const title = "Okay but is it all just the usual stuff?"
			const catchPhrase = "My Official Documentation"
			const experiments = [
				{
					pic: 'assets/tailwindcss.svg',
					title: 'Gentree',
					whatIsIt: 'Project Visualisation Tool',
					description: 'It is a simple command line tool that generates a structure.md containing a tree representation of the chosen directory.'
				},
				{
					pic: 'assets/tailwindcss.svg',
					title: 'Wild Flower',
					whatIsIt: 'VS Code Theme',
					description: 'It is a red themed VS Code theme with a material look with occassional splashes of purple.'
				}
			]
			// console.log(resume)

			return {title, experiments, catchPhrase}
		}
	}
</script>
