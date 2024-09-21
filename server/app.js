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
const boardColumnController = require('./controllers/boardColumnController');

// Import trasy dla zadań (jeśli istnieją)
const taskRoutes = require('./routes/taskRoutes'); // Upewnij się, że ten plik istnieje

// Middleware do parsowania JSON (jeśli potrzebne do przetwarzania danych z żądań POST)
app.use(express.json());
app.use(cors());

// Middleware do logowania treści żądania
app.use((req, res, next) => {
    console.log('Parsed request body:', req.body);
    next();
});

// Prosta trasa, która zwróci wiadomość
app.get('/', (req, res) => {
    res.send('Witaj w moim backendzie Node.js!');
});

// Konfiguracja Multer do zapisywania plików w folderze 'uploads/'
const upload = multer({ dest: 'uploads/' });  // Folder, gdzie będą zapisywane pliki

// Trasy dla zadań (jeśli korzystasz z pliku zdefiniowanego w `taskRoutes`)
app.use('/api/tasks', taskRoutes);

// Jeśli nie korzystasz z `taskRoutes`, możesz bezpośrednio zdefiniować trasy dla zadań:
app.get('/api/tasks', taskController.getAllTasks); // Pobieranie listy zadań
app.post('/api/tasks', taskController.createTask); // Tworzenie nowego zadania
app.get('/api/tasks/:taskId', taskController.getTaskById); // Pobieranie zadania po ID
app.post('/api/tasks/:taskId', taskController.updateTask); // Aktualizacja zadania
app.delete('/api/tasks/:taskId', taskController.deleteTask); // Usuwanie zadania

// Trasy dla boards
app.get('/api/boards', boardController.getUserBoards); // Pobieranie listy boards user
app.post('/api/boards', boardController.createBoard); // Dodawanie board for user
app.get('/api/boards/:boardId', boardController.getBoardById); // Szczegóły board
app.post('/api/boards/:boardId', boardController.updateBoard); // Zapis edycji board
app.delete('/api/boards/:boardId', boardController.deleteBoard); // Usuwanie board
// Trasy dla boardscolumns
app.get('/api/boardcolumns', boardColumnController.getBoardColumns); // Pobieranie listy boards user
// app.post('/api/boardcolumns', boardColumnController.createBoard); // Dodawanie board for user
// app.get('/api/boardcolumns/:boardColumnId', boardColumnController.getBoardById); // Szczegóły board
// app.post('/api/boardcolumns/:boardColumnId', boardColumnController.updateBoard); // Zapis edycji board
// app.delete('/api/boardcolumns/:boardColumnId', boardColumnController.deleteBoard); // Usuwanie board

// Trasy dla plików z użyciem Multer
app.post('/api/files/upload', upload.single('file'), fileController.uploadFile); // Upload plików
app.get('/api/files/:id', fileController.getFileById); // Pobieranie plików po ID

// Trasy dla punktów
app.get('/api/points', pointController.getAllPoints); // Pobieranie wszystkich punktów
app.post('/api/points', pointController.createPoint); // Tworzenie nowego punktu
app.get('/api/points/:pointId', pointController.getPointById); // Pobieranie punktu po ID
app.delete('/api/points/:pointId', pointController.deletePoint); // Usuwanie punktu

// Trasy dla plików zadań
app.post('/api/taskFiles', upload.single('file'), taskFileController.uploadFile); // Upload pliku do zadania
app.get('/api/taskFiles/:fileId', taskFileController.getFileById); // Pobieranie pliku po ID
app.delete('/api/taskFiles/:fileId', taskFileController.deleteFile); // Usuwanie pliku po ID

// Trasy dla UserBoards
app.get('/api/userBoards', userBoardController.getAllUserBoards); // Pobieranie wszystkich UserBoard
app.post('/api/userBoards', userBoardController.createUserBoard); // Tworzenie nowego UserBoard
app.get('/api/userBoards/:userBoardId', userBoardController.getUserBoardById); // Pobieranie UserBoard po ID
app.delete('/api/userBoards/:userBoardId', userBoardController.deleteUserBoard); // Usuwanie UserBoard

// Trasy dla użytkowników
app.get('/api/users', userController.getAllUsers); // Pobieranie wszystkich użytkowników
app.post('/api/users', userController.createUser); // Tworzenie nowego użytkownika
app.get('/api/users/:userId', userController.getUserById); // Pobieranie użytkownika po ID
app.put('/api/users/:userId', userController.updateUser); // Aktualizacja użytkownika
app.delete('/api/users/:userId', userController.deleteUser); // Usuwanie użytkownika

// Trasy dla UserPlans
app.get('/api/userPlans', userPlanController.getAllUserPlans); // Pobieranie wszystkich UserPlan
app.post('/api/userPlans', userPlanController.createUserPlan); // Tworzenie nowego UserPlan
app.get('/api/userPlans/:userPlanId', userPlanController.getUserPlanById); // Pobieranie UserPlan po ID
app.delete('/api/userPlans/:userPlanId', userPlanController.deleteUserPlan); // Usuwanie UserPlan

// Uruchomienie serwera na porcie 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Serwer działa na porcie ${PORT}`);
});
