// LIBS
var React = require('react');

// LAYOUT
var Section = require('../layout/section');

var Contact = React.createClass ({
    render: function() {
        return (
            <Section {...this.getProps()}>
                <h2 className="title">
                    Contact Me
                </h2>
                <div className="section-data">

                    <div className="section-data-block">
                        <h3>Hernán Farruggia</h3>
                        <div className="">
                            hernan.farruggia@gmail.com
                            <br />
                            http://github.com/hernanfarruggia
                            <br />
                            +5493413214002
                            <br />
                            Rosario, Santa Fe, Argentina
                        </div>
                    </div>
                </div>
                <div className="section-image">
                    <img className="perfil" src="img/map.png" />
                </div>
            </Section>
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
