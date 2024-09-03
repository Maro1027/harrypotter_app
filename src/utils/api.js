// export const getData = (url) => {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => resolve(data))
//       .catch((error) => {
//         //通信失敗時の処理
//         console.log(error);
//       });
//   });
// };

export const getData = (url) => {
  return fetch(url)
    .then((res) => res.json())
    .catch((error) => {
      //通信失敗時の処理
      console.log(error);
    });
};
