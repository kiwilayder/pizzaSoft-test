import { getSortWorkers, sortByBirthday, sortByName } from "./sortWorkerService";

const initialWorkers = [
   {
      id: 1,
      name: "Даниил Кузнецов",
      isArchive: true,
      role: "waiter",
      phone: "+7 (933) 582-2673",
      birthday: "25.05.1987",
   },
   {
      id: 2,
      name: "Владлен Тетерин",
      isArchive: true,
      role: "driver",
      phone: "+7 (808) 592-2480",
      birthday: "20.06.1978",
   },
   {
      id: 3,
      name: "Валерий Пестов",
      isArchive: false,
      role: "cook",
      phone: "+7 (899) 403-2387",
      birthday: "20.01.1987",
   },
];

test("sort by name", () => {
   const sortWorkersByName = sortByName(initialWorkers);

   expect(getSortWorkers(initialWorkers, new URL("http://localhost:5173/?sort=name").searchParams)).toEqual(
      sortWorkersByName
   );
});

test("sort by birthday", () => {
   const sortWorkersByBirthday = sortByBirthday(initialWorkers);

   expect(
      getSortWorkers(initialWorkers, new URL("http://localhost:5173/?sort=birthday").searchParams)
   ).toEqual(sortWorkersByBirthday);
});
