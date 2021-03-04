import TableItem from '../../components/MainContent/TableItem/TableItem.js'

import './Table.scss';

import Cruise from '../../assets/images/tom.png';
import Matt from '../../assets/images/matt.png';
import Robert from '../../assets/images/robert.png';
import Christian from '../../assets/images/christian.png';
import Henry from '../../assets/images/henry.png';
import Chris from '../../assets/images/chris.png';
import Sam from '../../assets/images/sam.png';
import Steve from '../../assets/images/steve.png';

const tableInfoArr = [
	{
		id: 0,
		subject: 'Contact Email not Linked',
		updateDay: 'Updated 1 day ago',
		customerName: 'Tom Cruise',
		customerDate: 'on 24.05.2019',
		dateDay: 'May 26, 2019',
		dateHour: '6:30 PM',
		status: 'High',
		imageLink: Cruise,
	},
	{
		id: 1,
		subject: 'Adding Images to Featured Posts',
		updateDay: 'Updated 1 day ago',
		customerName: 'Tom Cruise',
		customerDate: 'on 24.05.2019',
		dateDay: 'May 26, 2019',
		dateHour: '8:00 AM',
		status: 'Low',
		imageLink: Matt,
	},
	{
		id: 2,
		subject: 'When will I be charged this month?',
		updateDay: 'Updated 1 day ago',
		customerName: 'Robert Downey',
		customerDate: 'on 24.05.2019',
		dateDay: 'May 26, 2019',
		dateHour: '7:30 PM',
		status: 'High',
		imageLink: Robert,
	},
	{
		id: 3,
		subject: 'Payment not going through',
		updateDay: 'Updated 2 day ago',
		customerName: 'Christian Bale',
		customerDate: 'on 24.05.2019',
		dateDay: 'May 25, 2019',
		dateHour: '5:00 PM',
		status: 'Normal',
		imageLink: Christian,
	},
	{
		id: 4,
		subject: 'Unable to add replies',
		updateDay: 'Updated 2 day ago',
		customerName: 'Henry Cavil',
		customerDate: 'on 24.05.2019',
		dateDay: 'May 25, 2019',
		dateHour: '4:00 PM',
		status: 'High',
		imageLink: Henry,
	},
	{
		id: 5,
		subject: 'Downtime since last week',
		updateDay: 'Updated 3 day ago',
		customerName: 'Chris Evans',
		customerDate: 'on 23.05.2019',
		dateDay: 'May 25, 2019',
		dateHour: '2:00 PM',
		status: 'Normal',
		imageLink: Chris,
	},
	{
		id: 6,
		subject: 'Referral Bonus',
		updateDay: 'Updated 4 day ago',
		customerName: 'Sam Smith',
		customerDate: 'on 22.05.2019',
		dateDay: 'May 25, 2019',
		dateHour: '11:30 AM',
		status: 'low',
		imageLink: Sam,
	},
	{
		id: 7,
		subject: 'How do I change my password?',
		updateDay: 'Updated 6 day ago',
		customerName: 'Steve Rogers',
		customerDate: 'on 21.05.2019',
		dateDay: 'May 24, 2019',
		dateHour: '1:00 PM',
		status: 'Normal',
		imageLink: Steve,
	},
]



const Table = () => {
	return (
		<div className="table">
				<h2>Table</h2>
				{
					tableInfoArr.map((item) => (
						<TableItem
							id={item.id}
							subject={item.subject}
							updateDay={item.updateDay}
							customerName={item.customerName}
							customerDate={item.customerDate}
							dateDay={item.dateDay}
							dateHour={item.dateHour}
							status={item.status}
							imageLink={item.imageLink}
						/>
					))
				}
		</div>

	)
}

export default Table;