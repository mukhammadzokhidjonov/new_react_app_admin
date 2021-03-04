import { useState } from 'react';

import './Ideas.scss';

const Ideas = () => {

 const [count, changeCount] = useState(0);

 const decrement = () => {
 	changeCount(count - 1)
 }
 
 const increment = () => {
 	changeCount(count + 1)
 }

	return (
		<div className="ideas">
			<h1>Ideala kere bosa ss</h1>

			<h2>Raqam: {count}</h2>
			<button onClick = {decrement}>-</button>
			<button onClick = {increment}>+</button>

		</div>

	)
}

export default Ideas;