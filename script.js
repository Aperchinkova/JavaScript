// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKhoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKhoalas);

// const checkWinner = function (avgDolphins, avgKhoalas) {
//     if (avgDolphins >= 2 * avgKhoalas) {
//         console.log(`Dolphins win a cup (${avgDolphins} vs ${avgKhoalas})`);
//     } else if (avgKhoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win a cup (${avgKhoalas} vs ${avgDolphins})`);
//     } else {
//         console.log(`No team wins...`);
//     }
// }
// console.log(checkWinner(scoreDolphins, scoreKhoalas));

// console.log(checkWinner(576, 111));

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, total);

// const jones = {
//     firstName: 'Jonas',
//     lastName: 'Neshtosi',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Aya', 'Seyho', 'Steven']
// };

// console.log(jones);

// console.log(jones.firstName);
// console.log(jones.lastName);

// console.log(jones['lastName']);
// const nameKey = 'Name';
// console.log(jones['first' + nameKey]);
// console.log(jones['last' + nameKey]);

// const inter = prompt('What do u want " fname,lname,job,age,friends?');
// console.log(jones[inter]);

// if (jones[inter]) {
//     console.log(jones[inter]);
// } else {
//     console.log(`nqma`);
// }

// jones.location = 'Portugal';
// jones['email'] = '@neshtosi';
// console.log(jones);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Neshtosi',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Aya', 'Seyho', 'Steven'],
//     has: true,

//     // calcAge: function () {
//     //     console.log(this);
//     //     return 2037 - this.birthYear;
//     // }
//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },
//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()} years old ${jonas.job}, and he has ${this.has ? 'a' : 'no'} driver's license.`;
//     }
// };
// console.log(jonas.calcAge());
// //console.log(jonas['calcAge'](1991));
// console.log(jonas.age);
// console.log(jonas.getSummary());

// const mark = {
//     fullName: 'Mark Muller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// };

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// };
// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi, john.bmi);

// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName} s BMI (${mark.bmi}) is higher than (${mark.fullName})s bmi (${john.bmi})`);
// } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName} s BMI (${john.bmi}) is higher than (${john.fullName})s bmi (${mark.bmi})`);
// }

// for (let rem = 1; rem <= 10; rem++) {
//     console.log(`num ${rem}`);
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log(`Looop is about to end...`);
// };

// const bills = [300, 40, 50, 199, 400, 350, 56, 134, 157, 100];
// const tips = [];
// const totals = [];
// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// for (let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(bills[i] + tip);
// }
// console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage(bills));
