import { NavLink } from "react-router-dom";
import style from "./FilterPanelContainer.module.scss";
import { FilterPanel } from "./filterPanel/FilterPanel";

export const FilterPanelContainer = ({ setSearchParams, searchParams }) => {
   return (
      <div className={style.frameFilter}>
         <div className={style.filter}>
            <FilterPanel searchParams={searchParams} setSearchParams={setSearchParams} />
         </div>
         <div className={style.buttonWrapper}>
            <NavLink className={style.addWorker} to={"/add-worker"}>
               Добавить работника
            </NavLink>
         </div>
      </div>
   );
};
