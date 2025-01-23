// function intersection(nums1, nums2) {
//   const set1 = new Set(nums1);
//   const set2 = new Set(nums2);
//   const result = [];

//   set1.forEach((value) => {
//     if (set2.has(value)) {
//       result.push(value);
//     }
//   });

//   return result;
// }

let myPromise = new Promise((reject) => {
  let a = 6,
    b = 4;
  if (b == 0 || a == 0) {
    reject(new Error("Berilgan sonlar 0ga teng bo'lmsligi kerak"));
  }
  setTimeout(() => {
    console.log(a / b);
  }, 2000);
});
