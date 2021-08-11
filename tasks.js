import users from "./users.js";

console.log("-------------------- task 1 ----------------------------------");
const getUserNames = (users) => users.map((user) => user.name);
console.log(getUserNames(users));

console.log("-------------------- task 2 ----------------------------------");
const getUsersWithEyeColor = (users, color) =>
  users.filter((user) => user.eyeColor === color);

console.log(getUsersWithEyeColor(users, "blue"));

console.log("-------------------- task 3 ----------------------------------");
const getUsersWithGender = (users, gender) => {
  const maleGender = users.filter((user) => user.gender === gender);
  return maleGender.map((user) => user.name);
};
console.log(getUsersWithGender(users, "male"));

console.log("-------------------- task 4 ----------------------------------");

const getInactiveUsers = users.filter(function (user) {
  return !user.isActive;
});
console.log(getInactiveUsers);

console.log("-------------------- task 5 ----------------------------------");

const getUserWithEmail = (users, email) =>
  users.find((user) => user.email === email);

console.log(getUserWithEmail(users, "shereeanthony@kog.com"));

console.log(getUserWithEmail(users, "elmahead@omatom.com"));

console.log("-------------------- task 6 ----------------------------------");
const getUsersWithAge = (users, min, max) =>
  users.filter((user) => min <= user.age && user.age <= max);
console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));

console.log("-------------------- task 7 ----------------------------------");

const calculateTotalBalance = (users) =>
  users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
console.log(calculateTotalBalance(users)); // 20916

console.log("-------------------- task 8 ----------------------------------");

const getUsersWithFriend = (users, friendName) => {
  return users
    .filter((user) => user.friends.some((friend) => friend === friendName))
    .map((user) => user.name);
};
console.log(getUsersWithFriend(users, "Briana Decker"));
console.log(getUsersWithFriend(users, "Goldie Gentry"));

console.log("-------------------- task 9 ----------------------------------");
const getNamesSortedByFriendsCount = (users) => {
  return users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map((user) => user.name);
};
console.log(getNamesSortedByFriendsCount(users));

console.log("-------------------- task 10 ----------------------------------");

const getSortedUniqueSkills = (users) => {
  return users
    .reduce(function (acc, user) {
      return [...acc, ...user.skills];
    }, [])
    .reduce(function (acc, skill) {
      // console.log(acc);
      if (acc.includes(skill)) {
        return acc;
      }
      return [...acc, skill];
    }, [])
    .sort();
};

console.log(getSortedUniqueSkills(users));
