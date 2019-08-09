import React, {Component} from 'react';
import './App.css';

class YouTube extends Component {
	render(){
		return (
			<div className="main">
			<div>
				<button >GET YouTube VIDEOS</button>
			</div>
			<div className="youtube">
				I am from Youtube.
				<iframe width="560" height="315" src="https://www.youtube.com/embed/iCrRJ_1-Nbg" 
				frameborder="0" 
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
				allowfullscreen>
				</iframe>
			</div>	
			</div>	
		);
	}	
}

export default YouTube;