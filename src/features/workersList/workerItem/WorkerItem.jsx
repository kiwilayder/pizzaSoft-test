import { NavLink } from "react-router-dom";
import style from "./WorkerItem.module.scss";
import { getRoleWorker } from "../../../helpers/getRoleWorker";

export const WorkerItem = ({ worker }) => {
   return (
      <NavLink to={`/edit-worker/${worker.id}`} className={style.cardWorker}>
         <span className={style.name}>{worker.name}</span>
         <span className={style.role}>Должность: {getRoleWorker(worker.role)}</span>
         <span className={style.phone}>Телефон: {worker.phone}</span>
         <span className={style.phone}> {worker.birthday}</span>
      </NavLink>
   );
};
