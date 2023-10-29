const initialState = {
    data: {
      isLoading: false,
      hasError: null,
      data: null
    }
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'fetchDataRequest':
        return {
          ...state,
          data: {
            isLoading: true,
            hasError: null,
            data: null
          }
        };
      case 'success':
        return {
          ...state,
          data: {
            isLoading: false,
            hasError: null,
            data: action.payload
          }
        };
      case 'failure':
        return {
          ...state,
          data: {
            isLoading: false,
            hasError: action.error,
            data: null
          }
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  