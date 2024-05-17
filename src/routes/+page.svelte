<script lang="ts">
  import type { PageData } from "./$types";

	export let data: PageData

	$: ({ articulos } = data)
	
</script>

<div class="grid">
	<div>
		<h2>Articulos</h2>
		{#each articulos as articulo }
		<articles>
			<header>{articulo.titulo}</header>
			<p>
				{articulo.contenido}
			</p>
			<form action="?/eliminarArtuculos&id={articulo.id}" method="POST">
				<button type="submit" class="outline secondary">Borrar Artuculo</button>
			</form>
			<a href="/{articulo.id}" role="button" class="outline constrast" style="width: 100%;"> Editar Articulo</a>
		</articles>
		{/each}
	</div>
	<form action="?/crearArticulos" method="POST">
		<h3>Nuevo Articulo</h3>
		<label for="titulo"> Titulo</label>
		<input type="text" id="titulo" name="titulo"/>
		<label for="titulo">Titulo</label>
		<textarea id="contenido" name="contenido" rows={5}/>
		<button type="submit">Añadir Articulo</button>
	</form>
</div>