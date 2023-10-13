export const getRoleWorker = (role) => {
   switch (role) {
      case "driver":
         return "Водитель";
      case "waiter":
         return "Официант";
      case "cook":
         return "Повар";
      default:
         return "Нет должности";
   }
};
