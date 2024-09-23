const userService = require('../services/userService');
const bcrypt = require('bcrypt');  
const jwt = require('jsonwebtoken');  
const { JWT_SECRET } = require('../config/config');  

// Logowanie użytkownika
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userService.getUserByEmail(email);
        
        if (!user) {
            return res.status(401).send('Nieprawidłowy email lub hasło');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        
        if (!isPasswordValid) {
            return res.status(401).send('Nieprawidłowy email lub hasło');
        }

        const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
            expiresIn: '1h',  // Token ważny przez godzinę
        });

        // Zwróć token w odpowiedzi
        res.status(200).json({ token, user: { id: user.id, email: user.email } });


    } catch (error) {
        console.error('Błąd logowania:', error);
        res.status(500).send('Błąd serwera');
    }
};
