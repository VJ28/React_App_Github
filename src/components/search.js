import React, {Component} from 'react';
import '../css/search.css';

class SearchContainer extends Component{

	handleSearch(){
		var query = document.getElementById("search-filter").value;
		this.props.handleClick(query);
	}

	render(){
		return (
			<div className="filter-main-container">
				<input type="text" id="search-filter" className="input_box" placeholder="Search Repositories"/>
				<button id="search-btn" className="btn sinline_block" onClick={this.handleSearch.bind(this)}>Search</button>
		     </div>
			);
	}
}

export default SearchContainer;