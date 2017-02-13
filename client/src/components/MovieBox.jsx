var React = require("react");

var OpeningList = require('./OpeningList.jsx');

var movies = [
    {id: 1, title: 'Black Swan'},
    {id: 2, title: 'Pokemon: The Movie'},
    {id: 3, title: 'Federico and the Watermelon'}
];

var MovieBox = React.createClass({

  getInitialState: function() {
    return { data: movies };
  },
  
  render: function() {
    return (
        <div className="movie-box">
        <p></p>
            <OpeningList data={ this.state.data }/>
        </div>
    );
  }
});

module.exports = MovieBox;