import React from 'react';
import ReactDOM from 'react-dom';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';

class HeroContainer extends React.Component {
    render() {
        return (
            <div className="hero-container">
                <Paper zDepth={2}>
                    <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more" />
                    {this.props.children}
                </Paper>
            </div>
        );
    }
}

export default HeroContainer;
