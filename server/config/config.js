require('dotenv').config();  // Ładuje zmienne środowiskowe z pliku .env

module.exports = {
    JWT_SECRET: process.env.JWT_SECRET || 'your-secret-key', // Użyj zmiennej środowiskowej lub domyślnego klucza
    // Możesz tu dodać inne ustawienia...
};
