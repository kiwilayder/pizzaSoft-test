import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setChangeWorker } from "../../actions/workersThunk";
import style from "./WorkerFormContainer.module.scss";
import { WorkerForm } from "./workerForm/WorkerForm";
import { apiPizzaSoft } from "../../api/api";

export const WorkerEditPanelContainer = () => {
   const [person, setPerson] = useState();
   const [errorServer, setErrorServer] = useState("");
   const { personId } = useParams();

   const dispatch = useDispatch();

   useEffect(() => {
      window.scrollTo(0, 0);
      apiPizzaSoft
         .getWorker(personId)
         .then((res) => setPerson(res))
         .catch((e) => {
            setErrorServer(e.message);
         });
   }, [personId]);

   const setDataWorker = (worker) => {
      dispatch(setChangeWorker(worker));
   };

   if (!person) return null;

   return (
      <div className={style.formWrapper}>
         {errorServer && <div>{errorServer}</div>}
         <WorkerForm person={person} setDataWorker={setDataWorker} />
      </div>
   );
};
