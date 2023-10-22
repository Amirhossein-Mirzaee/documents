const users = [
  {
    id: 18,
    name: "ali",
    age: 22,
  },
  {
    id: 24,
    name: "amin",
    age: 22,
  },
  {
    id: 39,
    name: "saman",
    age: 22,
  },
  {
    id: 41,
    name: "sami",
    age: 22,
  },
  {
    id: 57,
    name: "saei",
    age: 22,
  },
];
const isLogin = (userID) => {
  const isUserInUsers = users.some((user) => user.id === userID);
  return isUserInUsers;
};

export { isLogin };
