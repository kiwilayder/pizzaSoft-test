import { useSelector } from "react-redux";
import { WorkerItem } from "../workerItem/WorkerItem";
import style from "./WorkersList.module.scss";

export const WorkersList = ({ workers }) => {
   const errorServer = useSelector((state) => state.workers.error);

   return (
      <div className={style.workersList}>
         {errorServer && <div>{errorServer}</div>}
         {workers.map((worker) => (
            <WorkerItem key={worker.id} worker={worker} />
         ))}
      </div>
   );
};
