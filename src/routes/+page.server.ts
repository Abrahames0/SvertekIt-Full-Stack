import { fail } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { prisma } from '$lib/server/prisma'; 

export const load: PageServerLoad = async () => {
    return{
        articulos: await prisma.articulos.findMany(),
    }
}

export const actions: Actions = {
    crearArticulos: async ({ request }) => {
        const { titulo, contenido } = Object.fromEntries(await request.formData()) as {
            titulo: string; 
            contenido: string; 
        }

        try {
            await prisma.articulos.create({
                data: {
                    titulo,
                    contenido
                }
            });
        } catch (err) {
            console.error(err);
            return fail(500, { message: 'No se pudo crear el artículo.' });
        }

        return {
            status: 201
        }
    },
    eliminarArtuculos: async ({ url }) => {
        const id = url.searchParams.get("id")
        if (!id) {
            return fail(400, {message: 'Respuesta invalida.'})
        }

        try {
            await prisma.articulos.delete({
                where: {
                    id: Number(id)
                }
            })
        } catch (err) {
            console.error(err)
            return fail (500, {message: 'Algo salio mal al eliminar el Articulo.'})
        }
        return {
            status: 200
        }
    }
};
