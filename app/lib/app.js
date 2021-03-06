// LIBS
var React = require('react');

// LAYOUT
var Header = require('./components/layout/header');
var Footer = require('./components/layout/footer');

// VIEWS
var Main = require('./components/views/main');
var About = require('./components/views/about');
var Education = require('./components/views/education');
var Work = require('./components/views/work');
var Skills = require('./components/views/skills');
var Contact = require('./components/views/contact');

var App = React.createClass({
    render: function() {
        return (
            <div className="twelve columns">
                <Header>
                </Header>

                <Main />
                <About />
                <Education />
                <Work />
                <Skills />
                <Contact />

                <Footer>
                </Footer>
            </div>
        );
    }
});

React.render(<App />, document.body);
