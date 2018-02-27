import React from 'react';
import {Link, Route} from 'react-router-dom'
import Home from '../home'
import About from '../about'
import History from '../history'

export const HOME_PATH = '/';
export const ABOUT_PATH = '/about';
export const HISTORY_PATH = '/history';

const App = () => (
    <div>
        <header>
            <Link to={HOME_PATH}>Home</Link>
            <Link to={ABOUT_PATH}>About</Link>
            <Link to={HISTORY_PATH}>History</Link>
        </header>

        <main>
            <Route exact path={HOME_PATH} component={Home}/>
            <Route exact path={ABOUT_PATH} component={About}/>
            <Route exact path={HISTORY_PATH} component={History}/>
        </main>
    </div>
);

export default App
