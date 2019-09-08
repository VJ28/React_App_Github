import React, {Component} from 'react';
import '../css/details.css';

class DetailsContainer extends Component{

	render(){
		return (
			<div className="main-container">
		      	<div className="img-container">
		      		<img src={this.props.Image} alt={this.props.Name}/>
		      	</div>
		      	<div className="details-container">
		      		<div className="repo-name">
		      			{this.props.Name}
		      		</div>
		      		<div className="owner-name">Owner: {this.props.Owner}</div>
		      		<div className="fork-count">Fork Count: {this.props.Fork}</div>
					<div className="star-count">Star Count: {this.props.Star}</div>      		
		      	</div>
		     </div>
			);
	}
}

export default DetailsContainer;