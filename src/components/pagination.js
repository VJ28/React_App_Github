import React, {Component} from 'react';
import '../css/pagination.css';

class Pagination extends Component{

	handleClick(page){
		this.props.handleClick(page);
	}

	render(){
		let disablePrev = false;
		if(this.props.currentPage === 1)
			disablePrev = true;
		return (
			<div className="pagination-container">
				<button disabled={disablePrev} className="btn inline_block prev-btn" onClick={this.handleClick.bind(this, this.props.currentPage-1)}>{'<<<<'}</button>
				<div className="pagination-label inline_block">Page <span>{this.props.currentPage}</span></div>
				<button className="btn inline_block next-btn" onClick={this.handleClick.bind(this, this.props.currentPage+1)}>{'>>>>'}</button>
		     </div>
			);
	}
}

export default Pagination;