var React = require('react');
var ReactDOM = require('react-dom');

var MovieBox = require('./components/MovieBox.jsx');

window.onload = function(){
  ReactDOM.render(
    <MovieBox />,
    document.getElementById('app')
  );
}
