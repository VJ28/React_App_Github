import React, {Component} from 'react';
import '../css/filter.css';

class FiltersContainer extends Component{

	handleChange(event, type){
		let val = event.target.value;
		this.props.handleChange(type, val);
	}

	render(){
		return (
			<div className="filter-main-container">
				<div className="lang-filter inline_block">
					Select Language: 
					<select onChange={ e => this.handleChange(e, 'lang')}>
						<option value="javascript">JavaScript</option>
						<option value="go">Golang</option>
						<option value="php">PHP</option>
						<option value="react">ReactJs</option>
					</select>
				</div>
				<div className="sort-filter inline_block">
					Popularity: 
					<select onChange={ e => this.handleChange(e, 'sort')}>
						<option value="desc">Descending</option>
						<option value="asc">Ascending</option>
					</select>
				</div>
		     </div>
			);
	}
}

export default FiltersContainer;