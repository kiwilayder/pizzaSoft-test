export const flow = (workers, filters) => {
   if (filters.length === 0) return workers;
   for (let i = 0; i < filters.length; i++) {
      workers = filters[i][0](workers, filters[i][1]);
   }

   return workers;
};
