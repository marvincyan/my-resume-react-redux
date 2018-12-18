const initState = {}
  
  const modalReducer = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_HIRE_MODAL_SUCCESS':
            console.log('update hire modal success');
            return state;
        default:
            return state;
    }
  };
  
  export default modalReducer;
