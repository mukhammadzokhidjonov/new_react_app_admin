

import {Link} from 'react-router-dom';

import SidebarButton from '../../components/SidebarButton/SidebarButton.js';
import {
	OverviewIcon,
	TicketsIcon,
	IdeasIcon,
	ContactsIcon,
	AgentsIcon,
	ArticlesIcon,
	SettingsIcon,
	SubscriptionIcon,
} from '../../assets/icons/icons.js';

import './Sidebar.scss';

import SidebarLogoIcon from '../../assets/icons/logo.svg';

const Sidebar = ({ activePage, setActivePage }) => {

	return (
		<div className="sidebar">
		<a href="javascript:void(0)" className="sidebar-logo">
				<img src={SidebarLogoIcon} alt="" />
		   	<h2>Dashboard Kit</h2>
		   	
		   </a>

			<Link to="/overview" onClick={() => setActivePage('overview')}>
				<SidebarButton
				title="Overview"
				icon={<OverviewIcon/>}
				active={activePage == 'overview'}
			/>
			</Link>
			<Link to="/tickets" onClick={() => setActivePage('tickets')}>
				<SidebarButton
				title="Tickets"
				icon={<TicketsIcon/>}
				active={activePage == 'tickets'}
			/>
			</Link>
			<Link to="/ideas" onClick={() => setActivePage('ideas')}>
				<SidebarButton
				title="Ideas"
				icon={<IdeasIcon/>}
				active={activePage == 'ideas'}
			/>
			</Link>
			<Link to="/contacts" onClick={() => setActivePage('contacts')}>
			<SidebarButton
			title="Contacts"
			icon={<ContactsIcon/>}
			active={activePage == 'contacts'}
			/>
			</Link>
			<Link to="/agents" onClick={() => setActivePage('agents')}>
				<SidebarButton
				title="Agents"
				icon={<AgentsIcon/>}
				active={activePage == 'agents'}
			/>
			</Link>
			<Link to="/articles" onClick={() => setActivePage('articles')}>
				<SidebarButton
				title="Articles"
				icon={<ArticlesIcon/>}
				active={activePage == 'articles'}
			/>
			</Link>
			<Link to="/settings" onClick={() => setActivePage('settings')}>
				<SidebarButton
				title="Settings"
				icon={<SettingsIcon/>}
				active={activePage == 'settings'}
			/>
			</Link>
				<Link to="/subscription" onClick={() => setActivePage('subscription')}>
				<SidebarButton
				title="Subscription"
				icon={<SubscriptionIcon/>}
				active={activePage == 'subscription'}
			/>
			</Link>
			
		</div>

	)
}

export default Sidebar;

