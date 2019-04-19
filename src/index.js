import {createStore} from 'redux';


const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        default:
            return state;
    }
};

const store = createStore(counter);

document
    .querySelectorAll('.btn')
    .forEach((btn) => {
        btn.addEventListener('click', function () {
            const id = this.getAttribute('id');
            store.dispatch({type: id.toUpperCase()});
        })
    });

const update = () => {
    document
        .querySelector('#counter')
        .textContent = store.getState();
};

store.subscribe(update);