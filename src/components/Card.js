import React from 'react';
import 'tachyons';

const Card = ({id,name,email}) => {
	return (
		<div className = "tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
			<img alt="robos" src={`https://robohash.org/${id}?size=185x135`} />
			<div>
				<p className="b">{name}</p>
				<p className="f6 line-h">{email}</p> 
			</div>
		</div>
	);
}

//above code can be written like this (below one). But above one more effective
// const Card = (props) => {
// 	return (
// 		<div className = "tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
// 			<img alt="robos" src={`https://robohash.org/${props.id}?size=223x192`} />
// 			<div>
// 				<p>{props.name}</p>
// 				<p>{props.email}</p> 
// 			</div>
// 		</div>
// 	);
// }

//OR we can write like this as well
// const Card = (props) => {
// 	const {id, name, email}  = props;
// 	return (
// 		<div className = "tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
// 			<img alt="robos" src={`https://robohash.org/${id}?size=223x192`} />
// 			<div>
// 				<p>{name}</p>
// 				<p>{email}</p> 
// 			</div>
// 		</div>
// 	);
// }

export default Card;