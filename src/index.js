import {createStore} from 'redux';
import reducer from "./reducer";
import {inc, dec, rnd} from './actions';

const store = createStore(reducer);

document
    .querySelectorAll('.btn')[1]
    .addEventListener('click', () => {
        store.dispatch(inc());
    });

document
    .querySelectorAll('.btn')[0]
    .addEventListener('click', () => {
        store.dispatch(dec());
    });

document
    .querySelectorAll('.btn')[2]
    .addEventListener('click', () => {
        const rndValue = Math.floor(Math.random() * 10) + 1;
        store.dispatch(rnd(rndValue));
    });

const update = () => {
    document
        .querySelector('#counter')
        .textContent = store.getState();
};

store.subscribe(update);