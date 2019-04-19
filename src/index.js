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

document
    .querySelectorAll('.btn')
    .forEach((btn) => {
        btn.addEventListener('click', function () {
            const id = this.getAttribute('id');
            const rndValue = Math.floor(Math.random() * 10) + 1;
            store.dispatch({
                type: id.toUpperCase(),
                rndValue
            });
        })
    });

const update = () => {
    document
        .querySelector('#counter')
        .textContent = store.getState();
};

store.subscribe(update);