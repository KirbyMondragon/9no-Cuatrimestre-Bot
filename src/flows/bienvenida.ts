import { addKeyword, EVENTS } from '@builderbot/bot';
import { serviciosFlow } from './serviciosEscolares';
import { Ingles } from './ingles';
import { Vinculacion } from './vinculacion';


const Salir = addKeyword(["4"]).addAnswer(
    "Gracias por utilizar nuestro servicio. ¡Hasta luego! 💬😊"
);

export const welcomeFlow = addKeyword(["Hola", "hola", "hi", "hello","denisse"])

    .addAnswer("> 👩🏽‍💻 ¡Hola! Soy Denisse, la asistente virtual de la UPSRJ.")
    .addAnswer(
        [
            "  Menu ✨📚",
            "",
            "1️⃣ Servicios Escolares 🏫📚✨",
            "2️⃣ Oferta Educativa🔗✨ ",
            "3️⃣ Inglés 🇬🇧🇺🇸📚",
            "4️⃣ Salir ❌"
        ].join('\n'),
        {  capture: true },
        async (ctx, { fallBack }) => {
            const validOptions = [
                "1", "2","3","4"
            ];

            if (!validOptions.includes(ctx.body)) {
                return fallBack("Seleccione un número del menú✅💬");
            }
        },
        [
            serviciosFlow, Vinculacion ,Ingles , Salir
        ]
    );
