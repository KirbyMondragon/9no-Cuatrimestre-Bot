import { addKeyword } from '@builderbot/bot';
import { join } from 'path';
import { welcomeFlow } from './bienvenida';
import ServiciosEscolaresDrive from '~/drive/serviciosEscolaresDrive';


// Sección 1: Becas
const Becas = addKeyword(["5"])
    .addAnswer("> Becas 🎓💰")
    .addAnswer(
        [
            "Consulta la información sobre becas en: 🆕📄🔍",
            "  ",
            "https://upsrj.edu.mx/becas/",
            "Aquí podrás encontrar la información más actualizada 📚✨"
        ]
    ).addAnswer("", null, async (_, { state, flowDynamic  }) => {
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
            return gotoFlow(serviciosFlow);
        }
        else{
            return fallBack("Por favor, responde ingresando el número de la opción que deseas. ✨");
        }
    });

// Sección 2: Admisiones
const Admisiones = addKeyword(["2"])
    .addAnswer("> Admisiones 📝🎓")
    .addAnswer(
        [
            "La información más reciente la podrás encontrar en: 🆕📄🔍",
            "  ",
            "https://upsrj.edu.mx/admision/",
            "Aquí podrás encontrar la información más actualizada 📚✨"
        ]
    ).addAnswer("", null, async (_, { state, flowDynamic  }) => {
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
            return gotoFlow(serviciosFlow);
        }
        else{
            return fallBack("Por favor, responde ingresando el número de la opción que deseas. ✨");
        }
    });

// Sección 3: Titulación
const Titulacion = addKeyword(["6"])
    .addAnswer("> Titulación 🎓📜")
    .addAnswer(
        [
            "Toda la información sobre titulación está disponible en: 🆕📄🔍",
            "  ",
            "https://upsrj.edu.mx/titulacion-2/" ,
            "Aquí podrás encontrar la información más actualizada 📚✨"
        ]
    ).addAnswer("", null, async (_, { state, flowDynamic  }) => {
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
            return gotoFlow(serviciosFlow);
        }
        else{
            return fallBack("Por favor, responde ingresando el número de la opción que deseas. ✨");
        }
    });

// Sección 4: Reinscripción
const Reinscripciones = addKeyword(["3"])

    .addAnswer(
        [
            "> Reinscripciones 🔄📝",
            "También puedes revisar más información en: 🆕📄🔍",
            "  ",
            "https://upsrj.edu.mx/inscripciones-reinscripciones/",
             "Aquí podrás encontrar la información más actualizada 📚✨"
        ]
    )
    .addAnswer("", null, async (_, { state, flowDynamic  }) => {
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
            return gotoFlow(serviciosFlow);
        }
        else{
            return fallBack("Por favor, responde ingresando el número de la opción que deseas. ✨");
        }
    });

// Sección 5: Reincorporación
const Reincorporacion = addKeyword(["8"])
    .addAnswer("> Reincorporación 🔄📚")
    .addAnswer("Por el momento, estamos construyendo esta información 🛠️🚧 ")
    .addAnswer("", null, async (_, { state, flowDynamic  }) => {
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
            return gotoFlow(serviciosFlow);
        }
        else{
            return fallBack("Por favor, responde ingresando el número de la opción que deseas. ✨");
        }
    });
      // Falta el pdf , Asignar el PDF correspondiente;


// Sección 6: Alta y Baja del IMSS
const IMSS = addKeyword(["7"])
    .addAnswer("> Registro y cancelación en el IMSS 🏥📝❌")
    .addAnswer(`Informacion sobre el IMSS: ${ServiciosEscolaresDrive.InfografiaIMSS} 🏥📝`).addAnswer("", null, async (_, { state, flowDynamic  }) => {
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
            return gotoFlow(serviciosFlow);
        }
        else{
            return fallBack("Por favor, responde ingresando el número de la opción que deseas. ✨");
        }
    });  // Asignar el PDF correspondiente;

// Sección 7: Emisión de Documentos
const EmisionDocumentos = addKeyword(["4"])
    .addAnswer("> Emisión de documentos 📄🖨️") // Asignar el PDF correspondiente
    .addAnswer(
        [
            "Elige una opción:",
            " ",
            "1️⃣ Regresar al menú Servicios Escolares 🏠",
            "2️⃣ Kardex",
            "3️⃣ Reposición de credencial ",
            "4️⃣ Certificado parcial ",
            "5️⃣ Título de grados",
            "6️⃣ Constancia",
            "7️⃣ Salir❌"
        ].join('\n'),
        { capture: true },
        async (ctx, { fallBack , endFlow, gotoFlow}) => {
            const validOptions = [
                "1","2","3","4","5","6","7"
            ];
            if(ctx.body === "7"){
                return endFlow("¡Hasta la próxima, Coyote! 🐺👋")
            }else if(ctx.body === "1"){
                return gotoFlow(serviciosFlow);
            }
            if (!validOptions.includes(ctx.body)) {
                return fallBack(`Seleccione una opción válida del menú de Emisión de Documentos✅💬${ctx.name}`);
            }
        },
        [
            
            addKeyword(["2","3","4","5","6"])
                .addAnswer("Emision de documentos 🖨️📄")
                .addAnswer(`Aqui puedes ver el Manual para emitir el documento requerido: ${ServiciosEscolaresDrive.EmisionInfografiaDocumentos} 📄🖨️`) 
                .addAnswer(`Si necesitas un acompañamiento mas cercano , puedes chechar este paso por paso para la emision de documentos: ${ServiciosEscolaresDrive.ManualDocumentos} 📄🖨️`) 
                .addAnswer("", null, async (_, { state, flowDynamic  }) => {
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
                        return gotoFlow(serviciosFlow);
                    }
                    else{
                        return fallBack("Por favor, responde ingresando el número de la opción que deseas. ✨");
                    }
                }),
        ]
    );



// Sección 8: Salir
const Salir = addKeyword(["9"]).addAnswer(
    "Gracias por utilizar nuestro servicio. ¡Hasta luego Coyote! "
);

// Menu Principal
export const serviciosFlow = addKeyword(["1"]).addAnswer(
    [
        "",
        "  Menu ✨📚",
        "",
        "1️⃣ Regresar al menú principal 🏠",
        "2️⃣ Admisiones 📝🎓",
        "3️⃣ Reinscripciones 🔄📝",
        "4️⃣ Emisión de documentos 📄🖨️",
        "5️⃣ Becas 🎓💰",
        "6️⃣ Titulación 🎓📜",
        "7️⃣ Registro y cancelación en el IMSS 🏥📝❌",
        "8️⃣ Reincorporación 🔄📚",
        "9️⃣ Salir ❌"
    ].join('\n'),
    { capture: true },
    async (ctx, { fallBack,gotoFlow }) => {
        const validOptions = [
            "1", "2","3","4","5","6","7","8","9"
        ];

        if(ctx.body === "1"){
            return gotoFlow(welcomeFlow);
        }
        if (!validOptions.includes(ctx.body)) {
            return fallBack(`Seleccione un número del menú✅💬${ctx.name}`);
        }
    },
    [
        Admisiones, Reinscripciones, EmisionDocumentos, Becas, Titulacion, IMSS, Reincorporacion, Salir
    ]
);
