const updateHireModal = (project) => {
    return (dispatch, getState, {}) => {
        dispatch({ type: 'UPDATE_HIRE_MODAL_SUCCESS' });
    }
};

const updateThanksModal = (project) => {
    return (dispatch, getState, {}) => {
        dispatch({ type: 'UPDATE_THANKS_MODAL_SUCCESS' });
    }
};

export default ( updateHireModal, updateThanksModal );