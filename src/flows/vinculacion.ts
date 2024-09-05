import { addKeyword } from '@builderbot/bot';
import { join } from 'path';
import { welcomeFlow } from './bienvenida';
import vinculacionDrive from '~/drive/vinculacionDrive';



// Convocatoria
const Convocatoria = addKeyword(["2"])
    .addAnswer("> Convocatoria 📄")
    .addAnswer([
        "Para más información sobre la convocatoria, visita: 🆕📄🔍",
        "https://upsrj.edu.mx/admision/"
    ]).addAnswer("", null, async (_, { state, flowDynamic  }) => {
        await flowDynamic([
            "¿Te puedo asistir con algo más?",
            "1️⃣ Regresar al menú",
            "2️⃣ Finalizar conversación"
        ].join('\n'));
    })
    .addAnswer('Por favor, responde ingresando el número de la opción que deseas. ✨', { capture: true }, async (ctx, { state,endFlow, gotoFlow, fallBack }) => {
        if(ctx.body === "2"){
            return endFlow("¡Hasta la próxima, Coyote! 🐺👋")
        }else if(ctx.body === "1"){
            return gotoFlow(Vinculacion);
        }
        else{
            return fallBack("Por favor, responde ingresando el número de la opción que deseas. ✨");
        }
    });
   
    
// Carreras
const Carreras = addKeyword(["3"])
    .addAnswer([
        "> ¿Qué carrera le interesa? 🎓",
        " ",
        "1️⃣ Regresar al menú principal 🏠",
        "2️⃣ Ingeniería en Animación y Efectos Visuales 🎥",
        "3️⃣ Ingeniería en Metrología Industrial 📏",
        "4️⃣ Ingeniería en Robótica Computacional 🤖",
        "5️⃣ Ingeniería en Software 💻",
        "6️⃣ Ingeniería en Sistemas Automotrices 🚗",
        "7️⃣ Terapia Física 💪",
        "8️⃣ Salir 🚪"
    ].join('\n'), { capture: true },
    async (ctx, { fallBack,endFlow, gotoFlow }) => {
        const validOptions = [
            "1",
            "2","3",
            "4", "5","6","7","8"
        ];
        if(ctx.body === "8"){
            return endFlow("¡Hasta la próxima, Coyote! 🐺👋")
        }else if(ctx.body === "1"){
            return gotoFlow(Vinculacion);
        }

        if (!validOptions.includes(ctx.body)) {
            return fallBack(` ${ctx.name} Seleccione una opción válida del menú de Carreras✅💬`);
        }
    },
    [
        addKeyword(["7"])
            .addAnswer("1️⃣ Terapia Física 🎓")
            .addAnswer(`La información más actualizada la puedes ver en nuestro drive, te dejo el link coyote : ${vinculacionDrive.FisioTerapia}  🆕📄🔍`)
            .addAnswer("un minuto...tenemos una sorpresa para ti🎉✨")
            .addAnswer([
                "puedes vivir la experiencia Coyote en nuestras redes:🐺 ",
                "> Facebook: https://www.facebook.com/UPSRJ 🐺🎓",
                "> Instagram: https://www.instagram.com/coyotesupsrj/ 🐺"
            ]).addAnswer("", null, async (_, { state, flowDynamic  }) => {
                await flowDynamic([
                    "¿Te puedo asistir con algo más?",
                    "1️⃣ Regresar al menú",
                    "2️⃣ Finalizar conversación"
                ].join('\n'));
            })
            .addAnswer('Por favor, responde ingresando el número de la opción que deseas. ✨', { capture: true }, async (ctx, { state,endFlow, gotoFlow, fallBack }) => {
                if(ctx.body === "2"){
                    return endFlow("¡Hasta la próxima, Coyote! 🐺👋")
                }else if(ctx.body === "1"){
                    return gotoFlow(Vinculacion);
                }
                else{
                    return fallBack("Por favor, responde ingresando el número de la opción que deseas. ✨");
                }
            }),

        addKeyword(["5"])
            .addAnswer("2️⃣ Ingeniería en Software 🎓")
            .addAnswer(`La información más actualizada la puedes ver en nuestro drive, te dejo el link coyote : ${vinculacionDrive.Software}  🆕📄🔍`)
            .addAnswer("un minuto...tenemos una sorpresa para ti🎉✨")
            .addAnswer([
                "puedes vivir la experiencia Coyote en nuestras redes:🐺 ",
                "> Facebook: https://www.facebook.com/UPSRJ 🐺🎓",
                "> Instagram: https://www.instagram.com/coyotesupsrj/ 🐺"
            ]).addAnswer("", null, async (_, { state, flowDynamic  }) => {
                await flowDynamic([
                    "¿Te puedo asistir con algo más?",
                    "1️⃣ Regresar al menú",
                    "2️⃣ Finalizar conversación"
                ].join('\n'));
            })
            .addAnswer('Por favor, responde ingresando el número de la opción que deseas. ✨', { capture: true }, async (ctx, { state,endFlow, gotoFlow, fallBack }) => {
                if(ctx.body === "2"){
                    return endFlow("¡Hasta la próxima, Coyote! 🐺👋")
                }else if(ctx.body === "1"){
                    return gotoFlow(Vinculacion);
                }
                else{
                    return fallBack("Por favor, responde ingresando el número de la opción que deseas. ✨");
                }
            }),

        addKeyword(["3"])
            .addAnswer("3️⃣ Ingeniería en Metrología Industrial 🎓")
            .addAnswer(`La información más actualizada la puedes ver en nuestro drive, te dejo el link coyote : ${vinculacionDrive.MetrologiaIndustrial}  🆕📄🔍`)
            .addAnswer("un minuto...tenemos una sorpresa para ti🎉✨")
            .addAnswer([
                "puedes vivir la experiencia Coyote en nuestras redes:🐺 ",
                "> Facebook: https://www.facebook.com/UPSRJ 🐺🎓",
                "> Instagram: https://www.instagram.com/coyotesupsrj/ 🐺"
            ]).addAnswer("", null, async (_, { state, flowDynamic  }) => {
                await flowDynamic([
                    "¿Te puedo asistir con algo más?",
                    "1️⃣ Regresar al menú",
                    "2️⃣ Finalizar conversación"
                ].join('\n'));
            })
            .addAnswer('Por favor, responde ingresando el número de la opción que deseas. ✨', { capture: true }, async (ctx, { state,endFlow, gotoFlow, fallBack }) => {
                if(ctx.body === "2"){
                    return endFlow("¡Hasta la próxima, Coyote! 🐺👋")
                }else if(ctx.body === "1"){
                    return gotoFlow(Vinculacion);
                }
                else{
                    return fallBack("Por favor, responde ingresando el número de la opción que deseas. ✨");
                }
            }),

        addKeyword(["6"])
            .addAnswer("4️⃣ Ingeniería en Sistemas Automotrices 🎓")
            .addAnswer(`La información más actualizada la puedes ver en nuestro drive, te dejo el link coyote : ${vinculacionDrive.Automotrices}  🆕📄🔍`)
            .addAnswer("un minuto...tenemos una sorpresa para ti🎉✨")
            .addAnswer([
                "puedes vivir la experiencia Coyote en nuestras redes:🐺 ",
                "> Facebook: https://www.facebook.com/UPSRJ 🐺🎓",
                "> Instagram: https://www.instagram.com/coyotesupsrj/ 🐺"
            ]).addAnswer("", null, async (_, { state, flowDynamic  }) => {
                await flowDynamic([
                    "¿Te puedo asistir con algo más?",
                    "1️⃣ Regresar al menú",
                    "2️⃣ Finalizar conversación"
                ].join('\n'));
            })
            .addAnswer('Por favor, responde ingresando el número de la opción que deseas. ✨', { capture: true }, async (ctx, { state,endFlow, gotoFlow, fallBack }) => {
                if(ctx.body === "2"){
                    return endFlow("¡Hasta la próxima, Coyote! 🐺👋")
                }else if(ctx.body === "1"){
                    return gotoFlow(Vinculacion);
                }
                else{
                    return fallBack("Por favor, responde ingresando el número de la opción que deseas. ✨");
                }
            }),

        addKeyword(["2"])
            .addAnswer("5️⃣ Ingeniería en Animación y Efectos Visuales 🎓")
            .addAnswer(`La información más actualizada la puedes ver en nuestro drive, te dejo el link coyote : ${vinculacionDrive.Animacion}  🆕📄🔍`)
            .addAnswer("un minuto...tenemos una sorpresa para ti🎉✨")
            .addAnswer([
                "puedes vivir la experiencia Coyote en nuestras redes:🐺 ",
                "> Facebook: https://www.facebook.com/UPSRJ 🐺🎓",
                "> Instagram: https://www.instagram.com/coyotesupsrj/ 🐺"
            ]).addAnswer("", null, async (_, { state, flowDynamic  }) => {
                await flowDynamic([
                    "¿Te puedo asistir con algo más?",
                    "1️⃣ Regresar al menú",
                    "2️⃣ Finalizar conversación"
                ].join('\n'));
            })
            .addAnswer('Por favor, responde ingresando el número de la opción que deseas. ✨', { capture: true }, async (ctx, { state,endFlow, gotoFlow, fallBack }) => {
                if(ctx.body === "2"){
                    return endFlow("¡Hasta la próxima, Coyote! 🐺👋")
                }else if(ctx.body === "1"){
                    return gotoFlow(Vinculacion);
                }
                else{
                    return fallBack("Por favor, responde ingresando el número de la opción que deseas. ✨");
                }
            }),

        addKeyword(["4"])
            .addAnswer("6️⃣ Ingeniería en Robótica Computacional 🎓")
            .addAnswer(`La información más actualizada la puedes ver en nuestro drive, te dejo el link coyote : ${vinculacionDrive.Robotica}  🆕📄🔍`)
            .addAnswer("un minuto...tenemos una sorpresa para ti🎉✨")
            .addAnswer([
                "puedes vivir la experiencia Coyote en nuestras redes:🐺 ",
                "> Facebook: https://www.facebook.com/UPSRJ 🐺🎓",
                "> Instagram: https://www.instagram.com/coyotesupsrj/ 🐺"
            ]).addAnswer("", null, async (_, { state, flowDynamic  }) => {
                await flowDynamic([
                    "¿Te puedo asistir con algo más?",
                    "1️⃣ Regresar al menú",
                    "2️⃣ Finalizar conversación"
                ].join('\n'));
            })
            .addAnswer('Por favor, responde ingresando el número de la opción que deseas. ✨', { capture: true }, async (ctx, { state,endFlow, gotoFlow, fallBack }) => {
                if(ctx.body === "2"){
                    return endFlow("¡Hasta la próxima, Coyote! 🐺👋")
                }else if(ctx.body === "1"){
                    return gotoFlow(Vinculacion);
                }
                else{
                    return fallBack("Por favor, responde ingresando el número de la opción que deseas. ✨");
                }
            }),
    ]
);

// Contactar asesor
const ContactarAsesor = addKeyword(["4"])
    .addAnswer("3️⃣ Contactar asesor académico 📞")
    .addAnswer([
        "Para contactar a un asesor académico, por favor envía un correo a asesor@upsrj.edu.mx o llama al 4424567890.",
        "Estamos aquí para ayudarte con cualquier consulta que tengas."
    ]);





// Vinculación
export const Vinculacion = addKeyword(["2"])
    .addAnswer([
        "> 2️⃣ Vinculación 🔗✨",
        " ",
        "Elige una opción:",
        "",
        "1️⃣ Regresar al menú principal 🏠",
        "2️⃣ Convocatoria 📄",
        "3️⃣ Carreras 🎓",
        "4️⃣ Contactar asesor académico 📞",
        "5️⃣ Salir 🚪"
    ].join('\n'), { capture: true },
    async (ctx, { fallBack,endFlow,gotoFlow }) => {
        const validOptions = [
            "1","2","3","4","5"
        ];

        if(ctx.body === "5"){
            return endFlow("¡Hasta la próxima, Coyote! 🐺👋")
        }else if(ctx.body === "1"){
            return gotoFlow(welcomeFlow);
        }
        if (!validOptions.includes(ctx.body)) {
            return fallBack(` ${ctx.name} Seleccione una opción válida del menú de Vinculación✅💬 `);
        }
    },
    [
        Convocatoria, Carreras, ContactarAsesor
    ]
);

//Terminado estos flujos 07 de agosto del 2024