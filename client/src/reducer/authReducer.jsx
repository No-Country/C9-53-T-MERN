export const initialAuthReducer = () => {
    return JSON.parse(localStorage.getItem("auth")) || initialState
  }
  
  export const initialState = {
    email: null,
    token: null,
    isAuth: true,
    profileMoto: null,
    profilePhoto: null,
    username: null

  };
  
  export const TYPES = {
    LOGIN: "[auth]LOGIN",
    LOGOUT: "[auth]LOGOUT",
  };
  
  export const authReducer = (state, action) => {
    switch (action.type) {
      case TYPES.LOGIN:
        return {
          ...state,
          email: action.payload.email,
          token: action.payload.token,
          isAuth: true,
          profileMoto: action.payload.profileMoto,
          profilePhoto: action.payload.profilePhoto,
          username: action.payload.username
        };
      case TYPES.LOGOUT:
        return {
          email: null,
          token: null,
          isAuth: false,
          profileMoto: null,
          profilePhoto: null,
          username: null
        };
      default:
        return state;
    }
  };