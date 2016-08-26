import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

class App extends React.Component {
	constructor(){
		super();
		this.state = {txt: ''};
		this.update = this.update.bind(this);
	}
	update(e){
		this.setState({txt: e.target.value})
	}
	render(){
    return (
      <div>
        <h1>React Base App </h1>
        {this.state.txt}
      </div>
    )
	}
}

const main_app = document.getElementById('main');



ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>

    </Route>
  </Router>, main_app
);