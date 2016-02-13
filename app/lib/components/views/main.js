// LIBS
var React = require('react');

// LAYOUT
var ContentSection = require('../layout/content-section');

var Main = React.createClass ({
    render: function() {
        return (
            <ContentSection {...this.getProps()}>
                <div className="main-message">
                    <span className="main-message-big">
                        Front End Developer
                    </span>
                    <br />
                    <span className="main-message-small">
                        With some Back End knowleadge :)
                    </span>
                </div>
            </ContentSection>
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
