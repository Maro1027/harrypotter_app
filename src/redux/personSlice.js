import { createSlice } from "@reduxjs/toolkit";

export const personSlice = createSlice({
  name: "persons",
  initialState: {},
  reducers: {
    setPerson: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setPerson } = personSlice.actions;
export default personSlice.reducer;
