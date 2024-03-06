export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    let status;
    setTimeout(() => {
      if (status === 200) {
        resolve('Success');
      } else {
        reject(Error(`Failed status: ${status}`));
      }
    }, 2000);
  });
}
