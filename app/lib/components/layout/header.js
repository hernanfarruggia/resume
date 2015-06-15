// LIBS
var React = require('react');

var Header = React.createClass ({
    propTypes: {
        children: React.PropTypes.node
    },

    render: function () {
        return (
            <div className="header">
                {this.props.children}
            </div>
        );
    }
});

module.exports = Header;
