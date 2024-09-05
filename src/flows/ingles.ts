import { addKeyword } from '@builderbot/bot';
import { join } from 'path';
import { welcomeFlow } from './bienvenida';
import linksDriveEnglish from '~/drive/EnglishDrive';


const ClasesSabatinas = addKeyword(["2"])
    .addAnswer(
        [
            "1️⃣ Clases Sabatinas 🇬🇧",
            " ",
            "La información más actualizada de Clases Sabatinas, la puedes ver en: ",
            "  ",
            `${linksDriveEnglish.ClasesSabatinas} 🆕📄🔍`
            
        ].join('\n')
    ).addAnswer("", null, async (_, { state, flowDynamic  }) => {
        await flowDynamic([
            "¿Te puedo asistir con algo más?",
            "1️⃣ Regresar al menú",
            "2️⃣ Finalizar conversación"
        ].join('\n'));
    })
    .addAnswer('Por favor, responde ingresando el número de la opción que deseas. ✨', { capture: true }, async (ctx, { state, flowDynamic,endFlow, gotoFlow, fallBack }) => {
        if(ctx.body === "2"){
            return endFlow("¡Hasta la próxima, Coyote! 🐺👋")
        }else if(ctx.body === "1"){
            return gotoFlow(Ingles);
        }
        else{
            return fallBack("Por favor, responde ingresando el número de la opción que deseas. ✨");
        }
    });



const CertificacionITEP = addKeyword(["3"])
    .addAnswer(
        [
            "2️⃣ Certificación ITEP 🇬🇧",
            "",
            "La información más actualizada sobre la Certificación ITEP, la puedes ver en: ",
            "  ",
            `${linksDriveEnglish.CertificacionITEP} 🆕📄🔍`
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
            return gotoFlow(Ingles);
        }
        else{
            return fallBack("Por favor, responde ingresando el número de la opción que deseas. ✨");
        }
    });


    
const CursosEgresados = addKeyword(["2"])
    .addAnswer(
        [
            "1️⃣ Cursos para Egresados 🇬🇧",
            "",
            "La información más actualizada sobre Cursos de Egresados, la puedes ver en: 🆕📄🔍",
            "  ",
            `${linksDriveEnglish.CursosEgresados}`
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
            return gotoFlow(Ingles);
        }
        else{
            return fallBack("Por favor, responde ingresando el número de la opción que deseas. ✨");
        }
    });

const CertificacionesEgresados = addKeyword(["3"])
    .addAnswer(
        [
            "2️⃣ Certificaciones para Egresados 🇬🇧",
            "",
            "Para más información sobre Certificaciones para Egresados, visita: 🆕📄🔍",
            "  ",
            `${linksDriveEnglish.CertificacionesEgresados}`
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
            return gotoFlow(Ingles);
        }
        else{
            return fallBack("Por favor, responde ingresando el número de la opción que deseas. ✨");
        }
    });

const Egresados = addKeyword(["4"])
    .addAnswer(
        [
            "Menu de Egresados 🇬🇧",
            "",
            "Elige una opción:",
            "1️⃣ Regresar al menú 🏠",
            "2️⃣ Cursos 📚",
            "3️⃣ Certificaciones 🏅",
            "4️⃣ Salir 🚪"
        ].join('\n'),
        { capture: true },
        async (ctx, { fallBack , gotoFlow, endFlow}) => {
            const validOptions = ["1","2","3","4"];
            
            if(ctx.body === "4"){
                return endFlow("¡Hasta la próxima, Coyote! 🐺👋")
            }else if(ctx.body === "1"){
                return gotoFlow(Ingles);
            }

            if (!validOptions.includes(ctx.body)) {
                return fallBack(`Seleccione una opción válida del menú de Egresados✅💬 ${ctx.name}`);
            }
        },
        [
            CursosEgresados, CertificacionesEgresados
        ]
    );


export const Ingles = addKeyword(["3"])
    .addAnswer("2️⃣ Inglés 🇬🇧🇺🇸📚")
    .addAnswer(
        [
            "Elige una opción:",
            "1️⃣ Regresar al menú principal 🏠",
            "2️⃣ Clases Sabatinas 📅",
            "3️⃣ Certificación ITEP 🏆",
            "4️⃣ Egresados 🎓",
            "5️⃣ Salir 🚪"
        ].join('\n'),
        { capture: true },
        async (ctx, { fallBack,endFlow, gotoFlow}) => {
            const validOptions = ["1","2","3","4","5"];

            if(ctx.body === "5"){
                return endFlow("¡Hasta la próxima, Coyote! 🐺👋")
            }else if(ctx.body === "1"){
                return gotoFlow(welcomeFlow);
            }

            if (!validOptions.includes(ctx.body)) {
                return fallBack(` ${ctx.name} Seleccione una opción válida del menú de Inglés✅💬 `);
            }
        },
        [
            ClasesSabatinas, CertificacionITEP, Egresados
        ]
    );
