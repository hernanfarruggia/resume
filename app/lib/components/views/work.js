// LIBS
var React = require('react');

// LAYOUT
var Section = require('../layout/section');

var Work = React.createClass ({
    render: function() {
        return (
            <Section {...this.getProps()}>
                <h2 className="title">
                    Work Experience
                </h2>
                <div className="section-data">

                    <div className="section-data-block">
                        <div className="subtitle">
                            Tech Lead Frontend
                            <br />
                            <span className="subtitle_small">GlobalLogic Latin America</span>
                        </div>
                        <div className="date">
                            [ Jul 2017 - Present ]
                        </div>
                        <div className="description">
                            <p>
                                I&#39;m performing as Tech Lead of the team in my current project. My goals are to
                                keep the work in track, assist team mates when needed, keep a good work environment
                                and a continuos worflow and try to get the better from each one of them.
                            </p>
                        </div>
                    </div>

                    <div className="section-data-block">
                        <div className="subtitle">
                            Sr. Frontend Developer
                            <br />
                            <span className="subtitle_small">Global Logic Latin America</span>
                        </div>
                        <div className="date">
                            [ Aug 2015 - Present ]
                        </div>
                        <div className="description">
                            <p>
                                I&#39;ve been developing web platforms across the more of 4 different projects
                                in the past 2 years. I&#39;m in constant communication with the team and the client.
                                We as a team, implemented and designed solutions for client requirements,
                                using agile methodologies to keep track of the entire dev process. Im my current
                                project, I&#39;m using technologies as Javascript, Angular, Lodash, HTML and CSS (LESS).
                            </p>
                        </div>
                    </div>

                    <div className="section-data-block">
                        <div className="subtitle">
                            Frontend Developer
                            <br />
                            <span className="subtitle_small">Globant</span>
                        </div>
                        <div className="date">
                            [ Jun 2014 - Aug 2015 ]
                        </div>
                        <div className="description">
                            <p>
                                I&#39;ve developed web apps with mobile adapt using
                                many different technologies like React JS, jQuery,
                                JavaScript, HTML 5, CSS 3, SASS, etc.
                            </p>
                            <p>
                                I worked in projects for companies like:
                                <br /><br />
                                - Soutwhest Airlines
                                <br />
                                - Mindshare
                                <br />
                                - Pearson Editorial
                            </p>
                        </div>
                    </div>

                    <div className="section-data-block">
                        <div className="subtitle">
                            Web Developer
                            <br />
                            <span className="subtitle_small">7L Freight</span>
                        </div>
                        <div className="date">
                            [ Oct 2010 - Apr 2012 ]
                        </div>
                        <div className="description">
                            <p>
                                PHP and JavasScrip Developer. My work was to
                                create Web Services connections to read info
                                from external servers that will be used later
                                by our system to perfom internal functionalities.
                            </p>
                            <p>
                                Also used MySql databases and perform different
                                UI scripts and updates on the website and
                                internal tools.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section-image">
                    <img src="img/work_256.png" />
                </div>
            </Section>
        );
    },

    getProps: function () {
        var props = {
            className: 'work',
            id: 'work'
        };

        return props;
    }
});

module.exports = Work;
