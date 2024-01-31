// This slice is for the active user data and configurations
const initialState = {
  users: [
    {
      id: "U-4576",
      password: "246810",
      email: "john@test.ma",
      fullName: "John Doe",
      img: "https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff",
      admin: false,
    },
    {
      id: "U-8251",
      password: "246810",
      email: "jane@test.ma",
      fullName: "Jane Doe",
      img: "https://ui-avatars.com/api/?name=Jane+Doe&background=FFC0CB&color=fff",
      admin: true,
    },
  ],
  activeUser: null,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case "USER/CREATE_USER":
      // TODO: ADJUST USERS CREATION TO MAKE IT INITIALLY ADMIN BUT NOT ON EXISTING PROJECTS UNTIL THE PROJECT ADMIN ADD THEM [PROJECTS SLICE]

      return { ...state, users: [...state.users, action.payload] };

    case "USER/USER_AUTHENTICATED":
      if (state.users.find((user) => user.id === action.payload.id && user.password === action.payload.password)) {
        console.log("Checked");
        return { ...state, activeUser: action.payload };
      } else return state;

    case "USER/LOGOUT":
      return { ...state, activeUser: null };

    default:
      return state;
  }
}

function registerUser(userObj) {
  console.log(userObj);
  return { type: "USER/CREATE_USER", payload: userObj };
}

function authenticateUser(userObj) {
  return { type: "USER/USER_AUTHENTICATED", payload: userObj };
}

function logoutUser() {
  return { type: "USER/LOGOUT" };
}

export { userReducer, authenticateUser, logoutUser, registerUser };
