import React from 'react';
import "/style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const Jumbotron = (props) => {
	return(
		<div>
			<Jumbotron>
        		<h1 className="display-3">New York Times Article Scrubber</h1>
        		<p className="lead">Search for and annotate article of interest!</p>      
			</Jumbotron>
		</div>
	);
}

export default Jumbotron;