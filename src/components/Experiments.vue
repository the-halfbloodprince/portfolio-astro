<template>
	<div class="h-screen px-8 xl:px-0 py-16 relative flex flex-col justify-center space-y-8 resume">
		<div class="text-6xl text-accent">{{title}}</div>
		<div class="section1">
			
		</div>
	</div>
</template>

<style>

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
