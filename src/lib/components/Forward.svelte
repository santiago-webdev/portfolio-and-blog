<div class="wrapper-arrow" aria-hidden="true" {...$$restProps}>
	<iconify-icon icon="lucide:minus" />
	<iconify-icon icon="lucide:chevron-right" />
</div>

<style>
	* {
		transition: transform 150ms cubic-bezier(0.215, 0.61, 0.355, 1),
			opacity 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
	}

	.wrapper-arrow {
		display: flex;
		place-items: center;
		position: relative;
		inset: 1px auto auto 0.2ch;
	}

	[icon='lucide:minus'] {
		position: absolute;
	}

	[icon='lucide:chevron-right'] {
		transform: translateX(4px);
	}

	[icon='lucide:minus'] {
		opacity: 1;
		transition-delay: 50ms;
	}

	@media (hover: hover) {
		[icon='lucide:chevron-right'] {
			transform: translateX(-3px);
		}

		[icon='lucide:minus'] {
			opacity: 0;
			transition-delay: -50ms;
		}

		:global(a:hover [icon='lucide:chevron-right']),
		:global(a:focus [icon='lucide:chevron-right']) {
			transform: translateX(4px);
		}

		:global(a:hover [icon='lucide:minus']),
		:global(a:focus [icon='lucide:minus']) {
			opacity: 1;
			transition-delay: 50ms;
		}
	}
</style>
