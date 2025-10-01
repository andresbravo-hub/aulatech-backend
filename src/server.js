const app = require("./app")
const { sequelize } = require("./models")
require("dotenv").config()

const PORT = process.env.PORT || 3000

// Sincronizar base de datos y arrancar servidor
const startServer = async () => {
  try {
    // Verificar conexión a la base de datos
    await sequelize.authenticate()
    console.log("[v0] Conexión a la base de datos establecida correctamente.")

    // Sincronizar modelos (en desarrollo)
    if (process.env.NODE_ENV === "development") {
      await sequelize.sync({ alter: true })
      console.log("[v0] Modelos sincronizados con la base de datos.")
    }

    // Iniciar servidor
    app.listen(PORT, () => {
      console.log(`[v0] Servidor corriendo en puerto ${PORT}`)
      console.log(`[v0] Ambiente: ${process.env.NODE_ENV || "development"}`)
    })
  } catch (error) {
    console.error("[v0] Error al iniciar el servidor:", error)
    process.exit(1)
  }
}

startServer()
