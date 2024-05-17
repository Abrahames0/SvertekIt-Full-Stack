import { error, fail } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { prisma } from "$lib/server/prisma";

export const load: PageServerLoad = async ({ params }) => {
    const articulos = await prisma.articulos.findUnique({
        where: {
            id: Number(params.articuloId),
        },
    });
    if (!articulos) {
        throw error(404, "Articulo no disponible.");
    }
    return {
        articulos
    };
};


export const actions: Actions = {
    actualizarArticulos: async ({request, params }) => {
        const {titulo, contenido} = Object.fromEntries(await request.formData()) as {titulo: string, contenido: string}

        try {
            await prisma.articulos.update({
                where: {
                    id: Number(params.articuloId)
                },
                data: {
                    titulo,
                    contenido
                }
            })
        } catch (err) {
            console.error(err)
            return fail (500, {message: 'No se pudo actualizar el Articulo'})
        }

        return{
            status: 200,
        }
    }
}