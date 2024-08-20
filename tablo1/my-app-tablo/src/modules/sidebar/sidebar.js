import { Link } from 'react-router-dom';
import './sidebar.css';
import { ReactComponent as IconTableSVG } from './../../assets/img/icon-table.svg'
import { ReactComponent as CalendarSVG } from './../../assets/img/icon-calendar.svg'
import { ReactComponent as LineSVG } from './../../assets/img/line.svg'
import { ReactComponent as AddNewProjectSVG } from './../../assets/img/add-new-project.svg'
import { ReactComponent as IconNewProjectSVG } from './../../assets/img/icon-new-project.svg'
export const Sidebar = () => {

    return (

        <aside className="sidebar">
            <ul>

                <li> <Link to="/board"> <IconTableSVG className="svg-icon-table" />Table</Link></li>
                <li> <Link to="/createpainpoint"><IconNewProjectSVG className="svg-icon-new-project" />Pain point</Link></li>
                <li><CalendarSVG className="svg-calendar" />Calendar</li>
                <li className="spacer"></li>
                <LineSVG className="svg-line" />
                <li>
                    <Link to="/newproject"> New Project <AddNewProjectSVG className="svg-add-new-project" /> </Link></li>
                <li><IconNewProjectSVG className="svg-icon-new-project" />Creative logo</li>
                <li><IconNewProjectSVG className="svg-icon-new-project" />Creative logo</li>
            </ul>
        </aside>




    )



}
export default Sidebar;