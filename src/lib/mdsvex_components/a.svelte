<script lang="ts">
	export let href = '/';
</script>

<a
	class={href.startsWith('/') ? 'internal-link' : 'link'}
	{href}
	rel={href.startsWith('/') ? '' : 'external'}
	target={href.startsWith('/') ? '' : '_blank'}
>
	<slot />
</a>
