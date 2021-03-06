const initialState = {
    order: {},
    loading: false,
    error: "",
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case "MAKE_ORDER":
            return {
                ...state,
                order: action.payload,
            };

        default:
            return state;
    }
};

export default orderReducer;