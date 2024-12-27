import { createSlice } from "@reduxjs/toolkit";

const initialCounters = [
  {
    id: 1,
    value: 6,
  },
  {
    id: 2,
    value: 4,
  },
];
const contersSlice = createSlice({
  name: "counter",
  initialState: initialCounters,
  reducers: {
    increment: (state, action) => {
      const id = action.payload;
      const findIndex = initialCounters.findIndex((c) => c.id === id);
      state[findIndex].value++;
    },
    decrement: (state, action) => {
      const id = action.payload;
      const findIndex = initialCounters.findIndex((c) => c.id === id);
      state[findIndex].value--;
    },
  },
});

export default contersSlice.reducer;
export const { increment, decrement } = contersSlice.actions;
