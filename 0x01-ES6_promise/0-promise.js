export default function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
      let statusCode = 200;
      setTimeout(() => {
        if (statusCode === 200) {
          resolve('Success');
        } else {
          reject(Error(`Failed status: ${statusCode}`));
        }
      }, 2000);
    });
}
