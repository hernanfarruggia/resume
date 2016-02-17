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
                            Front End Developer
                            <br />
                            <span className="subtitle_small">Global Logic Latin America</span>
                        </div>
                        <div className="date">
                            [ Aug 2015 - Present ]
                        </div>
                        <div className="description">
                            <p>
                                I&#39;m developing apps as a part of a UI Team using Angular JS
                                as a main development framework. Adding more challenges to 
                                my career.
                            </p>
                        </div>
                    </div>

                    <div className="section-data-block">
                        <div className="subtitle">
                            Front End Developer
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
                            Full Stack Developer & Designer
                            <br />
                            <span className="subtitle_small">Estudio Syncro</span>
                        </div>
                        <div className="date">
                            [ Sep 2011 - Jun 2014 ]
                        </div>
                        <div className="description">
                            <p>
                                Websites and app devlopment. I&#39;ve play different
                                roles during this period, since Busines Alanlyst,
                                Designer or Developer to implementation and management.
                            </p>
                            <p>
                                Working as a freelancer I&#39;ve improved my skills
                                on many different fields, and learn to develop
                                the entire process of a project.
                            </p>
                        </div>
                    </div>

                    <div className="section-data-block">
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

                    <div className="section-data-block">
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
                                maintenance of the main website. I&#39;ve worked
                                with technologies like PHP, JavaScript,
                                MySql and Apache Server.
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
