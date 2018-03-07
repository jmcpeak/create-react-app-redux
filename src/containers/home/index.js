import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
    boundAbout,
    boundDecrement,
    boundDecrementAsync,
    boundIncrement,
    boundIncrementAsync,
    boundReset
} from '../../modules/counter';
import {withRouter} from 'react-router';

const Home = props => (
    <div>
        <h1>Home</h1>
        <p>Count: {props.count}</p>

        <p>
            <button onClick={props.increment} disabled={props.isIncrementing}>Increment</button>
            <button onClick={props.incrementAsync} disabled={props.isIncrementing}>Increment Async</button>
        </p>

        <p>
            <button onClick={props.decrement} disabled={props.isDecrementing}>Decrement</button>
            <button onClick={props.decrementAsync} disabled={props.isDecrementing}>Decrement Async</button>
        </p>

        <p>
            <button onClick={props.about}>Go to about page via redux</button>
        </p>

        <p>
            <button onClick={props.reset}>Reset</button>
        </p>
    </div>
);

const mapStateToProps = state => ({
    count: state.counter.count,
    isIncrementing: state.counter.isIncrementing,
    isDecrementing: state.counter.isDecrementing
});

const mapDispatchToProps = dispatch => bindActionCreators({
    increment: boundIncrement,
    incrementAsync: boundIncrementAsync,
    decrement: boundDecrement,
    decrementAsync: boundDecrementAsync,
    about: boundAbout,
    reset: boundReset
}, dispatch);

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Home)
);
