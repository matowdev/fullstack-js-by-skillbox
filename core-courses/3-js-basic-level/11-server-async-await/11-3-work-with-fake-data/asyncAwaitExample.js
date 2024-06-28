let result = fetch('https://gorest.co.in/public-api/users', {
  headers: {
    Accept: 'application/json',
    Authorization:
      'Bearer d2818f291e656d87a93a0309303c1aecc3a865442a49d1d34fe56fa6a7f46b76',
    'Content-Type': 'application/json',
  },
});

console.log(result); // Promise {<fulfilled>: Response}

async function getUsers() {
  const response = await fetch('https://gorest.co.in/public-api/users', {
    headers: {
      Accept: 'application/json',
      Authorization:
        'Bearer d2818f291e656d87a93a0309303c1aecc3a865442a49d1d34fe56fa6a7f46b76',
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  console.log(data);
}

getUsers(); // Promise {<pending>} -> {code: 200, meta: {…}, data: Array(10)}
await getUsers(); // {code: 200, meta: {…}, data: Array(10)}
