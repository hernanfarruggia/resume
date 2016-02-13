// LIBS
var React = require('react');

// LAYOUT
var ContentSection = require('../layout/content-section');

var Education = React.createClass ({
    render: function() {
        return (
            <ContentSection {...this.getProps()}>
                <div className="title">
                    Education
                </div>
                <div className="content--section-data">

                    <div className="content--section-data-block">
                        <div className="subtitle">
                            Computer System Analyst
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
                                background of skills.
                            </p>
                            <p>

                            </p>
                        </div>
                    </div>

                    <div className="content--section-data-block">
                        <div className="subtitle">
                            Communication, Art & Design High School
                            <br />
                            <span className="subtitle_small">Leonidas Gambartes High School Rosario</span>
                        </div>
                        <div className="date">
                            [ Jan 2002 - Dec 2006 ]
                        </div>
                        <div className="description">
                            <p>
                                I've study about Art & Design on my high school.
                                That gave me the base that help me to develop
                                my designer side and encourage me to start create
                                user interfaces, mocks, wireframes and web designs
                                prototypes from an early age.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="content--section-image">
                    <img src="img/graduate_256.png" />
                </div>
            </ContentSection>
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
