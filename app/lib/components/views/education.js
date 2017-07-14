// LIBS
var React = require('react');

// LAYOUT
var Section = require('../layout/section');

var Education = React.createClass ({
    render: function() {
        return (
            <Section {...this.getProps()}>
                <h2 className="title">
                    Education
                </h2>
                <div className="section-data">

                    <div className="section-data-block">
                        <div className="subtitle">
                            Nanodegree Full Stack Developer
                            <br />
                            <span className="subtitle_small">Udacity</span>
                        </div>
                        <div className="date">
                            [ Jun 2017 - Present ]
                        </div>
                        <div className="description">
                            <p>
                                I'm improving my knowledge by learning Python and Full Stack techniques.
                                Is based in 5 projects during a complete year of study.
                            </p>
                            <p>

                            </p>
                        </div>
                    </div>

                    <div className="section-data-block">
                        <div className="subtitle">
                            Bachelor in Information System Analyst
                            <br />
                            <span className="subtitle_small">Belgrano Institute Rosario</span>
                        </div>
                        <div className="date">
                            [ Jan 2007 - Dec 2009 ]
                        </div>
                        <div className="description">
                            <p>
                                I've study for 3 years the Computer System Analyst carreer
                                to improve my knowleadges and create a solid and strong
                                background of skills. All courses approved but title pending until
                                I present my thesis.
                            </p>
                            <p>

                            </p>
                        </div>
                    </div>
                </div>

                <div className="section-image">
                    <img src="img/graduate_256.png" />
                </div>
            </Section>
        );
    },

    getProps: function () {
        var props = {
            className: 'education',
            id: 'education'
        };

        return props;
    }
});

module.exports = Education;
