import React from 'react'
import {connect} from "react-redux";

const History = props => (
    props.clickHistory.length ?
        <div><h1>History</h1>
            <table>
                <tr>
                    <th>Click on</th>
                    <th>Date time</th>
                </tr>
                {props.clickHistory.map((entry, index) =>
                    (<tr key={index}>
                        <td>{entry.name}</td>
                        <td>{entry.dateTime}</td>
                    </tr>))}
            </table>
        </div> :
        <div><h1>History</h1></div>
);

const mapStateToProps = state => ({
    clickHistory: state.counter.clickHistory
});

export default connect(mapStateToProps)(History)
