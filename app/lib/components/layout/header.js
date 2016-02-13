// LIBS
var React = require('react');

var Header = React.createClass ({
    render: function () {
        return (
            <div className="header">
                <div className="header--logo">
                    Hernán Farruggia
                </div>
                <ul className="header--menu">
                    <li className="item">
                        <a href="#about" className="link">About</a>
                    </li>
                    <li className="item">
                        <a href="#education" className="link">Education</a>
                    </li>
                    <li className="item">
                        <a href="#work" className="link">Work experience</a>
                    </li>
                    <li className="item">
                        <a href="#skills" className="link">Skills</a>
                    </li>
                    <li className="item">
                        <a href="#portfolio" className="link">Portfolio</a>
                    </li>
                    <li className="item">
                        <a href="#contact" className="link">Contact</a>
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = Header;
