import React from 'react';
import "./style.css";


const Home = (props) =>{
	return (
		<div>
		
			<button onClick = {props.handleLogout}>Log Out</button>
		</div>
	);
}

export default Home;