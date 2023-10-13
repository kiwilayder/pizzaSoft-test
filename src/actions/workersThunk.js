import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiPizzaSoft } from "../api/api";
import { addWorker, addWorkers, changeDataWorker, setError } from "../store/workersSlice";

export const setWorkers = createAsyncThunk("workers/setWorkers", async (_, { dispatch }) => {
   try {
      const response = await apiPizzaSoft.getWorkers();
      if (response.statusText !== "OK") throw new Error("Server error!");
      dispatch(addWorkers(response.data));
   } catch (e) {
      dispatch(setError(e.message));
      console.log(e.message);
   }
});

export const setChangeWorker = createAsyncThunk("workers/setChangeWorker", async (worker, { dispatch }) => {
   try {
      const response = await apiPizzaSoft.changeWorker(worker);

      if (response.statusText !== "OK") throw new Error("The worker is not changed!");

      dispatch(changeDataWorker(response.data));
   } catch (e) {
      dispatch(setError(e.message));
      console.log(e.message);
   }
});

export const setAddWorker = createAsyncThunk("workers/addWorker", async (worker, { dispatch }) => {
   try {
      const response = await apiPizzaSoft.addWorker(worker);

      if (response.statusText !== "Created") throw new Error("The user is not created!");
      dispatch(addWorker(response.data));
   } catch (e) {
      dispatch(setError(e.message));
      console.log(e.message);
   }
});
