import React from 'react';
import Card from './Card';
import 'tachyons';

// const CardList = ({myRobots}) =>{
// 	const cardComponent = myRobots.map((robo) => {
// 		return <Card id={robo.id} name={robo.name} email={robo.email}/>
// 	})

// 	//OR we can write 
// 	// const cardComponent = myRobots.map((robo,i) => {
// 	// 	return <Card id={myRobots[i].id} name={myRobots[i].name} email={myRobots[i].email}/>
// 	// })	

// 	return(
// 		<div>
// 			{cardComponent}
// 		</div>
// 	);
// }

//OR we can write CardList as - for simpler version refer above code
const CardList = ({myRobots}) =>{	
	return(
		<div>
			{
				myRobots.map((robo) => {
					return (
						<Card 
							key={robo.id}
							id={robo.id} 
							name={robo.name} 
							email={robo.email}
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;