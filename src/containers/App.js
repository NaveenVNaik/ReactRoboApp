import React, { Component } from 'react';
import CardList from '../components/CardList';
import 'tachyons';
import SearchBox from '../components/SearchBox';
//import Scroll from '../components/Scroll';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';
import './App.css'
import Avatar from 'material-ui/Avatar';


const style = {margin: 5};

class App extends Component {
	constructor(){
		super();
		this.state = {
			robots : [],
			searchField : ''
		}
	}

	componentDidMount(){
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => response.json())
				.then(users => this.setState({robots : users}));
	}

	onSearchChange = (event) => {
		this.setState( { searchField : event.target.value }	)
	}

	render(){
			const {robots, searchField} = this.state;
			const filteredRobots = 	robots.filter(robo => {
					return robo.name.toLowerCase().includes(searchField.toLowerCase());
				}
			)
	// 	//Or we can write like  - instead of destructuring robots and searchField we can use this.state.robots
	// 	// const filteredRobots = 	this.state.robots.filter(robo => {
	// 	// 		return robo.name.toLowerCase().includes(searchField.toLowerCase());
	// 	// 	}
	// 	// )

		if(!robots.length){
				return (
						  <div className="centerLoad">
						    	<MuiThemeProvider>
				    				<CircularProgress size={60} thickness={7} />
	  							</MuiThemeProvider>
						  </div>
				);
		} else {
			return (

				// //<div className="">
				// 	<div className =" bw1 ba bw1 b--white pa1 mt2 ml2 mr2">
				// 		<div class="flex justify-between">
				// 		  	<div class=" w-25 pa2">
				// 			  	<MuiThemeProvider>
				// 			   		<Avatar
				// 			          size={40}
				// 			          style={style}
				// 			        >
				// 			          N
				// 			        </Avatar>
				// 			    </MuiThemeProvider>
				// 		  	</div>
				// 		  	<div class="tc w-25 pa2">
				// 		    	<p className="washed-blue f2 line-h">Robo Friends</p>
				// 				<SearchBox searchChange={this.onSearchChange} />
				// 		  	</div>
				// 		  	<div class=" w-25 pa2">
				// 		  	</div>
				// 		</div>
				// 	</div>						

				// 	<div className="tc ba bw1 b--white br3 pa1 ma2">
				// 		<Scroll>
				// 			<CardList myRobots={filteredRobots} />
				// 		</Scroll>
				// 	</div>
				// </div>

				<div>
					<div class="flex vh-100 ma2 ba bw1 b--white">
						<div class="w-20-ns ma1 ba bw1 b--white">
							<MuiThemeProvider>
							   		<Avatar
							          size={40}
							          style={style}
							        >
							          N
							        </Avatar>
							    </MuiThemeProvider>
						</div>
						<div class="flex flex-column w-80 ma1 ba bw1 b--white">
							<div class="h4-ns ma2 ba bw1 b--white tc">
								<p className="washed-blue f3 line-h">Robo Friends</p>
								<SearchBox searchChange={this.onSearchChange} />
							</div>
							<div class="h-100 ma2 ba bw1 b--white" style={{overflow:'scroll'}}>
					 				<CardList myRobots={filteredRobots} />
					 		</div>
						</div>
					</div>

					<div class="flex h4-ns ma2 ba bw1 b--white">
						<div class="w-100 ma1 ba bw1 b--white">
							
						</div>
					</div>
				</div>
			);
		}		

	}

}

//or we can write like as well by using props
// const App = (props) => {
// 	const robos = props.robos;
// 	return (
// 		<CardList myRobots={robos} />
// 	);
// }

export default App;