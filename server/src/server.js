/**
 * Starts the MENTOR REST API.
 *
 * Startup sequence:
 * 1. Load environment variables.
 * 2. Test the PostgreSQL connection.
 * 3. Create or update the default Administrator.
 * 4. Start listening for HTTP requests.
 */
import "dotenv/config";
import { app } from "./app.js";
import { ensureDefaultAdminUser, testDatabaseConnection } from "./db.js";

//Uses the configurated API port or 3000 as the local default
const port = Number(process.env.API_PORT || 3000);

// Starts the API server after validating the database connection.
// Inicia el servidor API después de validar la conexión a la base de datos.
async function startServer() {
  try {
    await testDatabaseConnection();
    await ensureDefaultAdminUser();

    app.listen(port, "0.0.0.0", () => {
      console.log(`API running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("The server could not start:", error.message);
    process.exit(1);
  }
}

startServer();
