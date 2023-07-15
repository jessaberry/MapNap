import { createSlice } from "@reduxjs/toolkit";
import { getExperiencesAsync, addExperienceAsync, deleteExperienceAsync, updateExperienceAsync } from "./thunksExperience";
import { REQUEST_STATE, INITIAL_STATE } from "./stateExperience";

export const expSlice = createSlice({
  name: "exp",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getExperiencesAsync.fulfilled, (state, action) => {
      state.getExperiences = REQUEST_STATE.FULFILLED;
      state.exp = action.payload;
    });

    builder.addCase(addExperienceAsync.fulfilled, (state, action) => {
      state.addExperience = REQUEST_STATE.FULFILLED;
      state.exp = action.payload;
    });
    builder.addCase(addExperienceAsync.pending, (state, action) => {
      state.addExperience = REQUEST_STATE.PENDING;
      state.error = null;
    });
    builder.addCase(addExperienceAsync.rejected, (state, action) => {
      state.addExperience = REQUEST_STATE.REJECTED;
      state.error = action.error;
    });

    builder.addCase(deleteExperienceAsync.fulfilled, (state, action) => {
      state.deleteExperience = REQUEST_STATE.FULFILLED;
      state.exp = action.payload;
    });
    builder.addCase(deleteExperienceAsync.pending, (state, action) => {
      state.deleteExperience = REQUEST_STATE.PENDING;
      state.error = null;
    });
    builder.addCase(deleteExperienceAsync.rejected, (state, action) => {
      state.deleteExperience = REQUEST_STATE.REJECTED;
      state.error = action.error;
    });

    builder.addCase(updateExperienceAsync.fulfilled, (state, action) => {
      state.updateExperience = REQUEST_STATE.FULFILLED;
      state.exp = action.payload;
    });
    builder.addCase(updateExperienceAsync.pending, (state, action) => {
      state.updateExperience = REQUEST_STATE.PENDING;
      state.error = null;
    });
    builder.addCase(updateExperienceAsync.rejected, (state, action) => {
      state.updateExperience = REQUEST_STATE.REJECTED;
      state.error = action.error;
    });
  },
});

export const { addExperience, deleteExperience, updateExperience } = expSlice.actions;
export default expSlice.reducer;