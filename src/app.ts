import { join } from 'path'
import { createBot, createProvider, createFlow, addKeyword, utils } from '@builderbot/bot'
import { MongoAdapter as Database } from '@builderbot/database-mongo'
import { BaileysProvider as Provider } from '@builderbot/provider-baileys'
import { welcomeFlow } from './flows/bienvenida';
import { MongoClient }  from 'mongodb';
import * as dotenv from 'dotenv';
// Cargar las variables de entorno del archivo .env
dotenv.config();

const PORT = process.env.PORT;
const MONGOURI = process.env.MONGOURI;
const MONGONAME= process.env.MONGONAME;

const main = async () => {
    const adapterFlow = createFlow([welcomeFlow])
    
    const adapterProvider = createProvider(Provider)

    const adapterDB = new Database({
        dbUri: MONGOURI,
        dbName: MONGONAME,
    })

    
    const { handleCtx, httpServer } = await createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })


    httpServer(+PORT)
}


async function deleteDatabase() {
    const uri = MONGOURI;  // Cambia esto a la URL de tu instancia de MongoDB
    const client = new MongoClient(uri);
  
    try {
      // Conectar al cliente
      await client.connect();
  
      // Nombre de la base de datos que quieres eliminar
  
      // Obtener la referencia de la base de datos
      const db = client.db(MONGONAME);
  
      // Borrar la base de datos
      await db.dropDatabase();
  
      console.warn(`La base de datos ${MONGONAME} esta lista para el bot`);
    } catch (err) {
      console.error("Error al configurar la base de datos:", err);
    } finally {
      // Cerrar la conexión
      await client.close();
    }
  }
  
  
deleteDatabase().catch(console.error);
main()
