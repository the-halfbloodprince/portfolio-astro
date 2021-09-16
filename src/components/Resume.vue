<template>
	<div class="h-screen px-8 xl:px-0 py-16 relative flex flex-col justify-center space-y-8">
		<h1 class="text-6xl text-accent">Resume</h1>
		<h1 class="text-2xl text-white">{{catchPhrase}}</h1>
		<div class="">
			<div v-for="(_, cat, index) in resume">
				<div class="resumeCategoryBox">
					<div class="categoryBox">
						<div class="category">{{cat}}</div>
					</div>
					<div class="contentBox">
						<div v-for="(content, _, index) in resume[cat]">
							<div class="v">
								<div v-for="(detail, _, index) in content">
									<div v-if="cat === 'education' && _ === 'school' ">from <b>{{detail}}</b></div>
									<div v-else-if="cat === 'experience' && _ === 'organisation' ">at <b>{{detail}}</b></div>
									<div v-else>{{detail}}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="button">
			<!-- <button>
				View full resume
			</button> -->
		</div>
	</div>
</template>

<style>

	.resumeCategoryBox {
		display: flex;
		width: 100%;
		justify-content: flex-start;
		margin-bottom: 2.5rem;
	}

	.categoryBox {
		width: 40%;
		text-transform: capitalize;
		font-weight: bold;
		font-size: 2rem;
	}

	.contentBox {
		width: 60%;
		font-size: 1.3rem;
	}

	.v {
		margin-bottom: 1rem;
	}

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

			return {resume, catchPhrase}
		}
	}
</script>
