import { Route, Routes } from "react-router-dom";
import { Workers } from "../pages/Workers";
import { WorkerEditPanel } from "../pages/WorkerEditPanel";
import { AddWorkerPanel } from "../pages/AddWorkerPanel";

export const App = () => {
   return (
      <Routes>
         <Route path="/:work?/:isArchive?" element={<Workers />} />
         <Route path="/edit-worker/:personId" element={<WorkerEditPanel />} />
         <Route path="/add-worker" element={<AddWorkerPanel />} />
      </Routes>
   );
};
