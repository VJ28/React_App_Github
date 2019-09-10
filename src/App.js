import React from 'react';
import './App.css';
import DetailsContainer from './components/details';
import FiltersContainer from './components/filter-container';
import SearchContainer from './components/search';
import Pagination from './components/pagination';
import Loader from './components/loader';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			sort: "desc",
			page: 1,
			language: "javascript",
			searchQuery: "",
			results: [],
			totalRecords: 0,
			isFetching: true
		}
		this.getGitHubData();
	}
	createUrl(){
		let {searchQuery, language, sort, page} = this.state;
		let url = "https://api.github.com/search/repositories?q="
		if(searchQuery !== "")
			url += searchQuery + "+";
		url += `language:${language}&page=${page}&per_page=10&sort=stars&order=${sort}`;
		return url;
	}
	getGitHubData(){
		fetch(this.createUrl())
			.then(response => response.json())
			.then(res => {
				this.setState({...this.state, results: res.items, totalRecords: res.total_count, isFetching: false});
			})
			.catch(err => {
				alert(err);
			})
	}

	searchResults(query){
		if(query !== "")
			this.setState({...this.state, searchQuery: query+"+", page: 1});
	}

	changePagination(selectedPage){
		if(selectedPage !== 0){
			this.setState({...this.state, page: selectedPage});
		}
	}

	handleFilters(type, selection){
		if(type==="lang")
			this.setState({...this.state, language: selection, page: 1});
		else
			this.setState({...this.state, sort: selection, page: 1});
	}

	resetFilter(){
		document.getElementById("search-filter").value = "";
		document.getElementById("lang-selector").value = "javascript";
		document.getElementById("sort-selector").value = "desc";
		this.setState({...this.state, sort: "desc", page: 1, language: "javascript", searchQuery: ""});
	}

	componentDidUpdate(oldProps, newProps) {
	    if (this.state.page !== newProps.page || this.state.searchQuery !== newProps.searchQuery
	    	|| this.state.language !== newProps.language || this.state.sort !== newProps.sort) {
	        this.getGitHubData();
	    }
	}

	renderRepoList(){
		let listElements=[];
		if(this.state.results.length > 0 && !this.state.isFetching){
			listElements.push(`${this.state.totalRecords} Records Found!`);
			listElements = [...listElements, this.state.results.map(
				data => {
					return <DetailsContainer key={data.id} Image={data.owner.avatar_url} Name={data.name} Owner={data.owner.login} Fork={data.forks} Star={data.stargazers_count}/>
				})];
		} else if(!this.state.isFetching){
			listElements.push("No Records Found!");
		} else{
			return <Loader/>;
		}

		return (
			listElements
		);
	}

	render(){
		return (
		    <div className="App">
		      	<SearchContainer handleClick={this.searchResults.bind(this)}/>
		      	<FiltersContainer resetFilter={this.resetFilter.bind(this)} handleChange={this.handleFilters.bind(this)}/>
		 		{this.renderRepoList()}
		 		{this.state.results.length > 0 ?
		 		<Pagination currentPage={this.state.page} handleClick={this.changePagination.bind(this)}/> : ""}
		    </div>
		);
	}
}

export default App;
