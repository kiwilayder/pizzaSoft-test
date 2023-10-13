import { useEffect } from "react";
import { useDispatch } from "react-redux";
import style from "./WorkerFormContainer.module.scss";
import { WorkerForm } from "./workerForm/WorkerForm";
import { setAddWorker } from "../../actions/workersThunk";

export const AddWorkerPanelContainer = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   const setDataWorker = (worker) => {
      dispatch(setAddWorker(worker));
   };

   return (
      <div className={style.formWrapper}>
         <WorkerForm setDataWorker={setDataWorker} />
      </div>
   );
};
