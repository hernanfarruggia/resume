// LIBS
var React = require('react');

// LAYOUT
var Section = require('../layout/section');

var About = React.createClass ({
    render: function() {
        return (
            <Section {...this.getProps()}>
                <h2 className="title">
                    About Me
                </h2>
                <div className="section-data">

                    <div className="section-data-block">
                        <div className="description">
                            <p>
                                I like to think about myself as an a proactive
                                person, not only in my work, but in my life too.

                                I love to do sports, travel, hang out with friends
                                and family, play music and I really enjoy spending time
                                with my dog.
                            </p>
                            <p>
                                I&#39;ve always been autodidact, like to read articles,
                                tutorials and books about things that create
                                intrigue in me.
                            </p>
                            <p>

                                As a programmer I should say that almost everything
                                that I know I&#39;ve learned it from try new stuffs, reading
                                a lot, sometimes by try and error, and more important,
                                working. Work is the biggest school. That&#39;s why
                                I love to work, because I love to learn, I need to
                                keep my mind learning new things constantly.
                            </p>
                            <p>
                                Speaking about work, I&#39;m a very organized person
                                and like to be part of teams.

                                As a professional, I&#39;m developing my carreer day by day
                                trying to stay up to date with last technologies
                                and improving my knowleadges constantly as possible.
                            </p>
                            <p>
                                I&#39;m currently working at Global Logic Rosario&#39;s
                                offices as a Web UI Developer, I really love
                                what I do and my goal is keep growing as a
                                professional and develop my skills as far as
                                possible.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section-image">
                    <img className="perfil" src="img/hernan.jpg" />
                </div>
            </Section>
        );
    },

    getProps: function () {
        var props = {
            className: 'about',
            id: 'about'
        };

        return props;
    }
});

module.exports = About;
