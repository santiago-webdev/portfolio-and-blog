<script lang="ts">
	import { dev } from '$app/environment';
	import { onMount } from 'svelte';
	var ghStars = 0; // Use 0 in here so that it doesn't show "undefined" while it loads

	onMount(async () => {
		if (!dev) {
			const response = await fetch(
				'https://api.github.com/repos/santigo-zero/santigo-zero.github.io'
			);
			const character = await response.json();
			ghStars = character.stargazers_count;
		}
	});
</script>

<footer>
	<section class="upper">
		<p>Designed & Built with &lt;3 by Santiago</p>

		<a href="https://github.com/santigo-zero/santigo-zero.github.io"
			>nth({ghStars}) on GitHub</a
		>
	</section>
	<section class="bottom">
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
					><i class="fa-brands fa-linkedin" />
					LinkedIn</a
				>
			</li>
			<!-- TODO(santigo-zero): What should go into the href? -->
			<!-- <li class="separator">•</li> -->
			<!-- <li><a href="#"><i class="fa-regular fa-envelope" /> Email</a></li> -->
		</ul>
	</section>
</footer>

<style>
	/* TODO(santigo-zero): Fix this component entirely */
	footer {
		display: grid;
		place-items: center;
		gap: 2rem;
		background-color: var(--bg5);
	}

	section {
		display: flex;
		justify-content: space-between;
		align-items: center;

		min-height: 60px;
		font-size: 18px;
		width: min(100% - 3rem, var(--wide));
		margin-inline: auto;
	}

	ul {
		display: flex;
		place-items: center;
		flex-direction: row;
		gap: 0.6rem;
	}

	.bottom {
		flex-wrap: wrap;
		gap: 1rem;
	}

	.copyright {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}

	@media screen and (max-width: 43.75em) {
		.upper,
		.bottom {
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
	}
</style>
