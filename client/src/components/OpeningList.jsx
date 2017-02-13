var React = require('react');

var Movie = require('./Movie.jsx');

var OpeningList = React.createClass({

  propTypes: {
    data: React.PropTypes.array.isRequired
  },

  render: function() {

    var movieNodes = this.props.data.map(function(movie){
        return(
            <Movie title={ movie.title } key={ movie.id }>
            </Movie>

          );
    });

    return (
        <div className="opening-list">
            <p>UK Opening This Week</p>

            { movieNodes }
            <button>Get Showtimes</button>
        </div>
      );
  }
});

module.exports = OpeningList;