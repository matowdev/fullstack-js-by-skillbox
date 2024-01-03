// подсчёт актуального/корректного возраста (всегда)
let me = {
  birthDate: { year: 1986, month: 7, day: 20 },
  getAge() {
    let now = new Date();
    // console.log(now); // Wed Jan 03 2024 16:49:41 GMT+0300 (Moscow Standard Time)
    let born = new Date(
      this.birthDate.year,
      this.birthDate.month,
      this.birthDate.day
    );
    // console.log(born); // Wed Aug 20 1986 00:00:00 GMT+0400 (Moscow Summer Time)
    let diffInMilliseconds = now.getTime() - born.getTime();
    // console.log(diffInMilliseconds); // 1179424609168

    return Math.floor(diffInMilliseconds / 1000 / 60 / 60 / 24 / 365.25);
  },
};

console.log(me.getAge()); // 37
