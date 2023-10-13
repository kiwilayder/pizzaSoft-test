import axios from "axios";

const instance = axios.create({
   baseURL: "http://localhost:3000/workers",
   headers: {
      "Content-Type": "application/json",
   },
});

export const apiPizzaSoft = {
   async getWorkers() {
      return instance.get();
   },
   async getWorker(personId) {
      return instance
         .get(`/${personId}`)
         .then((res) => {
            if (res.statusText !== "OK") throw new Error("The worker is not changed!");
            return res.data;
         })
         .catch((e) => console.log(e.message));
   },
   async changeWorker(worker) {
      return instance.put(`/${worker.id}`, {
         ...worker,
      });
   },
   async addWorker(worker) {
      return instance.post("", {
         ...worker,
      });
   },
};
