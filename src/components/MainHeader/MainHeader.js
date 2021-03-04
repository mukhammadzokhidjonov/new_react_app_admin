import SearchIcon from '../../assets/images/icons/search.svg';
import BellIcon from '../../assets/images/icons/bell.svg';
import Ferdinand from '../../assets/images/jones.png';

import './MainHeader.scss'

const MainHeader = () => {
	return (
			<div className="main-header-wrapper">
				<div className="main-header-left">
					<h2>Tickets</h2>
				</div>
				<div className="main-header-right">
					<div className="header-icons-wrapper">
					<img src={SearchIcon} alt=""/>
					<img src={BellIcon} alt=""/>
				</div>

				<div className="header-hero-wrapper">
					<h4>Jones Ferdinand</h4>
					<img src={Ferdinand} alt=""/>
				</div>
				</div>
				
			</div>
		)
}

export default MainHeader;