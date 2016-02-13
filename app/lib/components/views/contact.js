// LIBS
var React = require('react');

// LAYOUT
var ContentSection = require('../layout/content-section');

var Contact = React.createClass ({
    render: function() {
        return (
            <ContentSection {...this.getProps()}>
                <div className="title">
                    Contact Me
                </div>
                <div className="content--section-data center">

                    <div className="content--section-data-block">
                        <form className="form">
                            <input type="text" className="input" name="name" placeholder="Name" />
                            <input type="text" className="input" name="subject" placeholder="Subject" />
                            <textarea className="textarea" name="message" rows="8" cols="40" placeholder="Please insert your message here! ;)"></textarea>
                            <button className="button" name="button">Send!</button>
                        </form>
                    </div>
                </div>
            </ContentSection>
        );
    },

    getProps: function () {
        var props = {
            className: 'contact',
            id: 'contact'
        };

        return props;
    }
});

module.exports = Contact;
