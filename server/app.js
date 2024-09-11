const express = require('express');
// const pool = require('./config/db');  // Import połączenia do bazy danych PostgreSQL
const multer = require('multer');  // Import Multer do obsługi plików
const cors = require('cors');
const app = express();
const boardController = require('./controllers/boardController');
const fileController = require('./controllers/fileController');  // Import kontrolera do plików
const taskController = require('./controllers/taskController');
const pointController = require('./controllers/pointController');
const taskFileController = require('./controllers/taskFileController');
const userBoardController = require('./controllers/userBoardController');

const userController = require('./controllers/userController');
const userPlanController = require('./controllers/userPlanController');

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


app.get('/api/boards', boardController.getUserBoards); // Pobieranie listy boards user
app.post('/api/boards', boardController.createBoard); // Dodawanie board for user
app.get('/api/boards/:boardId', boardController.getBoardById); // detal board
app.post('/api/boards/:boardId', boardController.updateBoard); // zapis edycji board
app.delete('/api/boards/:boardId', boardController.deleteBoard); // kasuje detal board

// Konfiguracja Multer do zapisywania plików w folderze 'uploads/'
const upload = multer({ dest: 'uploads/' });  // Folder, gdzie będą zapisywane pliki
app.post('/api/files/upload', upload.single('file'), fileController.uploadFile); // Trasa do uploadu plików z użyciem Multer
app.get('/api/files/:id', fileController.getFileById); // Trasa do pobierania plików po ID


app.get('/api/points', pointController.getAllPoints); // Pobieranie wszystkich punktów
app.post('/api/points', pointController.createPoint); // Tworzenie nowego punktu
app.get('/api/points/:pointId', pointController.getPointById); // Pobieranie punktu po ID
app.delete('/api/points/:pointId', pointController.deletePoint); // Usuwanie punktu

app.get('/api/tasks', taskController.getAllTasks); //lista tasks user
app.post('/api/tasks', taskController.createTask); // Dodawanie tasks for user
app.get('/api/tasks/:taskId', taskController.getTaskById); // detal tas
app.post('/api/tasks/:taskId', taskController.updateTask); // zapis edycji task
app.delete('/api/tasks/:taskId', taskController.deleteTask);// kasuje detal taska


app.post('/api/files', upload.single('file'), taskFileController.uploadFile); // Trasa do przesyłania pliku
app.get('/api/files/:fileId', taskFileController.getFileById); // Trasa do pobierania pliku po ID
app.delete('/api/files/:fileId', taskFileController.deleteFile); // Trasa do usuwania pliku po ID

app.get('/api/userBoards', userBoardController.getAllUserBoards); // Pobieranie listy wszystkich UserBoard
app.post('/api/userBoards', userBoardController.createUserBoard); // Tworzenie nowego UserBoard
app.get('/api/userBoards/:userBoardId', userBoardController.getUserBoardById); // Pobieranie UserBoard po ID
app.delete('/api/userBoards/:userBoardId', userBoardController.deleteUserBoard); // Usuwanie UserBoard


app.get('/api/users', userController.getAllUsers); // Pobieranie wszystkich użytkowników
app.post('/api/users', userController.createUser); // Tworzenie nowego użytkownika
app.get('/api/users/:userId', userController.getUserById); // Pobieranie użytkownika po ID
app.put('/api/users/:userId', userController.updateUser); // Aktualizacja użytkownika
app.delete('/api/users/:userId', userController.deleteUser); // Usuwanie użytkownika


app.get('/api/userPlans', userPlanController.getAllUserPlans); // Pobieranie wszystkich UserPlan
app.post('/api/userPlans', userPlanController.createUserPlan); // Tworzenie nowego UserPlan
app.get('/api/userPlans/:userPlanId', userPlanController.getUserPlanById); // Pobieranie UserPlan po ID
app.delete('/api/userPlans/:userPlanId', userPlanController.deleteUserPlan); // Usuwanie UserPlan



// Uruchomienie serwera na porcie 3000
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Serwer działa na porcie ${PORT}`);
});
