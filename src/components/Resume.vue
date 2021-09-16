<template>
	<div class="h-screen px-8 xl:px-0 py-16 relative flex flex-col justify-center space-y-8 resume">
		<h1 class="text-6xl text-accent">Resume</h1>
		<h1 class="text-2xl text-white">{{catchPhrase}}</h1>
		<div class="supreme">
			<div class="line"></div>
			<div v-for="(_, cat, __) in resume">
				<div class="resumeCategoryBox">
					<div class="categoryBox">
						<div class="category">{{cat}}</div>
					</div>
					<div class="contentBox">
						<div v-for="(content, index2) in resume[cat]">
							<div class="v">
								<div class="list-icon">
									<div v-if="index2===0">
										<img src="assets/latestExp.svg" class="list-icon" />
									</div>
									<div v-else>
										<img src="assets/oldExp.svg" class="list-icon" />
									</div>
								</div>
								<div class="list-content">
									<div v-for="(detail, _, index) in content">
										<div class="l1" v-if="index===0">{{detail}}</div>

										<div class="l2" v-else-if="cat === 'education' && _ === 'school' ">from <span class="special">{{detail}}</span></div>
										<div class="l2" v-else-if="cat === 'experience' && _ === 'organisation' ">at <span class="special">{{detail}}</span></div>
										<div class="l2" v-else>{{detail}}</div>
									</div>
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

	.resume {
		margin-bottom: 7rem;
	}

	.supreme {
		position: relative;
	}

	.l1 {
		font-size: 1.7rem;
	}

	.l2 {
		font-size: 1.1rem;
		color: #999;
	}

	.resumeCategoryBox {
		display: flex;
		width: 100%;
		justify-content: flex-start;
		margin-bottom: 2.5rem;
	}

	.categoryBox {
		width: 35%;
		text-transform: capitalize;
		font-weight: bold;
		font-size: 2rem;
	}

	.contentBox {
		width: 65%;
		font-size: 1.3rem;
	}

	.v {
		margin-bottom: 1rem;
		display: flex;
	}

	.list-content {
		margin-left: 1rem;
	}

	.list-icon {
		width: 3rem;
		z-index: 3;
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

	.line {
		content: " ";
		height: 100%;
		width: 4px;
		/* background-color: rgb(146, 109, 180); */
		background:linear-gradient(to bottom,  rgb(146, 109, 180), #00041E);
		position: absolute;
		left: calc(35% + 1.5rem - 2px);
		top: .5rem;
	}
</style>

<script>
	export default {
		setup() {
			const catchPhrase = "My Official Documentation"
			const dummy = undefined;
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
