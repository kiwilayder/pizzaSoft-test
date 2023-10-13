import { flow } from "../../helpers/flow";

const getTimestamp = (date) => {
   const [day, month, year] = date.split(".");
   return new Date(year, month - 1, day).getTime();
};

export const sortByName = (workers) => {
   return workers.toSorted((a, b) => (a.name > b.name ? 1 : -1));
};

export const sortByBirthday = (workers) => {
   return workers.toSorted((a, b) => getTimestamp(a.birthday) - getTimestamp(b.birthday));
};

export const getSortWorkers = (workers, searchParams) => {
   const typeSort = searchParams.get("sort") === "name" ? sortByName : sortByBirthday;

   return flow(workers, [[typeSort]]);
};
