<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
	$: ({ articulos } = data)
    console.log(data);
    
</script>

<form action="?/actualizarArticulos" method="POST">
	<h3>Editando: {articulos.titulo}</h3>
	<label for="titulo"> Titulo </label>
    <input type="text" id="titulo" name="titulo" value={articulos.titulo} />
	<label for="titulo"> Titulo </label>
	<textarea id="contenido" name="contenido" rows={5} value={articulos.contenido} />
	<button type="submit">Actualizar Articulo</button>
</form>

