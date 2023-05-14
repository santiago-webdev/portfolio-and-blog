<div class="wrapper-arrow" aria-hidden="true" {...$$restProps}>
	<iconify-icon icon="lucide:minus" />
	<iconify-icon icon="lucide:chevron-left" />
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
		inset: auto auto auto 0.2ch;
	}

	iconify-icon:first-child {
		position: absolute;
	}

	[icon='lucide:chevron-left'] {
		transform: translateX(-4px);
	}

	[icon='lucide:minus'] {
		opacity: 1;
		transition-delay: 50ms;
	}

	@media (hover: hover) {
		[icon='lucide:chevron-left'] {
			transform: translateX(3px);
		}

		[icon='lucide:minus'] {
			opacity: 0;
			transition-delay: -50ms;
		}

		:global(a:hover [icon='lucide:chevron-left']),
		:global(a:focus [icon='lucide:chevron-left']) {
			transform: translateX(-4px);
		}

		:global(a:hover [icon='lucide:minus']),
		:global(a:focus [icon='lucide:minus']) {
			opacity: 1;
			transition-delay: 50ms;
		}
	}
</style>
