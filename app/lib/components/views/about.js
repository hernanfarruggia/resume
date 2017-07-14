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
                                As developer I should say that almost everything
                                that I know I&#39;ve learned it from trying new stuffs, reading
                                a lot, and more important,working.
                                Work is the biggest school and forces you to keep you up to date and
                                in track.
                            </p>
                            <p>
                                I really love what I do and my goal is keep growing as a professional
                                and increase my skills as far as possible. Is that simple, just decide
                                want you want in your life, and fight for it!
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
