<script>
	export let id, title, description, tech
	import logos from '../data/logoMap.js'
</script>

<div class="container">
	<div class="number">
		{id}
	</div>
	<div class="image">
		<div class="outerBox">
			<div class="innerBox">
			</div>
		</div>
	</div>
	<div class="content">
		<h1 class="heading">
			<span class="text">{title}</span>
			<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
			</svg>
		</h1>
		<p class="text">{description}</p>
		<div class="tech-used">
			<!-- <img class="tech-logo" src="/assets/nextdotjs.svg" alt="" />
			<img class="tech-logo" src="/assets/tailwindcss.svg" alt="" />
			<img class="tech-logo" src="/assets/react.svg" alt="" /> -->

			{#each tech as techItem}
				<img class="tech-logo" src={logos[techItem]} alt="" />
			{/each}

		</div>
	</div>
</div>

<style>
	.container {
		width: 100%;
		/* background: #000; */
		display: flex;
		flex-direction: row-reverse;
		position: relative;
		margin: 3rem 0;
	}

	.image {
		height: 50vh;
		width: 50vh;
		/* background: #333; */
	}

	.outerBox {
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, #FFD600 1.54%, #FC005B 14.67%, #F926F0 30.46%, #5446F6 43.79%, #13C8EF 57.11%, #12D531 68.96%, #EAC400 96.3%);
		border-radius: 25px;
		display: grid;
		place-items: center;
		animation: animateBg 2s linear;
		animation-iteration-count: infinite;
	}

	@keyframes animateBg {
		from {
			background-position: 0;
		} to {
			background-position: 50vh;
		}
	}

	.innerBox {
		width: calc(100% - 10px);
		height: calc(100% - 10px);
		background: #222;
		border-radius: 25px;
		background: url(https://images.unsplash.com/photo-1627819459557-dd8e1b7a3b3f?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60);
		background-size: cover;
	}

	.content {
		margin: 0 auto ;
		/* background: #12D531; */
		width: 30vw;
		height: 50vh;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: flex-end;
	}

	h1 {
		font-size: 3rem;
	}

	.tech-used {
		display: flex;
	}

	.tech-logo {
		width: 2rem;
		margin-right: 1rem;
	}

	.number {
		position: absolute;
		left: -7vw;
		top: -12vh;
		font-size: 50vh;
		opacity: 0.1;
	}


	.heading > .text {
		color: #6A26CD;
	}

	.text {
		text-align: right;
	}


</style>
