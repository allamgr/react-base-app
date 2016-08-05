var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var PureRenderMixin = require('react-addons-pure-render-mixin');

var browserHistory = ReactRouter.browserHistory;
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var Link = ReactRouter.Link;

var App = React.createClass({
//   getInitialState: function(){
//   },
  componentWillMount: function(){
  },
  render:function(){
    return (
      <div>
      </div>
    )
  }
});

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
    
  </Router>, document.getElementById('main')
);