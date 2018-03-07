import React from 'react'
import {connect} from "react-redux";

const History = props => (
    <div><h1>History</h1>
        {props.clickHistory.length > 0 && (
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
        )}
    </div>
);

const mapStateToProps = state => ({
    clickHistory: state.counter.clickHistory
});

export default connect(mapStateToProps)(History)
