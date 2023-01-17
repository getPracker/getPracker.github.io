import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "../features/Projects/projectsSlice";

export default configureStore({
  reducer: {
    projects: projectsReducer
  }
});
