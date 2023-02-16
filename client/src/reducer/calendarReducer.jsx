export const initialCalendarReducer = () => {
    return JSON.parse(localStorage.getItem("Calendar")) || initialCalendar
  }
  
  export const initialCalendar = {

    "monday": [
        {
          "id": 28,
          "name": "Action"
        },
        {
            "id": 28,
            "name": "Action"
          },
          {
            "id": 28,
            "name": "Action"
          }
        ]

  };
  
  export const TYPES = {

    LOGIN: "[Calendar]LOGIN",
    LOGOUT: "[Calendar]LOGOUT",

  };
  
  export const CalendarReducer = (state, action) => {
    switch (action.type) {
      case TYPES.LOGIN:
        return {
          ...state,
          email: action.payload.email,
          token: action.payload.token,
          isCalendar: true,
          profileMoto: action.payload.profileMoto,
          profilePhoto: action.payload.profilePhoto,
          username: action.payload.username
        };
      case TYPES.LOGOUT:
        return {
          email: null,
          token: null,
          isCalendar: false,
          profileMoto: null,
          profilePhoto: null,
          username: null
        };
      default:
        return state;
    }
  };