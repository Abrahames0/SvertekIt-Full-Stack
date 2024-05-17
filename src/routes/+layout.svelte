<script lang="ts">
	import '@picocss/pico';
    let noche = true;
</script>

<style>
    .fondo-dia {
        background-color: #7c7b7b33; 
    }
</style>

<main class="{'fondo-dia'}">
	<div class="container">
		<hgroup>
			<h1>
				<a href="/"> SvelteKit & Prisma 🧊</a>
			</h1>
	
			<h2>CRUD con SvelteKit y Prisma.</h2>
		</hgroup>
		<slot />
	</div>
</main>
