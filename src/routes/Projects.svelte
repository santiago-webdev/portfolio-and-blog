<script>
	const title = 'Projects';
	const subtitle = 'This are some of my best frontend projects';
</script>

<div id="wrapper-projects" class="wrapper-projects">
	<main>
		<div style="text-align: center">
			<h1>{title}</h1>
			<h2>{subtitle}</h2>
		</div>

		<section>
			<article>
				<div class="header">
					<h3>
						<a
							target="_blank"
							rel="noopener noreferrer"
							title="Under construction"
							class="link"
							href="https://github.com/santigo-zero/santigo-zero.github.io"
						>
							Always a work in progress <i class="fa-solid fa-hammer" />
						</a>
					</h3>
					<div class="status">
						<div class="card_status">
							<i class="fa-solid fa-check" />
						</div>
						<div class="card_status">STATUS</div>
						<div class="card_status">STATUS</div>
					</div>
				</div>
				<div class="project_img_first" />
				<p class="card__description">There's more projects to come, just wait.</p>
			</article>
			<article>
				<div class="header">
					<h3>
						<a
							target="_blank"
							rel="noopener noreferrer"
							title="Under construction"
							class="link"
							href="https://github.com/santigo-zero/santigo-zero.github.io"
						>
							Always a work in progress <i class="fa-solid fa-hammer" />
						</a>
					</h3>
					<div class="status">
						<div class="card_status">
							<i class="fa-solid fa-check" />
						</div>
						<div class="card_status">STATUS</div>
						<div class="card_status">STATUS</div>
					</div>
				</div>
				<div class="project_img_first" />
				<p class="card__description">There's more projects to come, just wait.</p>
			</article>
			<article>
				<div class="header">
					<h3>
						<a
							target="_blank"
							rel="noopener noreferrer"
							title="Under construction"
							class="link"
							href="https://github.com/santigo-zero/santigo-zero.github.io"
						>
							Always a work in progress <i class="fa-solid fa-hammer" />
						</a>
					</h3>
					<div class="status">
						<div class="card_status">
							<i class="fa-solid fa-check" />
						</div>
						<div class="card_status">STATUS</div>
						<div class="card_status">STATUS</div>
					</div>
				</div>
				<div class="project_img_first" />
				<p class="card__description">There's more projects to come, just wait.</p>
			</article>
		</section>
	</main>
</div>

<style>
	.wrapper-projects {
		display: grid;
		place-items: center;
		min-height: 100vh;
		background-color: var(--cc-bg);
	}

	main {
		/* border-color: red; */
		/* border-style: solid; */

		/* max-width: 66rem; */
		padding: var(--padding);
		padding-inline: var(--padding-inline);
		max-width: 66rem;
		width: 100%;
	}

	h1 {
		font-size: clamp(1rem, 14vw, 3.3rem);
		line-height: clamp(3rem, 18vw, 4.5rem);
		font-weight: 600;

		padding-bottom: 1.3rem;
	}

	h2 {
		color: var(--cc-pale-blue);
		font-size: clamp(1rem, 10vw, 1.5rem);
		font-family: 'Inter', sans-serif;
		font-weight: 400;
	}

	section {
		display: grid;
		gap: 1.05rem;
		grid-auto-rows: minmax(28rem, auto);
		grid-template-columns: repeat(auto-fill, minmax(min(20rem, 100%), 1fr));
		/* max-width: 66rem; */
		padding-top: calc(var(--padding) * 3);
		width: 100%;
	}

	article {
		background-color: var(--bg-light);
		border-radius: 12px;
		border-color: var(--bg-header);
		border-style: solid;
		border-width: 1px;

		cursor: pointer;

		overflow: auto;

		gap: 0.6rem;

		display: flex;
		align-content: center;
		flex-direction: column;
		box-shadow: 3px 6px 9px rgba(0, 0, 0, 0.1);

		animation: growCard 0.6s;
		transition: all 0.1s ease-out;

		border-style: solid;
		border-color: orange;
		border-width: 1px;
	}

	article:hover {
		transform: scale(1.03);
	}

	article p {
		margin-inline: 8px;
		font-size: 1.2rem;
		font-weight: 400;
	}

	@keyframes growCard {
		from {
			transform: scale(0.6);
		}
		to {
			transform: scale(1);
		}
	}

	h3 {
		color: var(--fg);
		font-size: 1.4rem;
		font-weight: 400;
		text-align: center;
		margin-bottom: 6px;
	}

	.card_status {
		font-family: 'Inter', sans-serif;
		box-shadow: 3px 6px 9px rgba(0, 0, 0, 0.1);
		background-color: var(--bg-status);
		color: var(--fg-status);
		/* border-radius: 10px; */

		border-top-left-radius: 6px 6px;
		border-top-right-radius: 6px 6px;
		border-bottom-right-radius: 6px 6px;
		border-bottom-left-radius: 6px 6px;

		padding: 3px 10px;
		margin-inline: 2px;
		/* padding-bottom: 5px; */
	}

	.header {
		background-color: var(--bg-header);
		padding: 6px;
		padding-bottom: 10px;
		/* background-color: green; */
	}

	.project_img_first {
		background: rgb(34, 193, 195);
		background: linear-gradient(114deg, rgba(34, 193, 195, 1) 0%, rgba(253, 187, 45, 1) 100%);

		max-width: 100%;
		height: 88px;
		border-radius: 6px;
		margin-inline: 8px;
	}

	.project_img_zap {
		background: rgb(255, 228, 56);
		background: linear-gradient(90deg, rgba(255, 228, 56, 1) 0%, rgba(252, 70, 87, 1) 100%);

		max-width: 100%;
		height: 88px;
		border-radius: 6px;
		margin-inline: 8px;
	}

	.status {
		display: flex;
		/* justify-content: center; */
		flex-wrap: wrap;
		gap: 0.4rem;
	}
</style>
