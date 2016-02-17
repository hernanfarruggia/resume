// LIBS
var React = require('react');

var Skill = React.createClass({
	propTypes: {
		title: React.PropTypes.string,
		stars: React.PropTypes.number
	},

	render: function() {
		return (
			<div className="skills-block-item">
                <div className="skills-block-item_title">
                    {this.props.title}
                </div>
                <ul className="skills-block-item_stars">
                	{this.renderStars()}
                </ul>
            </div>
		);
	},

	renderStars: function () {
		var stars = [];

		for (i = 0; i <= 9; i++) {
			if (i < this.props.stars) {
				stars.push(<li className="star star-yellow"></li>);
			} else {
				stars.push(<li className="star star-gray"></li>);
			}
		}

		return stars;
	}
});

module.exports = Skill;