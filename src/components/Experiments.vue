<template>
	<div class="h-screen px-8 xl:px-0 py-16 relative flex flex-col justify-center space-y-8 resume">
		<div class="text-6xl text-accent">{{title}}</div>
		<div class="section1">
			<img class="img" src="assets/no.webp" />
			<div class="text">
				<div class="line1">“Life is not all about being a shinobi, it’s also about ramen”</div>
				<div class="line2">- Uzumaki Dattebayo</div>
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
			const resume = {
				education: [
					{
						course: "Integrated Masters in Applied Geology",
						school: "Indian Institute of Technology, Kharagpur",
						courseDuration: "(2019-2024)",
					},
					{
						course: "Higher Secondary Education in Science",
						school: "KV NEIST",
						courseDuration: "(2016-2018)",
					}
				],
				experience: [
					{
						jd: "Software Development Intern (Full Stack)",
						organisation: "Krishi Network",
						jobDuration: "(July 2021-Sept 2021)",
					},
					{
						jd: "Research Intern",
						organisation: "SSERD",
						jobDuration: "(Oct 2019-Nov 2019)",
					},
				]
			}

			// console.log(resume)

			return {title, resume, catchPhrase}
		}
	}
</script>
