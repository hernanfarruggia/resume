// LIBS
var React = require('react');

var Footer = React.createClass ({
    propTypes: {
        children: React.PropTypes.node
    },

    render: function () {
        return (
            <div className="footer">
                {this.props.children}
            </div>
        );
    }
});

module.exports = Footer;
