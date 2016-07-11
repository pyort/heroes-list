import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router'
import TextField from 'material-ui/TextField';

import HeroesListContainer from './components/HeroesListContainer';

class Heroes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSource: [],
        };
    }

    handleUpdateInput(value) {
        this.setState({
            dataSource: [
                value,
                value + value,
                value + value + value,
            ],
        });
    };

    render() {
        return (
            <div>
                <Link to="/hero/heroId">Home</Link>
                <TextField hintText="Enter hero's name" />
                <HeroesListContainer />
            </div>
        );
    }
}

export default Heroes;
