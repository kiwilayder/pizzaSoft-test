import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWorkers } from "../../actions/workersThunk";
import { WorkersList } from "./workersList/WorkersList";
import style from "./WorkersContainer.module.scss";
import { FilterPanelContainer } from "../filterPanel/FilterPanelContainer";
import { useSearchParams } from "react-router-dom";
import { getFilterWorkers } from "../filterPanel/filterWorkerService";
import { getSortWorkers } from "../filterPanel/sortWorkerService";

export const WorkersContainer = () => {
   const [searchParams, setSearchParams] = useSearchParams();
   const { workers } = useSelector((state) => state.workers);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(setWorkers());
   }, []);

   const filterWorkers = useMemo(() => {
      return getSortWorkers(getFilterWorkers(workers, searchParams), searchParams);
   }, [searchParams, workers]);

   return (
      <div className={style.mainFrame}>
         <FilterPanelContainer searchParams={searchParams} setSearchParams={setSearchParams} />
         <WorkersList workers={filterWorkers} />
      </div>
   );
};
