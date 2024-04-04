import React from 'react';
import { FaStar } from 'react-icons/fa';

const Rating = ({ value }) => {
	const stars = [];
	for (let i = 0; i < 5; i++) {
			stars.push(
					<FaStar
							key = {i}
							className={`star ${i < value ? 'text-yellow-500' : 'text-gray-400'}`}
							size={15}
					/>
			)
	}

	return (
			<div className="flex items-center">
				{stars}
				<span className="ml-2 normal-nums">{value}</span>
			</div>
	);
};

export default Rating;
