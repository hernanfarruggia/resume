// LIBS
var React = require('react');

// LAYOUT
var ContentSection = require('../layout/content-section');

var Work = React.createClass ({
    render: function() {
        return (
            <ContentSection {...this.getProps()}>
                <div className="title">
                    Work Experience
                </div>
                <div className="content--section-data">

                    <div className="content--section-data-block">
                        <div className="subtitle">
                            Front End Developer
                            <br />
                            <span className="subtitle_small">Globant</span>
                        </div>
                        <div className="date">
                            [ Jun 2014 - Present ]
                        </div>
                        <div className="description">
                            <p>
                                I've developed web apps with mobile adapt using
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

                    <div className="content--section-data-block">
                        <div className="subtitle">
                            Full Stack Developer & Designer
                            <br />
                            <span className="subtitle_small">Estudio Syncro</span>
                        </div>
                        <div className="date">
                            [ Sep 2011 - Jun 2014 ]
                        </div>
                        <div className="description">
                            <p>
                                Websites and app devlopment. I've play different
                                roles during this period, since Busines Alanlyst,
                                Designer or Developer to implementation and management.
                            </p>
                            <p>
                                Working as a freelancer I've improved my skills
                                on many different fields, and learn to develop
                                the entire process of a project.
                            </p>
                        </div>
                    </div>

                    <div className="content--section-data-block">
                        <div className="subtitle">
                            PHP Programmer
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

                    <div className="content--section-data-block">
                        <div className="subtitle">
                            Web Developer
                            <br />
                            <span className="subtitle_small">SoyTuAuto.com</span>
                        </div>
                        <div className="date">
                            [ Dec 2009 - Oct 2010 ]
                        </div>
                        <div className="description">
                            <p>
                                I was in charge of the development and
                                maintenance of the main website. I've worked
                                with technologies like PHP, JavaScript,
                                MySql and Apache Server.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="content--section-image">
                    <img src="img/work_256.png" />
                </div>
            </ContentSection>
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
