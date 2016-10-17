export const clearInput = () => {
    return {
        type: 'INPUT_CLEARED',
    }
};

export const inputChanged = (val) => {
    return {
        type: 'INPUT_CHANGED',
        payload: val,
    }
};
