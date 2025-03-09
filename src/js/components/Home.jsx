import React from "react";
import Counter from "Counter";
// import '../styles/index.css';
import 'relative/path/to/stylesheet.scss';

//create your first component
const Home = () => {
	let counter = 0;
	const root = ReactDOM.createRoot(document.getElementById('app'));

	setInterval(()=>{
		const one = Math.floor(counter/1);
		const two = Math.floor(counter/10);
		const three = Math.floor(counter/100);
		const four = Math.floor(counter/1000);
		counter++;

		root.render(
			<SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four}/>
		);
	},1000);
	

};

export default Home;