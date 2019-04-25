import React from 'react';
import {connect} from "react-redux";
import * as actions from '../actions';
import {bindActionCreators} from "redux/es/redux";

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

const mapDispatchToProps = (dispatch) => {
    const {inc, dec,rnd} = bindActionCreators(actions, dispatch);
    return {
        inc,
        dec,
        rnd: () => {
            const randomValue = Math.floor(Math.random() * 10);
            rnd(randomValue);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);