import bycrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bycrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Client User",
    email: "client@gmail.com",
    password: bycrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];

export default users;
