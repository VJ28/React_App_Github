import React from 'react';
import loaderGIF from '../loader.gif';

class Loader extends React.Component{
	render(){
		return (
				<img src={loaderGIF} alt="loader"/>
			)
	}
}

export default Loader