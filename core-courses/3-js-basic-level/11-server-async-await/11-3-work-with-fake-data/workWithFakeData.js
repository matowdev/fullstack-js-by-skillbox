// ** работа с сервисом Go Rest (через API Version 0, т.е. через /public-api/ и личный API Tokens)

// 1. получение списка пользователей (заготовленного):
fetch('https://gorest.co.in/public-api/users', {
  headers: {
    Accept: 'application/json',
    Authorization:
      'Bearer d2818f291e656d87a93a0309303c1aecc3a865442a49d1d34fe56fa6a7f46b76',
    'Content-Type': 'application/json',
  },
});

// 2. добавление "нового/уже своего" пользователя:
fetch('https://gorest.co.in/public-api/users', {
  method: 'POST',
  body: JSON.stringify({
    name: 'Roni Mironi',
    email: 'roni217@senger.test',
    gender: 'male',
    status: 'active',
  }),
  headers: {
    Accept: 'application/json',
    Authorization:
      'Bearer d2818f291e656d87a93a0309303c1aecc3a865442a49d1d34fe56fa6a7f46b76',
    'Content-Type': 'application/json',
  },
});

// 3. вывод/обращение к свеже-добававленному пользователю:
fetch('https://gorest.co.in/public-api/users/6988182', {
  method: 'PATCH',
  headers: {
    Accept: 'application/json',
    Authorization:
      'Bearer d2818f291e656d87a93a0309303c1aecc3a865442a49d1d34fe56fa6a7f46b76',
    'Content-Type': 'application/json',
  },
});

// 4. удаление того/иного пользователя:
fetch('https://gorest.co.in/public-api/users/6988178', {
  method: 'DELETE',
  headers: {
    Accept: 'application/json',
    Authorization:
      'Bearer d2818f291e656d87a93a0309303c1aecc3a865442a49d1d34fe56fa6a7f46b76',
    'Content-Type': 'application/json',
  },
});

// 5. подтверждение удаления
fetch('https://gorest.co.in/public-api/users/6988178', {
  method: 'PATCH',
  headers: {
    Accept: 'application/json',
    Authorization:
      'Bearer d2818f291e656d87a93a0309303c1aecc3a865442a49d1d34fe56fa6a7f46b76',
    'Content-Type': 'application/json',
  },
});
