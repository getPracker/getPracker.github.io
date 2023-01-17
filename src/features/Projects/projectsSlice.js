import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const addNewProject = createAsyncThunk(
    'projects/addNewProject',
    async (project, thunkAPI) => {
      await console.log(project);
      thunkAPI.dispatch(addProject(project));
    }
  );

export const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    projects: {}
  },
  reducers: {
    addProject: (state, action) => {
      const { id, name, description } = action.payload;
      state.projects[id] = {
        id: id,
        name: name,
        description: description
      };
    },
    // addQuizIdForTopic: (state, action) => {
    //   const { topicId, quizId } = action.payload;
    //   state.topics[topicId].quizIds.push(quizId);
    // }
  }
});

export const { addProject } = projectsSlice.actions;
export const selectProjects = (state) => state.projects.projects;
export default projectsSlice.reducer;
