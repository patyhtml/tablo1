import { ReactComponent as IconTableSVG} from './../../assets/img/icon-table.svg'
import { ReactComponent as CalendarSVG} from './../../assets/img/icon-calendar.svg'
import { ReactComponent as LineSVG} from './../../assets/img/line.svg'
import { ReactComponent as AddNewProjectSVG} from './../../assets/img/add-new-project.svg'
import { ReactComponent as IconNewProjectSVG} from './../../assets/img/icon-new-project.svg'
export const Sidebar = () => {

    return (

        <aside className="sidebar">
        <ul>
        <li><IconTableSVG className="svg-icon-table"/>Table</li>
        <li><IconNewProjectSVG className="svg-icon-new-project"/>Pain point</li>
            <li><CalendarSVG className="svg-calendar"/>Calendar</li>
            <div className="spacer"></div>
            <LineSVG className="svg-line"/>
            <li>New Project<AddNewProjectSVG className="svg-add-new-project"/></li>
            <li><IconNewProjectSVG className="svg-icon-new-project"/>Creative logo</li>
            <li><IconNewProjectSVG className="svg-icon-new-project"/>Creative logo</li>
        </ul>
    </aside>
        
    
    
    
    )
    
    
    
    }
    export default Sidebar;