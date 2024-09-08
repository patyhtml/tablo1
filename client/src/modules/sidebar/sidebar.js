import { Link, useLocation } from 'react-router-dom';
import './sidebar.css';

import { ReactComponent as IconTableSVG } from './../../assets/img/icon-table.svg';
import { ReactComponent as LineSVG } from './../../assets/img/line.svg';
import { ReactComponent as AddNewProjectSVG } from './../../assets/img/add-new-project.svg';
import { ReactComponent as IconNewProjectSVG } from './../../assets/img/icon-new-project.svg';

export const Sidebar = () => {
    const location = useLocation(); // Hook do pobrania aktualnej ścieżki

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

                <li>
                    <Link
                        to="/board"
                        className={location.pathname === '/board' ? 'active' : ''}
                    >
                        <AddNewProjectSVG className="svg-add-new-project" />
                        New Tablo
                    </Link>
                </li>
                <li>
                    <IconNewProjectSVG className="svg-icon-new-project" />
                    Creative logo
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
