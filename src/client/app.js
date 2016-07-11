import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';

import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import HeroContainer from './components/container/HeroContainer';
import AttributionFooter from './components/footer/AttributionFooter';
import Heroes from './views/HeroesList/Heroes';
import HeroDetails from './views/heroDetails/HeroDetails';
import NotFound from './views/notFound/NotFound';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import * as HeroesAppReducers from './reducers';

import "./styles/index.scss";

injectTapEventPlugin();

console.log(HeroesAppReducers);

let store = createStore(HeroesAppReducers);

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <Provider store={store}>
                    <HeroContainer>
                        {this.props.children}
                        <AttributionFooter />
                    </HeroContainer>
                </Provider>
            </MuiThemeProvider>
        );
    }
}

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Heroes}/>
            <Route path="/hero/:heroId" component={HeroDetails}/>
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>
), document.getElementById('root'))
