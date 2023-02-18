import React from 'react';

const Logfiter = (props) => {

	const changeShow = (e) => {
		props.onChangeYear(+e.target.value);
	};
	console.log(props.year);

	return (
		<div>
			年份: <select onChange={changeShow} value={props.year}>
			<option value="2023">2023</option>
			<option value="2022">2022</option>
			<option value="2021">2021</option>
		</select>
		</div>
	);
};

export default Logfiter;
