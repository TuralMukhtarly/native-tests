const promise = () => {
  return Promise.all([
    new Promise((res) => res(1)),
    new Promise((res) => res(2)),
  ]);
};

promise()
  .then((res) => {
    console.log(res);
    alert("Promises came")
  })
  .catch(err => err);
