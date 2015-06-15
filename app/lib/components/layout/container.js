// LIBS
var React = require('react');

var Container = React.createClass ({
    propTypes: {
        children: React.PropTypes.node
    },

    render: function () {
        return (
            <div className="container">
                {this.props.children}
            </div>
        );
    }
});

module.exports = Container;
