import { flow } from "../../helpers/flow";

export const filterByWork = (workers, work) => {
   return workers.filter((worker) => worker.role === work);
};

export const filterByIsArchive = (workers) => {
   return workers.filter((worker) => worker.isArchive === true);
};

export const getFilterWorkers = (workers, searchParams) => {
   const filters = [];

   if (searchParams.has("work")) filters.push([filterByWork, searchParams.get("work")]);
   if (searchParams.has("isArchive")) filters.push([filterByIsArchive]);

   return flow(workers, filters);
};
