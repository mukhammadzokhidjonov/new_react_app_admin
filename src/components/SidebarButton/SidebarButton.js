

import './SidebarButton.scss'; 

const SidebarButton = ({ title, icon, active }) => {
	console.log(active)
    return (
        <div className="SidebarButton">

         <button className={`sidebar-btn ${active ? 'active' : ''}`}>
             <div className="btn-icon">{icon}</div>
            <span>{title}</span>
         </button>
        
        
        </div>
    )
}

export default SidebarButton;