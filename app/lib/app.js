// LIBS
var React = require('react');

// LAYOUT
var Container = require('components/layout/container');
var Header = require('components/layout/header');
var Content = require('components/layout/content');
var Footer = require('components/layout/footer');

// VIEWS
var Main = require('components/views/main');
var About = require('components/views/about');

var App = React.createClass({
    render: function() {
        return (
            <Container>
                <Header>
                </Header>

                <Content>
                    <Main />
                    <About />
                </Content>

                <Footer>
                </Footer>
            </Container>
        );
    }
});

React.render(<App />, document.body);
