// Configuración global para tests
process.env.NODE_ENV = "test"
process.env.JWT_SECRET = "test-secret-key-for-testing"
process.env.DB_NAME = "aulatech_test"

// Suprimir logs durante tests (opcional)
if (process.env.SILENT_TESTS === "true") {
  global.console = {
    ...console,
    log: () => {},
    error: () => {},
    warn: () => {},
    info: () => {},
    debug: () => {},
  }
}
