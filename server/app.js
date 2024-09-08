const express = require('express');
// const pool = require('./config/db');  // Import połączenia do bazy danych PostgreSQL
const multer = require('multer');  // Import Multer do obsługi plików
const fileController = require('./controllers/fileController');  // Import kontrolera do plików
const cors = require('cors');
const app = express();

// Middleware do parsowania JSON (jeśli potrzebne do przetwarzania danych z żądań POST)
app.use(express.json());
app.use(cors());
// Prosta trasa, która zwróci wiadomość
app.get('/', (req, res) => {
    res.send('Witaj w moim backendzie Node.js!');
});

// Przykład zapytania do bazy danych
// pool.query('SELECT NOW()', (err, res) => {
//     if (err) {
//         console.error('Błąd połączenia z bazą danych:', err);
//     } else {
//         console.log('Połączono z bazą danych:', res.rows);
//     }
// });

// Konfiguracja Multer do zapisywania plików w folderze 'uploads/'
const upload = multer({ dest: 'uploads/' });  // Folder, gdzie będą zapisywane pliki

// Trasa do uploadu plików z użyciem Multer
app.post('/api/files/upload', upload.single('file'), fileController.uploadFile);

// Trasa do pobierania plików po ID
app.get('/api/files/:id', fileController.getFileById);

app.get('/api/boards');//lista boards user
app.post('/api/boards'); // Dodawanie board for user
app.get('/api/boards/:boardId');// detal board
app.post('/api/boards/:boardId');// zapis edycji board
app.delete('/api/boards/:boardId');// kasuje detal board







// Uruchomienie serwera na porcie 3000
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Serwer działa na porcie ${PORT}`);
});
