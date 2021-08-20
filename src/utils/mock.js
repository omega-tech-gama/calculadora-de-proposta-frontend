export const Mock = (success, timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(success) {
        resolve();
      } else {
        reject({message: 'Error'});
      }
    }, timeout);
  });
}