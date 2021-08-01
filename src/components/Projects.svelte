<script>
	import Project from './Project.svelte'
	import ProjectRev from './ProjectRev.svelte'
</script>

<div class="projects">
	<h1 class="projects__title">Projects</h1>
	<div class="projects__container">
		<Project
			id={1}
			title="Xhopie"
			description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat eum vero velit sint! Nemo quae numquam vero magnam illo similique, distinctio obcaecati! Quidem deserunt iste labore laudantium quibusdam repudiandae totam!"
			tech={['next.js', 'tailwindcss', 'react']}
		/>
		<ProjectRev
			id={2}
			title="Xhopie"
			description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat eum vero velit sint! Nemo quae numquam vero magnam illo similique, distinctio obcaecati! Quidem deserunt iste labore laudantium quibusdam repudiandae totam!"
			tech={['next.js', 'tailwindcss', 'react']}
		/>
		<Project
			id={3}
			title="Xhopie"
			description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat eum vero velit sint! Nemo quae numquam vero magnam illo similique, distinctio obcaecati! Quidem deserunt iste labore laudantium quibusdam repudiandae totam!"
			tech={['next.js', 'tailwindcss', 'react']}
		/>
	</div>
</div>

<style>
	.projects {
		min-height: 100vh;
		margin-right: 2rem;
		/* width: 100vw; */
		padding: 5rem 0;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		/* background-color: #f22; */
	}

	.projects__title {
		font-size: 5rem;
		color: #6D28D9;
	}

	.projects__container {
		/* background-color: #ff7; */
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>
