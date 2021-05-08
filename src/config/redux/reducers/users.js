const initialState = {
  user: {},
  loading: false,
  error: "",
  role: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_UP_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "SIGN_UP_SUCCESS":
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
        loading: false,
      };
    case "SIGN_UP_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "LOGIN":
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
        role: action.role,
      };
    case "RESET_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "RESET_SUCCESS":
      return {
        ...state,
        loading: false,
      };
    case "RESET_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "GET_PROFILE_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_PROFILE_SUCCESS":
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
        loading: false,
      };
    case "GET_PROFILE_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "UPDATE_PROFILE_SUCCESS":
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    case "UPDATE_PROFILE_FAILURE":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
