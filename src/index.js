import {createStore} from 'redux';

const counter = (state = 0, action) => {
    console.log(action);
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'RND':
            return state + action.rndValue;
        default:
            return state;
    }
};

const store = createStore(counter);

const inc = () => {
    return {
        type: 'INC'
    }
};

const dec = () => {
    return {
        type: 'DEC'
    }
};

const rnd = (rndValue) => {
    return {
        type: 'RND',
        rndValue
    }
};

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