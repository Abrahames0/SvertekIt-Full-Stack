<!-- <script>
	import type { PageData } from "./$types";

	export let data: PageData

	$: ({ articules } = data)
</script> -->

<div class="grid">
	<div>
		<h2>Articulos</h2>
		<articles>
			<header><!-- {articules.titule} --> Titulo del articulo</header>
			<p>
				<!-- {articules.content} -->lorel
			</p>
			<!-- <form action="?/deleteArticle$id={articules.id}" method="POST">
				<button type="submit" class="outline secondary">Borrar Artuculo</button>
			</form> -->
			<a href="/" role="button" class="outline constrast" style="width: 100%;"> Editar Articulo</a>
		</articles>
	</div>
	<form action="?/crearArticulos" method="POST">
		<h3>Nuevo Articulo</h3>
		<label for="titulo"> Titulo</label>
		<input type="text" id="titulo" name="titulo"/>
		<label for="titulo">Titulo</label>
		<textarea id="contenido" name="contenido" rows="{5}"/>
		<button type="submit">Añadir Articulo</button>
	</form>
</div>