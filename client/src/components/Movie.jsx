var React = require("react");

var Movie = React.createClass({

  propTypes: {
    title: React.PropTypes.string.isRequired
  },
  
  render: function() {
    return (
        <div className="movie">
            <a href="http://www.imdb.com/">{this.props.title}<h5>showtimes</h5></a>
        </div>
    );
  }
});

module.exports = Movie;