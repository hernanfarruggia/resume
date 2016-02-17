// LIBS
var React = require('react');

// LAYOUT
var Section = require('../layout/section');

var Main = React.createClass ({
    render: function() {
        return (
            <Section {...this.getProps()}>
                <div className="main-message">
                    <h1>Front End Developer</h1>
                </div>
            </Section>
        );
    },

    getProps: function () {
        var props = {
            className: 'main',
            id: 'main'
        };

        return props;
    }
});

module.exports = Main;
