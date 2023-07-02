import { User } from "./api/user.js";

const init = async () => {
  console.log("Script started!");

  // Expected API
  const userAPI = new User();
  // Get initial users
  console.group("Initial users");
  console.log(await userAPI.getAll());
  console.groupEnd();
  // Create user
  await userAPI.create({
    id: 2,
    firstName: "Gerardo",
    lastName: "Perruci",
    email: "johndoe1@test.com",
    password: "123456",
  });
  // Get users after create
  console.group("Users after create");
  console.log(await userAPI.getAll());
  console.groupEnd();
  // Update user
  await userAPI.update(2, {
    password: "12345678",
  });
  // Get users after update
  console.group("Users after update");
  console.log(await userAPI.getAll());
  console.groupEnd();
  // Delete user
  await userAPI.delete(2);
  // Get users after delete
  console.group("Users after delete");
  console.log(await userAPI.getAll());
  console.groupEnd();

  console.log("Script ended successfully!");
};

window.addEventListener("DOMContentLoaded", init);
