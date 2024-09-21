const bcrypt = require('bcrypt');
const sequelize = require('../config/db');
const User = require('../models/userModel');

async function updateUserPasswords() {
    console.log("Rozpoczynam aktualizację haseł...");
    const users = await User.findAll();
    for (const user of users) {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
        await user.save();
    }
    console.log("Hasła zostały zaktualizowane.");
}

updateUserPasswords().catch(console.error);
