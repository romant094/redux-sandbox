import React from 'react';
import {connect} from "react-redux";

const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div className="jumbotron">
            <h2>{counter}</h2>
            <div className="buttons">
                <button className="btn btn-primary btn-large" onClick={dec}>-1</button>
                <button className="btn btn-primary btn-large" onClick={inc}>+1</button>
                <button className="btn btn-primary btn-large" onClick={rnd}>+random</button>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        counter: state
    }
};

export default connect(mapStateToProps)(Counter);