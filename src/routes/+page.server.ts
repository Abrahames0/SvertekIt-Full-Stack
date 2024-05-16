import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { prisma } from '$lib/server/prisma'; 

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
};
