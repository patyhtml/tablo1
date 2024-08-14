import './create-pain-point.css';
import HeaderApp from '../modules/header-app/header-app';
import Sidebar from '../modules/sidebar/sidebar';
import styles from '../modules/sidebar/sidebar.css';
import { ReactComponent as DividerSVG } from './../assets/img/divider.svg'
import { ReactComponent as PainPointSVG} from './../assets/img/pain-point.svg'


function CreatePainPoint() {
    return (
    

        <div className="cre-new-project-wrapper">
        <HeaderApp />
        <DividerSVG className="svg-divider" />
        <div className="container-wrapper">
               <Sidebar />
               <div className={styles.sidebar}>
            </div>
               <div className="container-wrapper">
        
                <div class="cre-main-content">
                    <div class="cre-chat-column">
                        <div class="cre-chat-header">
                            <h3>Create Point Pain</h3>
                            <PainPointSVG className="svg-pain-point"/>
                            <h4>Drag a point into the image</h4>
                        </div>
                        <div class="cre-chat-content" id="chat-content">
                        </div>
                    </div>
                    <div class="cre-image-column">
                        <div class="image-container" id="image-container">
                        </div>
                        <div class="buttons">
                            <button class="back-to-task">Back to task</button>
                            <button class="save-as">Save as</button>
                        </div>
                        
                    </div>
                </div>

            </div>  
        
            </div>
            </div>
            

    )
}   

export default CreatePainPoint;