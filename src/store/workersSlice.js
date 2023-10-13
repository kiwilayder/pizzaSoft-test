import { createSlice } from "@reduxjs/toolkit";

const workersSlice = createSlice({
   name: "workers",
   initialState: {
      workers: [],
      error: "",
   },
   reducers: {
      addWorkers(state, action) {
         state.error = "";
         state.workers = action.payload;
      },

      changeDataWorker(state, action) {
         state.error = "";
         const index = state.workers.findIndex((worker) => worker.id === action.payload.id);
         state.workers[index] = { ...action.payload };

         state.workers = state.workers.map((worker) => {
            if (worker.id === action.payload.id) return { ...action.payload };
            return worker;
         });
      },
      addWorker(state, action) {
         state.error = "";
         state.workers.push(action.payload);
      },
      setError(state, action) {
         state.error = action.payload;
      },
   },
});

export const { addWorkers, addWorker, changeDataWorker, setError } = workersSlice.actions;
export default workersSlice.reducer;
