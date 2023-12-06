import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    updatedCars: (state, action) => {
      state.data.push(action.payload);
    },
    removeCar: (state, action) => {
      state.data = state.data.filter((car) => car.id !== action.payload.id);
    },
  },
});

export const { updatedCars, removeCar } = carsSlice.actions;

export default carsSlice.reducer;
