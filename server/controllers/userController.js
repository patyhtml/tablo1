const userService = require('../services/userService');



// Pobieranie wszystkich użytkowników
exports.getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send('Błąd serwera');
    }
};

// Tworzenie nowego użytkownika
exports.createUser = async (req, res) => {
    const userData = req.body;
    try {
        const newUser = await userService.createUser(userData);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Pobieranie użytkownika po ID
exports.getUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await userService.getUserById(userId);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).send('Użytkownik nie znaleziony');
        }
    } catch (error) {
        res.status(500).send('Błąd serwera');
    }
};

// Aktualizacja użytkownika
exports.updateUser = async (req, res) => {
    const userId = req.params.id;
    const userData = req.body;
    try {
        const updatedUser = await userService.updateUser(userId, userData);
        if (updatedUser) {
            res.status(200).json(updatedUser);
        } else {
            res.status(404).send('Użytkownik nie znaleziony');
        }
    } catch (error) {
        res.status(500).send('Błąd aktualizacji użytkownika');
    }
};

// Usuwanie użytkownika
exports.deleteUser = async (req, res) => {
    const userId = req.params.id;
    try {
        await userService.deleteUser(userId);
        res.status(204).send();  // No Content
    } catch (error) {
        res.status(500).send('Błąd usuwania użytkownika');
    }
};

