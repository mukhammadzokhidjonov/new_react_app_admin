


import Table from './../../containers/Table/Table.js';
import MainHeader from '../../components/MainHeader/MainHeader.js';
import './Tickets.scss';

const Tickets = () => {
	return (
		<div className="tickets-page">
			<MainHeader/>
			
			<Table/>
		</div>

	)
}

export default Tickets;