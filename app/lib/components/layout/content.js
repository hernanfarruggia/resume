// LIBS
var React = require('react');

var Content = React.createClass ({
    propTypes: {
        children: React.PropTypes.node
    },

    render: function () {
        return (
            <div className="content">
                {this.props.children}
            </div>
        );
    }
});

module.exports = Content;
