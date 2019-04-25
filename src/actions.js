export const inc = () => {
    return {
        type: 'INC'
    }
};

export const dec = () => {
    return {
        type: 'DEC'
    }
};

export const rnd = () => {
    const randomValue = Math.floor(Math.random() * 10);

    return {
        type: 'RND',
        rndValue: randomValue
    }
};