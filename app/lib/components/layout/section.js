// LIBS
var React = require('react');
var classNames = require('classnames');

var Section = React.createClass ({
    propTypes: {
        children: React.PropTypes.node,
        className: React.PropTypes.string,
        id: React.PropTypes.string
    },

    render: function () {
        return (
            <div className="row">
                <div {...this.getProps()}>
                    {this.props.children}
                </div>
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
            'twelve columns': true,
            'section': true
        };

        classes[this.props.className] = (this.props.className);

        return classNames(classes);
    }
});

module.exports = Section;
