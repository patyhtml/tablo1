import { Link, useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useState } from 'react';
import './sidebar.css';

import { ReactComponent as IconTableSVG } from './../../assets/img/icon-table.svg';
import { ReactComponent as LineSVG } from './../../assets/img/line.svg';
import { ReactComponent as AddNewProjectSVG } from './../../assets/img/add-new-project.svg';
import { ReactComponent as IconNewProjectSVG } from './../../assets/img/icon-new-project.svg';

export const Sidebar = () => {
    const location = useLocation(); // Hook do pobrania aktualnej ścieżki
    const navigate = useNavigate(); // Hook do przekierowania użytkownika
    const [boards, setBoards] = useState([]); // Tablica do przechowywania boardów
    const [isEditing, setIsEditing] = useState(null); // Trzyma ID boardu, który jest edytowany
    const [editBoardName, setEditBoardName] = useState(''); // Trzyma zmienioną nazwę boardu

    const handleAddBoard = () => {
        const newBoard = {
            id: boards.length + 1,
            name: 'New Board'
        };
        setBoards([...boards, newBoard]); // Dodaje nowy board do tablicy
        
        // Przekierowuje użytkownika na stronę board
        navigate('/board');
    };

    const handleEditBoardName = (id) => {
        setIsEditing(id); // Ustawia tryb edycji dla wybranego boardu
        const boardToEdit = boards.find(board => board.id === id);
        setEditBoardName(boardToEdit.name); // Ustawia nazwę, która jest edytowana
    };

    const handleSaveBoardName = (id) => {
        setBoards(boards.map(board =>
            board.id === id ? { ...board, name: editBoardName } : board
        ));
        setIsEditing(null); // Zamyka tryb edycji
    };

    return (
        <aside className="sidebar">
            <ul>
                <li>
                    <Link
                        to="/board"
                        className={location.pathname === '/board' ? 'active' : ''}
                    >
                        <IconTableSVG className="svg-icon-table" />
                        Tablo
                    </Link>
                </li>
                <li>
                    <Link
                        to="/createpainpoint"
                        className={location.pathname === '/createpainpoint' ? 'active' : ''}
                    >
                        <IconNewProjectSVG className="svg-icon-new-project" />
                        Pain point
                    </Link>
                </li>
                <li>
                    <Link
                        to="/newproject"
                        className={location.pathname === '/newproject' ? 'active' : ''}
                    >
                        <AddNewProjectSVG className="svg-add-new-project" />
                        New Project
                    </Link>
                </li>

                <li className="spacer"></li>
                <LineSVG className="svg-line" />

                {/* Kliknięcie w ten element spowoduje dodanie nowego boardu */}
                <li>
                    <button onClick={handleAddBoard} className="svg-add-new-project-button">
                        <AddNewProjectSVG className="svg-add-new-project" />
                        New Tablo
                    </button>
                </li>

                {/* Lista wszystkich dodanych boardów */}
                {boards.map((board) => (
                    <li key={board.id}>
                        <IconNewProjectSVG className="svg-icon-new-project" />
                        {isEditing === board.id ? (
                            <input
                                type="text"
                                value={editBoardName}
                                onChange={(e) => setEditBoardName(e.target.value)}
                                onBlur={() => handleSaveBoardName(board.id)} // Zapisz po opuszczeniu pola
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        handleSaveBoardName(board.id);
                                    }
                                }}
                                autoFocus
                            />
                        ) : (
                            <Link
                                to="/board"
                                onClick={() => handleEditBoardName(board.id)} // Edycja nazwy po kliknięciu
                                className={location.pathname === '/board' ? 'active' : ''}
                            >
                                {board.name}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
