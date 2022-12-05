<script lang="ts">
	import { onMount } from "svelte";
	var ghStars: number = 0; // Use 0 in here so that it doesn't show "undefined" while it loads

	onMount(async () => {
		const response: object = await fetch(
			"https://api.github.com/repos/santigo-zero/santigo-zero.github.io"
		);
		const character: object = await response.json();
    ghStars = character.stargazers_count;
	});
</script>

<div id="footer" class="wrapper-footer">
	<div class="container">
		<section class="this">
			<p>
				Designed & Built with <i class="fa-regular fa-heart" /> by Santiago
			</p>

			<a href="https://github.com/santigo-zero/santigo-zero.github.io"
				><i class="fa-regular fa-star" /> {ghStars} on GitHub</a
			>
		</section>
		<section class="that">
			<div class="copyright">
				<p>© GPL-3.0 Santiago Gonzalez</p>
				<p>2022-2023. All Rights Reserved</p>
			</div>
			<ul>
				<!-- TODO(santigo-zero): Move all of this to #cta -->
				<li>
					<a href="https://github.com/santigo-zero/"
						><i class="fa-brands fa-github" />
						GitHub @santigo-zero</a
					>
				</li>
				<li class="separator">•</li>
				<li>
					<a href="https://www.linkedin.com/in/santiago-gonzalez-62557221b/"
						><i class="fa-brands fa-linkedin" /> LinkedIn</a
					>
				</li>
				<!-- TODO(santigo-zero): What should go into the href? -->
				<!-- <li class="separator">•</li> -->
				<!-- <li><a href="#"><i class="fa-regular fa-envelope" /> Email</a></li> -->
			</ul>
		</section>
	</div>
</div>

<style>
	.wrapper-footer {
		background-color: var(--cc2-bg2);
		display: grid;
		place-items: center;
	}

	.container {
		display: grid;
		width: 100%;
		place-items: center;
		width: min(100% - var(--padding), var(--max-content-width));
		padding: var(--padding);
		gap: calc(var(--padding) + 1rem); /* Separator between .this and .that */
		padding-inline: 0;
	}

	section {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;

		min-height: 60px;
		width: 100%;

		gap: 2rem;

		font-size: 18px;

		background-color: var(--cc2-bg2);
		color: var(--cc4-fg);
	}

	ul {
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

		ul {
			flex-direction: column;
		}

		.wrapper-footer {
			gap: 3rem;
		}
	}
</style>
