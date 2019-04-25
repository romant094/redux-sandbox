import {createStore, bindActionCreators} from 'redux';
import reducer from "./reducer";
import * as actions from './actions';

const store = createStore(reducer);
const {dispatch} = store;
const {inc, dec, rnd} = bindActionCreators(actions, dispatch);

document
    .querySelectorAll('.btn')[1]
    .addEventListener('click', inc);

document
    .querySelectorAll('.btn')[0]
    .addEventListener('click', dec);

document
    .querySelectorAll('.btn')[2]
    .addEventListener('click', () => {
        const payload = Math.floor(Math.random() * 10) + 1;
        rnd(payload)
    });

const update = () => {
    document
        .querySelector('#counter')
        .textContent = store.getState();
};

store.subscribe(update);