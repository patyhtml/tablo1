
import './window-chat.css';
import AwatarChatPNG from './../assets/img/awatar-chat.png';
import {ReactComponent as ExpandButtonDefaultSVG} from './../assets/img/expand-button-default.svg'

export const WindowChat = () => {

    return (
        <body>

        <div className="window-chat">
                <div className="project-info">
                <img src={AwatarChatPNG} alt="Awatar Chat" />
                    <h3 className="project-title">Marie Bergman</h3>
                    <span className="project-time">1:30 PM</span>
                    <button className="expand-button" id="expand-button">
                        <ExpandButtonDefaultSVG className="svg-expand-button-default"/>
                    </button>
                </div>
                <p className="project-description" id="project-description">
                    Please change the position of the element at the top to reflect them at the bottom. 
                    I would change the color too. 
                    Additional text to test the expand functionality. 
                    More text to ensure the content overflows and can be expanded.
                </p>
                <div className="project-details">
                    <div className="detail-item">
                    </div>
                </div>
            </div>
            </body>
        



        )



}
export default Header;