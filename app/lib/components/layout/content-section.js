// LIBS
var React = require('react');
var classNames = require('classnames');

var ContentSection = React.createClass ({
    propTypes: {
        children: React.PropTypes.node,
        className: React.PropTypes.string,
        id: React.PropTypes.string
    },

    render: function () {
        return (
            <div {...this.getProps()}>
                {this.props.children}
            </div>
        );
    },

    getProps: function () {
        var props = {
            className: this.getClass(),
            id: this.props.id
        };

        return props;
    },

    getClass: function () {
        var classes = {
            'content-section': true
        };

        classes[this.props.className] = (this.props.className);

        return classNames(classes);
    }
});

module.exports = ContentSection;
