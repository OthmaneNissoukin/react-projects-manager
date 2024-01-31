// import { tasksReducer } from "./features/tasks";
import { membersReducer } from "./features/members";
import { projectsReducer } from "./features/projects";
import { userReducer } from "./features/user";

import { createStore } from "redux";

import { combineReducers } from "redux";

const reducer = combineReducers({
  // taskSlice: tasksReducer,
  memberSlice: membersReducer,
  projectSlice: projectsReducer,
  userSlice: userReducer,
});

const store = createStore(reducer);

export { store };
