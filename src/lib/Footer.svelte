<script>
	// let ghStars;

	// fetch('https://api.github.com/repos/santigo-zero/santigo-zero.github.io')
	// 	.then((response) => response.json())
	// 	.then((response) => {
	// 		console.log(response);
	// 		ghStars = response.stargazers_count;
	// 	});

	import { onMount } from 'svelte';
	let ghStars = 0; // Use 0 in here so that it doesn't show "undefined" while it loads

	onMount(async () => {
		const response = await fetch(
			'https://api.github.com/repos/santigo-zero/santigo-zero.github.io'
		);
		const character = await response.json();
		ghStars = character.stargazers_count;
	});
</script>

<div class="wrapper-nav">
	<div class="container">
		<section class="this">
			<p>
				Designed & Built with <i class="fa-regular fa-heart" /> by Santiago
			</p>

			<a href="https://github.com/santigo-zero/santigo-zero.github.io"
				><i class="fa-regular fa-star" /> {ghStars}</a
			>
		</section>
		<section class="that">
			<div class="copyright">
				<p>© GPL-3.0 Santiago Gonzalez</p>
				<p>2022-2023. All Rights Reserved</p>
			</div>
			<ol>
				<li>
					<a href="https://github.com/santigo-zero/"
						><i class="fa-brands fa-github" />
						GitHub</a
					>
				</li>
				<li class="separator">•</li>
				<li>
					<a href="https://www.linkedin.com/in/santiago-gonzalez-62557221b/"
						><i class="fa-brands fa-linkedin" /> LinkedIn</a
					>
				</li>
				<li class="separator">•</li>
				<li><a href="#"><i class="fa-regular fa-envelope" /> Email</a></li>
			</ol>
		</section>
	</div>
</div>

<style>
	.wrapper-nav {
		background-color: var(--cc2-bg2);
	}

	.container {
		/* border-color: red; */
		/* border-style: solid; */
		margin: 0 auto;
		display: grid;
		place-items: center;
		max-width: var(--max-width);
		padding: var(--padding);
		gap: calc(var(--padding) + 1rem); /* Separator between .this and .that */
		padding-inline: var(--padding-inline);
	}

	section {
		display: flex;
		/* place-items: center; */
		justify-content: space-between;
		align-items: center;
		flex-direction: row;

		min-height: 60px;
		width: 100%;

		gap: 2rem;

		font-size: 18px;

		background-color: var(--cc2-bg2);
		color: var(--cc4-fg);

		/* border-color: blue; */
		/* border-style: solid; */
		/* border-width: 2px; */
	}

	ol {
		display: flex;
		place-items: center;
		flex-direction: row;
		gap: 0.6rem;
	}

	li {
		list-style-type: none;
	}

	a {
		text-decoration: none;
		color: var(--cc4-fg);
	}

	a:hover {
		color: var(--cc2-fg);
	}

	p:hover .fa-heart {
		color: crimson;
	}

	a:hover .fa-star {
		color: crimson;
	}
	a:hover .fa-star {
		color: orange;
	}

	.fa-heart,
	.fa-star,
	a,
	p {
		transition: all 0.3s ease 0s;
	}

	.that {
		flex-wrap: wrap;
		gap: 1rem;
	}

	@media screen and (max-width: 43.75em) {
		.this,
		.that {
			flex-direction: column-reverse;
			gap: 1rem;
			text-align: center;
		}

		.separator {
			display: none;
		}

		ol {
			flex-direction: column;
		}

		.wrapper-nav {
			gap: 3rem;
		}
	}
</style>
