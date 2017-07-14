// LIBS
var React = require('react');

// LAYOUT
var Section = require('../layout/section');

// COMPONENTS
var Skill = require('../others/skill');

var Skills = React.createClass ({
    render: function() {
        return (
            <Section {...this.getProps()}>
                <h2 className="title">
                    Skills rates
                </h2>
                <div className="section-data">

                    <div className="section-data-block">
                        <div className="subtitle">
                            General Skills
                        </div>
                        <div className="skills-block">

                            <Skill title="Javascript" stars="8" />
                            <Skill title="ES6" stars="7" />
                            <Skill title="React JS" stars="8" />
                            <Skill title="Angular JS" stars="8" />
                            <Skill title="Build Tools" stars="7" />
                            <Skill title="HTML" stars="9" />
                            <Skill title="CSS" stars="8" />
                            <Skill title="SASS/LESS" stars="7" />
                            <Skill title="Git" stars="7" />
                            <Skill title="Agile Methodologies" stars="8" />
                        </div>
                    </div>

                    <div className="section-data-block">
                        <div className="subtitle">
                            Languages
                        </div>
                        <div className="skills-block">

                            <Skill title="Spanish" stars="10" />
                            <Skill title="English" stars="8" />
                            <Skill title="Portuguese" stars="5" />
                        </div>
                    </div>

                </div>

                <div className="section-image">
                    <img src="img/skills_256.png" />
                </div>
            </Section>
        );
    },

    getProps: function () {
        var props = {
            className: 'skills',
            id: 'skills'
        };

        return props;
    }
});

module.exports = Skills;
