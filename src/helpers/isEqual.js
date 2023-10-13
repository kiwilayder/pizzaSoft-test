export const isEqual = (a, b) => {
   if (a === null || b === null) return 1;
   const keysA = Object.keys(a);
   const keysB = Object.keys(b);
   if (typeof a !== typeof b) {
      return false;
   }
   if (keysA.length !== keysB.length) return false;
   for (let i = 0; i < keysA.length; i++) {
      if (typeof a[keysA[i]] === "object" && typeof b[keysB[i]] === "object") {
         if (deepEqual(a[keysA[i]], b[keysB[i]])) continue;
         else {
            return false;
         }
      }
      if (a[keysA[i]] !== b[keysB[i]]) return false;
   }
   return true;
};
